"use client";
import React from "react";

const skills = [
  {
    title: "Front-end",
    stack: "Next.js • React • TypeScript • Tailwind • Framer Motion",
  },
  {
    title: "Back-end",
    stack: "Node.js • Express • NestJS • MongoDB • PostgreSQL • Redis",
  },
  {
    title: "System Programming",
    stack: "C++ • Linux • Multithreading • Networking • Memory Management",
  },
  {
    title: "System Design",
    stack: "Microservices • Load Balancing • Caching • WebSockets • Scalability",
  },
];

const Skills = () => {
  return (
    <section className="bg-black text-white min-h-screen px-8 md:px-20 py-20">
      <h2 className="text-2xl mb-16 text-neutral-400">What I Work With</h2>

      <div className="space-y-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group relative overflow-hidden border-b border-neutral-800 pb-10 cursor-pointer"
          >
            {/* Hover Background */}
            <div className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-between">
              {/* Big Title */}
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight transition-colors duration-500 group-hover:text-black">
                {skill.title}
              </h1>

              {/* Stack */}
              <p className="max-w-xl text-right text-lg text-neutral-400 opacity-0 translate-x-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-black">
                {skill.stack}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;