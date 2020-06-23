import React from "react";
import "./loading.css";
import { motion } from "framer-motion";


export default function Loading() {
  return (
    <div className="wrapper">
      <motion.div
        className="box"
        animate={{ rotate: 180, scale: 2, opacity: 1 }}
        transition={{ yoyo: Infinity, duration: 1.5 }}
        initial={{ opacity: 0.2 }}
      />
      <br />
      <h3>Loading...</h3>
    </div>
  );
}
