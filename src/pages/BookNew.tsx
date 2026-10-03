import { useNavigate } from "react-router";
import { useCreateBookMutation } from "../api/bookApi";
import BookForm from "../components/books/BookForm";
import Toast from "../components/ui/Toast";
import { useToast } from "../hooks/useToast";
import type { BookGenre } from "../types/types";
export default function BookNew() {
  const navigate = useNavigate();
  const [createBook] = useCreateBookMutation();
  const { toast, showToast, hideToast } = useToast();
  const submit = async (data: {
    title: string;
    author: string;
    genre: BookGenre;
    isbn: string;
    description?: string;
    copies: number;
  }) => {
    try {
      await createBook(data).unwrap();
      showToast("Book created successfully", "success");
      navigate("/books");
    } catch {
      showToast("Failed to create book", "error");
    }
  };
  return (
    <div className="page-shell">
      <div className="mb-7">
        <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#3157d5]">
          Catalogue
        </p>
        <h1 className="mt-1 text-3xl font-black">Add a new book</h1>
        <p className="mt-1 text-sm text-[#667085]">
          Add the details your readers need to discover the title.
        </p>
      </div>
      <div className="surface p-6 sm:p-9">
        <BookForm onSubmit={submit} />
      </div>
      {toast && <Toast {...toast} onClose={hideToast} />}
    </div>
  );
}
