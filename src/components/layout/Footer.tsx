import { FiBookOpen, FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-[#e7eaf0] bg-white">
      <div className="container grid gap-8 py-10 sm:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#eef2ff] text-[#3157d5]">
              <FiBookOpen />
            </span>
            <span className="font-extrabold">City Library</span>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#667085]">
            A clean workspace for managing your collection, tracking
            availability, and keeping borrowing records organized.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold mb-3">Library</h3>
          <div className="space-y-2 text-sm text-[#667085]">
            <p>Book catalogue</p>
            <p>New arrivals</p>
            <p>Borrowing records</p>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold mb-3">Connect</h3>
          <div className="flex gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#f6f8fb] text-[#667085]">
              <FiFacebook />
            </span>
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#f6f8fb] text-[#667085]">
              <FiGithub />
            </span>
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#f6f8fb] text-[#667085]">
              <FiLinkedin />
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-[#e7eaf0] py-4 text-center text-xs text-[#8a93a6]">
        City Library © 2025–26 · Built for a better reading workflow
      </div>
    </footer>
  );
}
