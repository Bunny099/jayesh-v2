"use client";
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
export function ProjectCard({ project,isDraggingRef }: any) {
  const handleClick = (e:React.MouseEvent)=>{
    if(isDraggingRef?.current){
      e.preventDefault();
      e.stopPropagation();
    }
  }
  return (<>
    <div
      className="relative h-65 w-105 overflow-hidden rounded-2xl group "
    >
      <motion.img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover"
        whileHover={{ scale: 1.5, x: -10 }}
        transition={{ duration: 1.7 }}
      />

      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="absolute top-4 right-4 flex gap-3  opacity-0 group-hover:opacity-100 transition-opacity ">
        {project.github && (
          <a href={project.github} onClick={handleClick} target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80"><FaGithub size={18} /></a>
        )}
        {project.link && (
          <a href={project.link} onClick={handleClick} target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80"><FiExternalLink size={18} /></a>
        )}
      </div>

      <div className="absolute bottom-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="text-sm text-white mt-1">{project.tech}</p>
      </div>
    </div>
  </>)
}

