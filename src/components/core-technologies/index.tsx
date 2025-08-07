"use client";

import { TextLoop } from "@/components/ui/text-loop";
import { TransitionPanel } from "@/components/ui/transition-panel";
import { CORE_TECHNOLOGIES } from "@/lib/config";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function CoreTechnologies() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative bg  px-4 py-4 md:px-8 lg:px-16 contact-custom-selection">
     
      <div className="container mx-auto">
       <div className="flex flex-row justify-between items-center ">
         <div className="mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-sans font-bold tracking-tight text-black dark:text-white">
            Our{" "}
            <TextLoop>
              {["Technologies", "Tools", "Power"].map((text, index) => (
                <span key={index}>{text}</span>
              ))}
            </TextLoop>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-black dark:text-zinc-200">
            Transforming your business processes for the digital future
          </p>
        </div>
         <div className="-rotate-12">
        <Image
          src="/devkins_short_logo.svg"
          draggable={false}
          alt="Devkins Logo"
          width={350}
          height={350}
          className="w-16 md:w-24 lg:w-32 dark:hidden"
        />
        <Image
          src="/devkins_short_logo white.svg"
          draggable={false}
          alt="Devkins Logo"
          width={350}
          height={350}
          className="w-16 md:w-24 lg:w-32 hidden dark:block"
        />
      </div>
       </div>
        <div className="flex flex-wrap gap-2 justify-start">
          {CORE_TECHNOLOGIES.map((tech, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ease-in-out ${
                activeIndex === index
                  ? "bg-black dark:bg-white dark:text-black text-white shadow-md"
                  :  "dark:bg-black bg-zinc-100 dark:text-white text-zinc-700 `"
              }`}
            >
              {tech.title}
            </button>
          ))}
        </div>
        <div className="mt-6 md:mt-8">
          <TransitionPanel
            activeIndex={activeIndex}
            transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            variants={{
              enter: { opacity: 0, x: 100 },
              center: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: -100 },
            }}
          >
            {CORE_TECHNOLOGIES.map((tech, index) => (
              <div key={index} className="py-6 md:py-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                  {tech.technologies.map((t, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex flex-col items-center justify-center p-4 dark:bg-gray-200 dark:text-black bg-white text-black rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="w-12 h-12 sm:w-16 sm:h-16 relative mb-4">
                        <Image
                          src={t.logo}
                          alt={`${t.name} logo`}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-center">
                        {t.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </TransitionPanel>
        </div>
      </div>
    </div>
  );
}