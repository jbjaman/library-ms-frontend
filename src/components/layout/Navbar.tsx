import { useState } from "react";
import { FiBookOpen, FiChevronDown, FiGrid, FiMenu, FiPlus, FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router";

const navItems = [
  { to: "/", label: "Dashboard", icon: FiGrid },
  { to: "/books", label: "Books", icon: FiBookOpen },
  { to: "/borrow-summary", label: "Borrowing", icon: FiChevronDown },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-[#e7eaf0]/90 bg-white/90 backdrop-blur-xl">
      <div className="container h-[72px] flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#3157d5] text-white shadow-lg shadow-[#3157d5]/20">
            <FiBookOpen size={20} />
          </span>
          <span>
            <span className="block text-[15px] font-extrabold tracking-tight">City Library</span>
            <span className="block text-[11px] text-[#8a93a6]">Library management</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 rounded-full bg-[#f6f8fb] p-1">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} className={({ isActive }) => `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${isActive ? "bg-white text-[#3157d5] shadow-sm" : "text-[#667085] hover:text-[#172033]"}`}>
              <Icon size={15} /> {label}
            </NavLink>
          ))}
        </nav>

        <Link to="/create-book" className="hidden sm:flex items-center gap-2 rounded-xl bg-[#3157d5] px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#3157d5]/20 hover:bg-[#2645ae] transition">
          <FiPlus /> Add book
        </Link>
        <button className="md:hidden rounded-xl border border-[#e7eaf0] p-2.5 text-[#172033]" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#e7eaf0] bg-white px-4 py-3">
          <div className="container !w-full flex flex-col gap-1">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink key={to} to={to} onClick={() => setOpen(false)} className={({ isActive }) => `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold ${isActive ? "bg-[#eef2ff] text-[#3157d5]" : "text-[#667085]"}`}>
                <Icon size={17} /> {label}
              </NavLink>
            ))}
            <Link to="/create-book" onClick={() => setOpen(false)} className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-[#3157d5] px-4 py-3 text-sm font-bold text-white"><FiPlus /> Add book</Link>
          </div>
        </div>
      )}
    </header>
  );
}
