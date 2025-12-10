"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function PageLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const end = setTimeout(() => setDone(true), 3800);
    return () => clearTimeout(end);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed inset-0 z-999999 bg-white flex flex-col items-center justify-center"
        >
          <motion.img
            src="/logo.svg"
            alt="logo"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1.15 }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-36 h-36 object-contain mb-12"
          />

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "320px", opacity: 1 }}
            transition={{ duration: 2.2, ease: "easeOut" }}
            className="h-1 bg-gray-300 rounded-full overflow-hidden"
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.4, ease: "easeInOut" }}
              className="h-full bg-black"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="mt-6 text-sm tracking-widest text-gray-600"
          >
            Loading experience…
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
