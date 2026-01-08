"use client";
import { motion } from "framer-motion"

export function ProjectCard({ project }: any) {
  return (<>
    <a href={project.link}
      className="relative h-65 w-105 overflow-hidden rounded-2xl group "
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover"
        whileHover={{ scale: 1.5, x: -10 }}
        transition={{ duration: 1.7 }}
      />

      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="absolute bottom-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="text-sm text-white mt-1">{project.tech}</p>
      </div>
    </a>
  </>)
}

