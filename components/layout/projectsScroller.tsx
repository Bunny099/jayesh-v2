"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { ProjectCard } from "./projectCard";
import { projects } from "@/data/projects";

export function ProjectsScroller() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const dragStartX = useRef<number | null>(null)
  const x = useMotionValue(0);
  const speedRef = useRef(0.4);
  function handleMouseMove(e: React.MouseEvent) {
    const bounds = containerRef.current!.getBoundingClientRect();
    const center = bounds.x + bounds.width / 2;
    const delta = e.clientX - center;
    speedRef.current = delta * 0.005;
  }
  function getClientX(e:MouseEvent | TouchEvent | PointerEvent):number{
    if("clientX" in e){
      return e.clientX
    }
    if("touches" in e && e.touches.length >0){return e.touches[0].clientX}
    return 0;
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
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden py-12"
    >
      <motion.div
        style={{ x }}
        className="flex gap-8 w-max cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: -Infinity, right: Infinity }}
        onDragStart={(e) => {
          dragStartX.current = getClientX(e);
          isDraggingRef.current = false;
        }}
        onDrag={(e)=>{
          if(dragStartX.current !== null){
            const delta = Math.abs(getClientX(e) - dragStartX.current)
            if(delta >5){isDraggingRef.current = true}
          }
        }}
        onDragEnd={() => {
          dragStartX.current = null;
          setTimeout(()=>{
            isDraggingRef.current = false
          },0)
         
        }}
        onMouseEnter={() => {speedRef.current =0}}
        onMouseLeave={() => {speedRef.current = 0.4}}
      >
        {[...projects, ...projects].map((project, i) => (
          <ProjectCard key={i} project={project} isDraggingRef={isDraggingRef} />
        ))}
      </motion.div>
    </div>
  );
}
