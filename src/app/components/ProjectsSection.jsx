"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Portfolio Website using NextJs and TailwindCSS",
    image: "/images/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Anonymous Chat Application",
    description: "Anonymous Chat Application for Bennett University Students",
    image: "/images/projects/2.png",
    tag: [ "Web","All"],
    gitUrl: "https://github.com/chaharhimanshu1004/Anonymous-Chat-App",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Evently",
    description: "Event Management Application",
    image: "/images/evently.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/chaharhimanshu1004/evently",
    previewUrl: "https://evently-rkwys5nan-himanshu-chahars-projects.vercel.app/",
  },
  {
    id: 4,
    title: "E-commerce Application",
    description: "Basic Ecommerce ",
    image: "/images/ecomzy.png",
    tag: ["Web", "All"],
    gitUrl: "https://github.com/chaharhimanshu1004/Ecom-Project",
    previewUrl: "https://ecom-ezy.netlify.app/",
  },
  
  {
    id: 5,
    title: "Expense Tracker",
    description: "Expense Tracker using ReactJs and TailwindCSS",
    image: "/images/expense.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chaharhimanshu1004/ExpenseTracker",
    previewUrl: "https://expense-tracker-himanshu.netlify.app/",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "All"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        /> */}
        
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
