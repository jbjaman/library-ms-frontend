import type { ReactNode } from "react";
type ButtonProps = { children: ReactNode; onClick?: () => void; type?: "button" | "submit" | "reset"; size?: "sm" | "md" | "lg"; variant?: "primary" | "secondary" | "success" | "danger"; className?: string; disabled?: boolean };
export default function Button({ children, onClick, type="button", size="md", variant="primary", className="", disabled=false }: ButtonProps) {
  const sizes = { sm: "px-3 py-2 text-xs", md: "px-4 py-2.5 text-sm", lg: "px-5 py-3 text-sm" };
  const variants = {
    primary: "bg-[#3157d5] text-white hover:bg-[#2645ae] shadow-sm shadow-[#3157d5]/15",
    secondary: "bg-white text-[#344054] border border-[#dfe3eb] hover:bg-[#f8f9fc]",
    success: "bg-[#087f5b] text-white hover:bg-[#066b4d]",
    danger: "bg-white text-[#c73737] border border-[#f0c8c8] hover:bg-[#fff5f5]",
  };
  return <button disabled={disabled} type={type} onClick={onClick} className={`rounded-xl font-bold transition disabled:cursor-not-allowed disabled:opacity-50 ${sizes[size]} ${variants[variant]} ${className}`}>{children}</button>;
}
