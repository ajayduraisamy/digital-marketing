"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { MdConnectWithoutContact } from "react-icons/md";
import { TbFileCv } from "react-icons/tb";
import socialIcons from "./icon/Social";
import Typewriter from "./ui/Typewriter";

import useScrollSpy from "@/hook/useScrollSpy";
import { useInView } from "framer-motion";
import Image from "next/image";
import { PortfolioData } from "@/public/data/portfolio-data";

const uptoDown = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.3,
    },
  },
};
const uptoDownItem = {
  initial: { y: 400, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 50,
    },
  },
};
const scaling = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    },
  },
};

const Hero = () => {
  const containerRef = useRef(null);
  const circlesRefs = useRef([]);
  const isInView = useInView(containerRef);
  const { scrollToSection } = useScrollSpy();

  const handleClick = (item) => {
    scrollToSection(item);
  };

  useEffect(() => {
    const container = containerRef.current;
    const circles = circlesRefs.current;
    if (isInView) {
      if (container && circles.length > 0) {
        const radius = container.offsetWidth / 2;
        const rotation = 360 / circles.length;

        circles.forEach((circle, i) => {
          const value = `rotate(${
            i * rotation
          }deg) translate(${radius}px) rotate(-${i * rotation}deg)`;
          circle.style.transform = value;
        });
      }
    } else {
      if (circles.length > 0) {
        circles.forEach((circle) => {
          circle.style.transform = "";
        });
      }
    }
  }, [isInView]);

  const multipleSpaces = "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0";

  return (
    <section id="home" className="relative z-10">
      <div className="dark:bg-[url('/img/bg-image.svg')] bg-cover absolute z-0 w-full md:h-full aspect-square"></div>
      <div className="lg:h-[calc(100vh-64px)] container h-full py-5 px-4 md:py-10 md:px-8 lg:py-0 lg:px-0 flex flex-wrap flex-col-reverse md:flex-row items-center justify-center overflow-visible">

        <motion.div
          variants={uptoDown}
          initial="initial"
          whileInView="animate"
          className="flex flex-col w-full gap-4 md:pr-4 md:w-7/12 lg:w-2/3"
        >
          <motion.h1
            variants={uptoDownItem}
            className="h-16 text-4xl font-extrabold tracking-tight text-left text-transparent capitalize xs:text-5xl md:h-20 md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 bg-clip-text w-fit scroll-m-20"
          >
            {PortfolioData.name}
          </motion.h1>
          <motion.h2
            variants={uptoDownItem}
            className="pb-2 text-3xl font-semibold tracking-tight border-b min-h-12 lg:mt-3 border-b-border scroll-m-20 first:mt-0"
          >
            <Typewriter
              texts={PortfolioData.typewriterTexts.map(text => `${text}${multipleSpaces}`)}
              speed={100}
              isInView={isInView}
            />
          </motion.h2>
          <motion.p
            variants={uptoDownItem}
            className="text-lg lg:text-justify leading-7 [&:not(:first-child)]:mt-3"
          >
            {PortfolioData.profileDescription}
          </motion.p>
          <motion.div
            variants={uptoDownItem}
            className="flex flex-col justify-center gap-3 mt-3 xs:flex-row md:justify-start md:gap-5 "
          >
            <Button asChild size="hero">
              <Link
                href="/"
                scroll={false}
                onClick={() => handleClick("contact")}
                className="relative overflow-hidden transition-all bg-transparent border-2 dark:bg-cardBg border-accent-foreground hover:bg-transparent group"
              >
                <span className="absolute z-10 w-full h-full transition-all duration-300 ease-in-out -translate-x-full group-hover:translate-x-0 bg-accent-foreground"></span>
                <span className="z-20 flex items-center justify-center gap-1 text-base font-bold tracking-widest uppercase md:gap-3 md:text-xl text-primary group-hover:text-muted font-oswald">
                  Contact Me
                  <MdConnectWithoutContact className="w-6 h-6" />
                </span>
              </Link>
            </Button>
           
          </motion.div>
        </motion.div>
        <div className="w-full p-4 md:w-5/12 lg:w-1/3 mt-4 flex justify-center">
          <div
            ref={containerRef}
            className="relative flex items-center justify-center p-4 rounded-full border-2 border-gray-800 dark:border-border aspect-square w-[180px] sm:w-[250px] md:w-[300px] lg:w-[350px]"
          >
            {/* Central Circular Image */}
            <motion.div
              variants={scaling}
              initial="initial"
              whileInView="animate"
              className="relative w-full h-full rounded-full overflow-hidden"
            >
              <Image
                src="https://res.cloudinary.com/diazxuntv/image/upload/v1761458432/download_kcu11f.png"
                alt="digital marketing"
                fill
                className="object-cover rounded-full"
                priority
              />
            </motion.div>

            {/* Orbiting Social Icons */}
            {socialIcons.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => (circlesRefs.current[index] = el)}
                className="absolute grid w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-border dark:bg-border place-items-center transition-transform duration-1000 ease-primary group"
                aria-label={item.label}
              >
                <div className="w-full h-full bg-gray-800 rounded-full place-items-center grid">
                  <item.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#F8FAFC] transition-all duration-300 ease-in-out group-hover:rotate-[360deg]" />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;