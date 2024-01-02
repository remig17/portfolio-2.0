"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { sanityClient } from "../my-portfolio-20/sanity";
import { groq } from "next-sanity";
import { Experience } from "../typings";

type Props = {
  experiences?: Experience[]; // Make experiences optional since they can be provided as a prop
};

export default function WorkExperience({ experiences }: Props) {
  const [localExperiences, setLocalExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = groq`*[_type == "experience"] | order(dateEnded desc) {
        ...,
        technologies[]->
      }`;

      try {
        const data = await sanityClient.fetch(query);
        setLocalExperiences(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  const renderedExperiences = experiences || localExperiences;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl z-50  ">
        Experience
      </h3>
      <div className=" flex space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#5F00BA]/80 ">
        {renderedExperiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}
