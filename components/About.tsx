"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="/img2.JPG"
        alt="about-image"
        className="w-56 h-56 -mb-20 md:mb-0 flex-shrink-0 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a
          <span className="underline decoration-[#5F00BA]/50"> little </span>
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          quas, animi eaque ipsum nostrum dolor aperiam sint natus reprehenderit
          recusandae ipsa nemo delectus facilis fuga iure dignissimos tenetur
          neque alias. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          At recusandae praesentium, porro cum quo alias inventore. Eligendi
          nemo labore necessitatibus qui tempora laborum voluptates, quas quam
          eos doloremque, aperiam ea. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Corrupti, facilis? Vitae, non quae. Ad, explicabo ex
          consequuntur laudantium iste amet! Nostrum quos autem deleniti
          provident at ipsa distinctio laboriosam iusto.
        </p>
      </div>
    </motion.div>
  );
}
