"use client";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../my-portfolio-20/sanity";

type Props = { directionLeft?: boolean; skill: Skill };

export default function SkillComponent({ directionLeft, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer mt-8">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill.image).url()}
        className="rounded-full border border-gray-500 object-contain w-12 h-12 xl:w-32 xl:h-32 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0 ">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
        <div className="text-center text-white text-2xl ">{skill.title}</div>
      </div>
    </div>
  );
}
