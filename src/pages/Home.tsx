import {
  FiArrowRight,
  FiBookOpen,
  FiCheckCircle,
  FiClock,
  FiPlus,
  FiTrendingUp,
} from "react-icons/fi";
import { Link } from "react-router";
import { useGetBooksQuery } from "../api/bookApi";
import Loader from "../components/ui/Loader";

const shelves = [
  {
    title: "Fiction",
    genre: "FICTION",
    image: "https://i.ibb.co/XScvv3S/horror1.png",
  },
  {
    title: "Science",
    genre: "SCIENCE",
    image: "https://i.ibb.co/3Y1ntxZ/tech1.png",
  },
  {
    title: "History",
    genre: "HISTORY",
    image: "https://i.ibb.co/NKy6r9Y/history1.png",
  },
];
export default function Home() {
  const { data, isLoading } = useGetBooksQuery({ page: 1, limit: 100 });
  if (isLoading) return <Loader />;
  const books = data?.data || [];
  const total = books.length;
  const available = books.filter((b) => b.available).length;
  const copies = books.reduce((s, b) => s + b.copies, 0);
  return (
    <div className="page-shell">
      <section className="relative overflow-hidden rounded-[28px] bg-[#172554] p-7 text-white shadow-2xl shadow-[#172554]/10 sm:p-10 lg:p-12">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#5b7cfa]/20 blur-2xl" />
        <div className="absolute bottom-[-100px] right-24 h-56 w-56 rounded-full bg-[#31c7b5]/15 blur-2xl" />
        <div className="relative max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold text-[#dce5ff]">
            <FiTrendingUp /> Library workspace
          </span>
          <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl">
            A calmer way to manage your library.
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[#c7d2fe] sm:text-base">
            Keep your catalogue organized, see availability at a glance, and
            record borrowing without the clutter.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/books"
              className="inline-flex items-center gap-2 rounded-xl  px-5 py-3 text-sm font-extrabold hover:bg-[#1e3a8a] text-[#f2f5ff]"
            >
              Open catalogue <FiArrowRight />
            </Link>
            <Link
              to="/create-book"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-extrabold text-white hover:bg-white/15"
            >
              <FiPlus /> Add a book
            </Link>
          </div>
        </div>
      </section>
      <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat icon={FiBookOpen} label="Titles" value={total} />
        <Stat icon={FiCheckCircle} label="Available" value={available} />
        <Stat
          icon={FiClock}
          label="Borrowed status"
          value={Math.max(total - available, 0)}
        />
        <Stat icon={FiTrendingUp} label="Total copies" value={copies} />
      </section>
      <section className="mt-10">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#3157d5]">
              Explore
            </p>
            <h2 className="mt-1 text-2xl font-black">Browse by shelf</h2>
          </div>
          <Link
            to="/books"
            className="hidden items-center gap-1 text-sm font-bold text-[#3157d5] sm:flex"
          >
            View all <FiArrowRight />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {shelves.map((s) => (
            <Link
              to="/books"
              key={s.genre}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#e7eaf0]"
            >
              <img
                src={s.image}
                alt=""
                className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#111827] to-transparent p-5 pt-16 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-white/70">
                  Collection
                </p>
                <h3 className="mt-1 text-xl font-black">{s.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="mt-10 surface p-7 sm:p-9">
        <div className="grid items-center gap-7 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#3157d5]">
              Simple by design
            </p>
            <h2 className="mt-2 text-2xl font-black">
              Everything important, one workspace.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-[#667085]">
              Use the catalogue to manage titles and availability, open a book
              for details, edit metadata when needed, and create borrowing
              records in a focused flow.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              "Quick catalogue",
              "Clear availability",
              "Fast editing",
              "Borrow tracking",
            ].map((t) => (
              <div
                key={t}
                className="rounded-2xl bg-[#f7f8fc] p-4 text-sm font-bold text-[#344054]"
              >
                <FiCheckCircle className="mb-3 text-[#3157d5]" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof FiBookOpen;
  label: string;
  value: number;
}) {
  return (
    <div className="surface flex items-center gap-4 p-5">
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eef2ff] text-[#3157d5]">
        <Icon />
      </span>
      <div>
        <p className="text-2xl font-black">{value}</p>
        <p className="text-xs font-semibold text-[#8a93a6]">{label}</p>
      </div>
    </div>
  );
}
