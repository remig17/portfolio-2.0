"use client";
import React from "react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { sanityClient } from "../my-portfolio-20/sanity";
import { groq } from "next-sanity";
import { useState, useEffect } from "react";
import { Social } from "../typings";

type Props = {};

async function getData() {
  try {
    const data = await sanityClient.fetch(groq`*[_type == "pageInfo"][0]{
      ...,
      socials[]->{
        _id,
        title,
        url
      }
    }`);
    console.log(data); // Add this line
    return data;
  } catch (error) {
    console.error("error fetching data", error);
  }
}

export default function Header() {
  const [socials, setSocials] = useState<Social[]>([]); // Assurez-vous que le type correspond à votre interface Social
  useEffect(() => {
    getData()
      .then((data) => {
        setSocials(data.socials); // Update this line
      })
      .catch((err) => {
        console.error("error fetching data", err);
      });
  }, []);

  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {/* social Icons */}

        {socials?.map &&
          socials.map((item, index) => (
            <SocialIcon
              key={index}
              url={item.url}
              fgColor="gray"
              bgColor="transparent"
            />
          ))}
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <Link href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm  text-gray-400">
            Get In Touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
}
