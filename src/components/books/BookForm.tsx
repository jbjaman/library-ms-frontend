import { useState } from "react";
import { FiBookOpen, FiHash, FiUser } from "react-icons/fi";
import type { BookGenre } from "../../types/types";
import Button from "../ui/Button";

interface Props {
  onSubmit: (bookData: {
    title: string;
    author: string;
    genre: BookGenre;
    isbn: string;
    description?: string;
    copies: number;
    available?: boolean;
  }) => void;
  initialData?: {
    title: string;
    author: string;
    genre: BookGenre;
    isbn: string;
    description?: string;
    copies: number;
  };
}
const genres: BookGenre[] = [
  "FICTION",
  "NON_FICTION",
  "SCIENCE",
  "HISTORY",
  "BIOGRAPHY",
  "FANTASY",
];
const labels: Record<BookGenre, string> = {
  FICTION: "Fiction",
  NON_FICTION: "Non-fiction",
  SCIENCE: "Science",
  HISTORY: "History",
  BIOGRAPHY: "Biography",
  FANTASY: "Fantasy",
};
export default function BookForm({ onSubmit, initialData }: Props) {
  const [form, setForm] = useState({
    title: initialData?.title || "",
    author: initialData?.author || "",
    genre: initialData?.genre || ("FICTION" as BookGenre),
    isbn: initialData?.isbn || "",
    description: initialData?.description || "",
    copies: initialData?.copies || 1,
  });
  const change = (name: string, value: string | number) =>
    setForm((p) => ({ ...p, [name]: value }));
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      className="space-y-6"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 flex items-center gap-2 text-sm font-bold">
            <FiBookOpen /> Title
          </span>
          <input
            required
            value={form.title}
            onChange={(e) => change("title", e.target.value)}
            className="field"
            placeholder="e.g. Atomic Habits"
          />
        </label>
        <label className="block">
          <span className="mb-2 flex items-center gap-2 text-sm font-bold">
            <FiUser /> Author
          </span>
          <input
            required
            value={form.author}
            onChange={(e) => change("author", e.target.value)}
            className="field"
            placeholder="e.g. James Clear"
          />
        </label>
        <label className="block">
          <span className="mb-2 text-sm font-bold">Genre</span>
          <select
            value={form.genre}
            onChange={(e) => change("genre", e.target.value as BookGenre)}
            className="field"
          >
            {genres.map((g) => (
              <option key={g} value={g}>
                {labels[g]}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-2 flex items-center gap-2 text-sm font-bold">
            <FiHash /> ISBN
          </span>
          <input
            required
            value={form.isbn}
            onChange={(e) => change("isbn", e.target.value)}
            className="field"
            placeholder="978-..."
          />
        </label>
        <label className="block md:col-span-2">
          <span className="mb-2 text-sm font-bold">Description</span>
          <textarea
            value={form.description}
            onChange={(e) => change("description", e.target.value)}
            rows={5}
            className="field resize-none"
            placeholder="A short description of the book..."
          />
        </label>
        <label className="block md:max-w-xs">
          <span className="mb-2 text-sm font-bold">Number of copies</span>
          <input
            required
            min={0}
            type="number"
            value={form.copies}
            onChange={(e) => change("copies", parseInt(e.target.value) || 0)}
            className="field"
          />
        </label>
      </div>
      <div className="flex justify-end">
        <Button type="submit" size="lg">
          {initialData ? "Save changes" : "Create book"}
        </Button>
      </div>
    </form>
  );
}
