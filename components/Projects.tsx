"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { sanityClient, urlFor } from "@/my-portfolio-20/sanity";
import { groq } from "next-sanity";
import { Project } from "@/typings";

type Props = { projects?: Project[] };

export default function Projects({ projects }: Props) {
  const [localProjects, setLocalProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = groq`*[_type == "project"] | order(_createdAt desc)
      `;

      try {
        const data = await sanityClient.fetch(query);
        setLocalProjects(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  const renderedProjects = projects || localProjects;

  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#5F00BA]/80">
        {renderedProjects.map((project, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            {project.image && (
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={urlFor(project.image).url()}
                alt={project.title}
              />
            )}

            {/*  {project.video && (
              <motion.video controls width="30%" height="auto">
                <source
                  src={urlFor(project.video).url()}
                  type={project.video.mimeType}
                />
                Your browser does not support the video tag.
              </motion.video>
            )} */}

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#5F00BA]/50">
                  Case study {i + 1} of {renderedProjects.length}:
                </span>{" "}
                {project.title}
              </h4>
              <p className="text-lg text-center md:text-left">
                {project.summary}
              </p>
              <a className="cursor-pointer underline pt-4" target="_blank">
                {project.linkToBuild}
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#5F00BA]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
}
