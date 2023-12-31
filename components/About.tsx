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
          As a self-taught Full Stack JavaScript developer, I embarked on my
          coding journey fueled by curiosity and a passion for technology. Over
          time, I honed my skills through various educational pursuits,
          ultimately achieving a level equivalent to a Bachelor&apos;s degree.
          My specialization lies in the dynamic world of JavaScript, and I have
          a particular affinity for the MERN (MongoDB, Express.js, React,
          Node.js) stack. The modernity and expansive capabilities of this
          technology stack have captivated me, motivating me to delve deeper
          into its intricacies. Remaining at the forefront of emerging
          technologies is a commitment I hold dear. I am genuinely fascinated by
          the ever-evolving landscape of web development. My focus extends to
          creating mobile applications and dynamic web interfaces that are not
          only modern but also high-performing. In my development journey, I
          strive to deliver applications with a polished user experience (UX)
          and a visually appealing user interface (UI). I take pride in crafting
          modern and sleek designs while ensuring the backend is robust,
          providing a solid foundation for the application&apos;s data. In
          summary, I am a dedicated Full Stack JavaScript developer with a
          comprehensive understanding of the MERN stack. My passion lies in
          leveraging cutting-edge technologies to build applications that are
          not just functional but also visually impressive and user-friendly.
          provident at ipsa distinctio laboriosam iusto.
        </p>
      </div>
    </motion.div>
  );
}
