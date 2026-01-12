"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { ProjectCard } from "./projectCard";
import { projects } from "@/data/projects";

export function ProjectsScroller() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const x = useMotionValue(0);
  const speedRef = useRef(0.4);
  function handleMoudeMove(e: React.MouseEvent) {
    const bounds = containerRef.current!.getBoundingClientRect();
    const center = bounds.x + bounds.width / 2;
    const delta = e.clientX - center;
    speedRef.current = delta * 0.005;
  }

  useEffect(() => {
    let raf: number;
    const loop = () => {
      if (!isDraggingRef.current) {
        x.set(x.get() - speedRef.current);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [x]);
  return (
    <div
      ref={containerRef}
      onMouseMove={handleMoudeMove}
      className="relative overflow-hidden py-12"
    >
      <motion.div
        style={{ x }}
        className="flex gap-8 w-max cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: -Infinity, right: Infinity }}
        onDragStart={() => {
          isDraggingRef.current = true;
        }}
        onDragEnd={() => {
          isDraggingRef.current = false;
        }}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
      >
        {[...projects, ...projects].map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </motion.div>
    </div>
  );
}
