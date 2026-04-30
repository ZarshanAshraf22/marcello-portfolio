"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const [isPointer, setIsPointer] = useState(false);

  const springConfig = { stiffness: 500, damping: 40, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const checkPointer = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target || typeof window === "undefined") return;
      const computed = window.getComputedStyle(target).cursor;
      setIsPointer(
        computed === "pointer" ||
          target.tagName === "A" ||
          target.tagName === "BUTTON",
      );
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", checkPointer);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", checkPointer);
    };
  }, [x, y]);

  return (
    <>
      <motion.div
        style={{ left: springX, top: springY }}
        animate={{
          width: isPointer ? 40 : 32,
          height: isPointer ? 40 : 32,
          opacity: isPointer ? 0.6 : 0.35,
        }}
        transition={{ duration: 0.15 }}
        className="fixed z-[9998] pointer-events-none rounded-full border border-[#3a3835] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      <motion.div
        style={{ left: x, top: y }}
        className="fixed z-[9999] pointer-events-none w-1.5 h-1.5 rounded-full bg-[#3a3835] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
    </>
  );
}
