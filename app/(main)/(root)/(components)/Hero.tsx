"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero({
  downloadSectionRef,
  subscriptionSectionRef,
}: {
  downloadSectionRef: React.RefObject<HTMLDivElement | null>;
  subscriptionSectionRef: React.RefObject<HTMLDivElement | null>;
}) {
  const scrollToDownloadSection = () => {
    downloadSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSubscriptionSection = () => {
    subscriptionSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation variants for buttons
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut", type: "spring", bounce: 0.3 },
    },
  };

  return (
    <section className='bg-gray-900 text-white py-16 md:py-24 md:px-40 px-5'>
      <div className='container mx-auto px-4 flex flex-col md:flex-row items-center gap-8'>
        {/* Text Content */}
        <motion.div
          className='md:w-1/2 text-center md:text-left'
          initial='hidden'
          animate='visible'
          variants={textVariants}
        >
          <motion.h1
            className='text-4xl md:text-5xl font-bold leading-tight mb-4'
            variants={textVariants}
          >
            Your Gateway to Digital News & Insights
          </motion.h1>
          <motion.p
            className='text-lg md:text-xl text-gray-300 mb-6'
            variants={textVariants}
          >
            Dive into a world of stories, updates, and exclusive
            content—starting at just $129/year.
          </motion.p>
          <motion.div
            className='flex items-center md:flex-row flex-col gap-4 mb-6'
            variants={buttonVariants}
          >
            <button
              onClick={scrollToSubscriptionSection}
              className='cursor-pointer inline-block bg-[#ff0100] text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-red-600 transition-colors'
            >
              Subscribe Now
            </button>
            <button
              onClick={scrollToDownloadSection}
              className='cursor-pointer inline-block bg-[#ff0100] text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-red-600 transition-colors'
            >
              Download App
            </button>
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div
          className='md:w-1/2'
          initial='hidden'
          animate='visible'
          variants={imageVariants}
        >
          <div className='relative max-w-md mx-auto'>
            <Image
              width={500}
              height={500}
              src='/news-bro.svg'
              alt='E-Paper Facility Preview'
              className='rounded-lg shadow-lg w-full h-auto'
            />
            {/* Red Accent Overlay */}
            <div className='absolute top-0 left-0 w-1/3 h-1/3 bg-[#ff0100] opacity-20 rounded-tl-lg'></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
