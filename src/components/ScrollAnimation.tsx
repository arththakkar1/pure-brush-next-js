"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode, useEffect, useState } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  yRange?: [number, number];
  opacityRange?: [number, number];
  scaleRange?: [number, number];
  className?: string;
}

export function ScrollAnimation({
  children,
  yRange = [40, 0],
  opacityRange = [0.6, 1],
  scaleRange,
  className = "",
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], yRange);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [opacityRange[0], opacityRange[1], opacityRange[1]],
  );
  const scale = scaleRange
    ? useTransform(scrollYProgress, [0, 1], scaleRange)
    : undefined;

  const [locked, setLocked] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (v >= 0.5 && !locked) {
        setLocked(true);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, locked]);

  const finalY = yRange[1];
  const finalOpacity = opacityRange[1];
  const finalScale = scaleRange ? scaleRange[1] : undefined;

  // Use a longer, more natural transition for smoothness
  const snapStyle = {
    transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
    y: finalY,
    opacity: finalOpacity,
    ...(finalScale !== undefined ? { scale: finalScale } : {}),
  };

  return (
    <motion.div
      ref={ref}
      style={locked ? snapStyle : { y, opacity, ...(scale ? { scale } : {}) }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
