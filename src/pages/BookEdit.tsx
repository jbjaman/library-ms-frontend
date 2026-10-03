import { useNavigate, useParams } from "react-router";
import { useGetBookQuery, useUpdateBookMutation } from "../api/bookApi";
import BookForm from "../components/books/BookForm";
import Loader from "../components/ui/Loader";
import Toast from "../components/ui/Toast";
import { useToast } from "../hooks/useToast";
import type { BookGenre } from "../types/types";
export default function BookEdit() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: book, isLoading } = useGetBookQuery(id || "");
  const [updateBook] = useUpdateBookMutation();
  const { toast, showToast, hideToast } = useToast();
  if (isLoading || !book) return <Loader />;
  const submit = async (data: {
    title: string;
    author: string;
    genre: BookGenre;
    isbn: string;
    description?: string;
    copies: number;
  }) => {
    if (!id) return;
    try {
      await updateBook({ id, changes: data }).unwrap();
      showToast("Book updated successfully", "success");
      navigate(`/books/${id}`);
    } catch {
      showToast("Failed to update book", "error");
    }
  };
  return (
    <div className="page-shell">
      <div className="mb-7">
        <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#3157d5]">
          Catalogue
        </p>
        <h1 className="mt-1 text-3xl font-black">Edit book</h1>
        <p className="mt-1 text-sm text-[#667085]">
          Keep this title's information accurate and easy to scan.
        </p>
      </div>
      <div className="surface p-6 sm:p-9">
        <BookForm
          onSubmit={submit}
          initialData={{
            title: book.data.title,
            author: book.data.author,
            genre: book.data.genre,
            isbn: book.data.isbn,
            description: book.data.description,
            copies: book.data.copies,
          }}
        />
      </div>
      {toast && <Toast {...toast} onClose={hideToast} />}
    </div>
  );
}
