import { useEffect } from "react";
import { FiAlertTriangle } from "react-icons/fi";
type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
};
export default function ConfirmationDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
}: Props) {
  useEffect(() => {
    if (!isOpen) return;
    const fn = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-[#101828]/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#fff3e8] text-[#c85a18]">
          <FiAlertTriangle size={22} />
        </div>
        <h3 className="mt-5 text-lg font-extrabold">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-[#667085]">{message}</p>
        <div className="mt-7 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="rounded-xl border border-[#dfe3eb] px-4 py-2.5 text-sm font-bold text-[#344054]"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="rounded-xl bg-[#c73737] px-4 py-2.5 text-sm font-bold text-white"
          >
            Delete book
          </button>
        </div>
      </div>
    </div>
  );
}
