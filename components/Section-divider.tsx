"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="flex justify-center">
      <motion.div
        className="bg-purple-400 my-8 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.125 }}
      ></motion.div>
    </div>
  );
}
