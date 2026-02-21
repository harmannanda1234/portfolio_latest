"use client";

import React from "react";
import { motion } from "framer-motion";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import linky from "./res/gity.png";

/* ✅ MOVE THIS ABOVE */
const Badge = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 56 56"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="28" cy="28" r="28" fill="#00AA45" />
    </svg>
  );
};

export function MacbookScrollDemo() {
  return (
    <section className="w-full py-10">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        onClick={()=>{window.open("https://github.com/harmannanda1234")}}
      >
        <MacbookScroll
          title={<span className="text-white text-7xl font-bold mb-10">AND I'M BACK ON MY GRIND...</span>}
          badge={
            <motion.a
              initial={{ rotate: -25, scale: 0.8 }}
              animate={{ rotate: -12, scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
            >
              <Badge className="h-10 w-10 drop-shadow-xl" />
            </motion.a>
          }
          src={linky.src}
          showGradient={false}
        />
      </motion.div>
    </section>
  );
}