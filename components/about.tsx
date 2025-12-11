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
        I’m Aditya, a software engineer who enjoys building clean, scalable systems
        and thoughtful data workflows. I work across backend engineering,
        automation, and cloud-native pipelines, turning raw data into fast,
        reliable services. I focus on minimal, elegant solutions that make complex
        processes feel effortless.
      </p>
    </motion.section>
  );
}
