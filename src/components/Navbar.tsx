import { cn } from "../utils/cn";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  scrollY: number;
}

export function Navbar({ scrollY }: NavbarProps) {
  const navigator = useNavigate();
  return (
    <motion.nav
      initial={{ filter: "blur(10px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed z-20 flex items-center justify-between py-6 md:p-6 transition-all duration-300 w-full",
        scrollY > 50
          ? "backdrop-blur-lg bg-gray-950/70 shadow-lg shadow-black/10"
          : "bg-transparent"
      )}
    >
      <div className="w-full flex items-center justify-between md:px-8 px-3 left-0 right-0">
        <div className="flex items-center space-x-2">
          <div
            onClick={() => navigator("/")}
            className="flex items-center space-x-1 cursor-pointer"
          >
            <div className="relative w-10 h-10 flex items-center justify-center">
              <img
                src="/flash.svg"
                alt="Volt Logo"
                className="w-6 h-6 relative z-10"
              />
            </div>
            <span className="inline-block">
              <span
                className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent text-3xl font-extrabold tracking-wide"
                style={{ fontFamily: "'Audiowide', sans-serif" }}
              >
                Volt
              </span>
              <span className="text-white text-3xl font-normal">.new</span>
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <a
            href="#features"
            className="bg-gradient-to-r from-cyan-400 via-teal-500 to-emerald-400 bg-clip-text text-transparent hover:opacity-80 transition-all text-sm font-medium"
          >
            Features
          </a>
          <a
            href="#faq"
            className="bg-gradient-to-r from-cyan-400 via-teal-500 to-emerald-400 bg-clip-text text-transparent hover:opacity-80 transition-all text-sm font-medium"
          >
            FAQ
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
