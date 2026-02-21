"use client";
import React, { useEffect, useState } from "react";
import { DitherShader } from "@/components/ui/dither-shader";
import harman from "./res/harmans.png";
import linky from "./res/linked.png";
import { motion } from "framer-motion";

const roles = [
  "I write code that scales.",
  "I train at 5AM.",
  "I debug life & systems.",
  "Cricket keeps me sharp.",
  "JACK OF ALL TRADES",
];

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loaded, setLoaded] = useState(false); // ✅ FIX ADDED

  // Typing Effect
  useEffect(() => {
    const current = roles[index];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setText(current.substring(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 60);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setText(current.substring(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, 40);
    } else if (charIndex === current.length + 1) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (charIndex === -1) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  // Image Load Animation
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

 return (
<section className="bg-black text-white pt-24 pb-2 px-6 mb-0">
      <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE TEXT */}
      <div className="space-y-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Hi, I’m Harman.
        </h1>

        <p className="text-2xl md:text-3xl text-gray-400 h-10 font-light">
          {text}
          <span className="animate-pulse">|</span>
        </p>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex justify-center md:justify-end">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 1.1, filter: "blur(20px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden rounded-2xl w-full max-w-md aspect-[3/4] "
        >
          <motion.div
            initial={{ y: "0%" }}
            animate={{ y: "-100%" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute inset-0 bg-black z-10"
          />

          <DitherShader
            src={harman.src}
            gridSize={1.7}
            ditherMode="bayer"
            colorMode="grayscale"
            className="w-full h-full"
          />
        </motion.div>
      </div>

    </div>
  </section>
);
}
export default Hero;