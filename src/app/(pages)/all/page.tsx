"use client";
import React from "react";
import works from "@/app/api/works/works";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, // Vertraging tussen items
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function All() {
  return (
    <main>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8">Some Projects</h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {works.map((work) => (
            <motion.div key={work.slug} variants={itemVariants}>
              <Link href={`/works/${work.slug}`}>
                <div className="relative group overflow-hidden">
                  {/* Afbeelding */}
                  <Image
                    src={work.imageHeader[0]}
                    alt={`${work.title} header`}
                    width={500}
                    height={300}
                    className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    unoptimized
                  />

                  {/* Overlay met titel */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <h2 className="text-white text-xl font-semibold">
                      {work.title}
                    </h2>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}

export default All;
