"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-black/40" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center text-white">
        
        {/* Logo */}
        <Link
          href="/"
          className=" text-pink-700 font-bold text-4xl tracking-wide hover:opacity-70 transition"
        >
          :)
        </Link>

        {/* Links */}
        <div className="flex gap-8 text-sm uppercase tracking-widest">
          {["About", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;