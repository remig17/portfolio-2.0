"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            key={""}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="/mockup1.png"
              alt="Whatsapp"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#5F00BA]/50">
                  Case study {i + 1} of {projects.length}:
                </span>{" "}
                Whatsapp Clone
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Numquam placeat dolor voluptatem dolore! Corporis ullam
                dignissimos ab commodi eligendi maxime omnis odit unde quas
                doloremque temporibus, repellendus ad porro inventore! Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
                debitis voluptas facere recusandae veniam atque quis tempora
                inventore, maxime sed quam blanditiis necessitatibus nostrum,
                sapiente praesentium labore. Consequuntur, quasi enim.
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#5F00BA]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
}
