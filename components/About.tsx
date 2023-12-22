"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        src="/img2.JPG"
        alt="about-image"
        className="w-80 h-120"
      />
    </div>
  );
}
