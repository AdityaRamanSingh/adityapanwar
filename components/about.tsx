"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
 Hey, I&apos;m Aditya Raman Singh Panwar. I&apos;m currently in my 3rd year undergraduate studies. I am pursuing my Bachelor&apos;s Of Technology from Technocrats Institute Of Technology, Bhopal.
 <span className="font-medium">As a current undergraduate in Computer Science & Engineering, I possess a strong foundation in programming and a passion for web development.</span>
 <span className="italic">
    <span className="underline">Proficient in JavaScript ,TypeScript and other modern web technologies</span>, I am eager to contribute to innovative projects with my skills in both front-end (HTML, CSS, JavaScript, React , Next) and back-end (Node.js, databases) technologies.
    I thrive on writing clean and maintainable code and have demonstrated my abilities through my projects. I am a quick learner, detail-oriented, and excited to join a dynamic team as a Developer to create user-centric web solutions.
 </span>
 My core stack is <span className="font-medium underline">React, Next.js, Node.js, MySQL , MongoDB, TailwindCSS , GraphQL Shopify</span>. I am always looking to learn new technologies. I am currently looking for <span className="font-medium underline">Intern Role</span> as a software developer (Frontend role would be preferable).
</p>


    </motion.section>
  );
}
