import { Outlet } from "react-router";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Toast from "./components/ui/Toast";
import { useToast } from "./hooks/useToast";

export default function App() {
  const { toast, hideToast } = useToast();
  return (
    <div className="min-h-screen flex flex-col bg-[#f6f8fb] text-[#172033]">
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={hideToast} />
      )}
    </div>
  );
}
