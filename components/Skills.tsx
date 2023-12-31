"use client";
import React from "react";
import { motion } from "framer-motion";
import SkillComponent from "./SkillComponent";
import { sanityClient } from "@/my-portfolio-20/sanity";
import { groq } from "next-sanity";
import { useEffect, useState } from "react";
import { Skill } from "@/typings";

type Props = {
  skills?: Skill[];
};

export default function Skills({ skills }: Props) {
  const [localSkills, setLocalSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = groq`*[_type == "skill"]`;

      try {
        const data = await sanityClient.fetch(query);
        setLocalSkills(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  const renderedSkills = skills || localSkills;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency proficiency
      </h3>
      <div className="">
        <div className=" grid grid-cols-5 gap-7 h-[65vh]">
          {renderedSkills.map((skill) => (
            <SkillComponent key={skill._id} skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
