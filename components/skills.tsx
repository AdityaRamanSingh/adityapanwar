"use client";


import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks" ;// Replace with your actual path
import SectionHeading from "./section-heading"; // Assuming you have a component for section headings
import {skillsData} from "@/lib/data"; // Assuming you have an array of skills data

  
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    color: "#4AC9E8",
    bg :"#4AC9E8" // Change color on hover
   
  },
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg px-6 py-3 text-gray-900 dark:text-white/90 cursor-pointer transform transition duration-300 ease-in-out hover:-translate-y-1"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            animate="animate"
            whileHover="hover" // Trigger hover animation
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}