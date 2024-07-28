"use client";

import { AuroraBackground } from "./ui/aurora-background";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from "next/image";

export const Hero = () => {
  const words = "Seeking knowledge is an obligation upon every Muslim.";
  return (
    <AuroraBackground>
      <section className="h-screen flex flex-col md:flex-row justify-center items-center">
        <div className="flex-1 flex flex-col items-center justify-center px-5  gap-5 md:px-10">
          <p className="text-sm">
            Anas ibn Malik reported: The Messenger of Allah, peace and blessings
            be upon him, said:
          </p>
          {/* <h1 className="text-4xl font-bold ">
            
            
          </h1> */}
          <TextGenerateEffect words={words} />

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            className="text-left"
          >
            Source: Sunan Ibn Mājah 224, Grade:{" "}
            <Highlight>
              <strong className="underline">Sahih</strong>
            </Highlight>
          </motion.p>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: -20,
          }}
          transition={{
            duration: 1,
            ease: "easeIn",
          }}
          className="flex-1 relative h-full w-full"
        >
          <Image
            src="/quran-removebg-preview.png"
            alt="quran"
            fill
            className="object-cover"
          />
        </motion.div>
      </section>
    </AuroraBackground>
  );
};
