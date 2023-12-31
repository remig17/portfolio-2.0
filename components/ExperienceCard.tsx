"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Experience } from "@/typings";
import { urlFor } from "@/my-portfolio-20/sanity";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  console.log("checkCheck", experience);

  return (
    <div className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden mt-[10rem]">
      {/* Image de l'entreprise */}
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={urlFor(experience?.companyImage).url()}
        alt={experience.jobTitle}
        className="h-32 w-32 rounded-full  xl:w-[200px] xl:h-[200px] object-cover object-center"
      />

      <div className="px-0 md:px-10 mt-[10rem]">
        {/* Titre du poste */}
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>

        {/* Nom de l'entreprise */}
        <p className="font-bold text-2xl mt-1">{experience?.company}</p>

        {/* Technologies */}
        <div className="flex space-x-2 my-2">
          {experience.technologies &&
            experience.technologies.map((tech) => (
              <Image
                key={tech._id}
                src={urlFor(tech.image).url()}
                alt={tech.title}
                className="h-10 w-10 rounded-full"
                width={30}
                height={30}
              />
            ))}
        </div>

        {/* Date de début et date de fin */}
        <p className="uppercase py-5 text-gray-300">
          {`Started ${experience.dateStarted} - Ended ${experience.dateEnded}`}
        </p>

        {/* Points de résumé */}
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {experience.points &&
            experience.points.map((point, pointIndex) => (
              <li key={pointIndex}>{point}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}
