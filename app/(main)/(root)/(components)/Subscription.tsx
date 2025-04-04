import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const PLANS = [
  {
    title: "Starter",
    desc: "Free access for 2 members",
    price: 129,
    isActive: true,
    options: [
      { icon: "check_circle", label: "Complete documentation" },
      { icon: "check_circle", label: "Working materials in Sketch" },
      { icon: "cancel", label: "Integration help" },
      { icon: "cancel", label: "40GB Cloud storage" },
      { icon: "cancel", label: "Support team full assist" },
    ],
  },
  {
    title: "Premium",
    desc: "Free access for 30 members",
    price: 299,
    isActive: false,
    options: [
      { icon: "check_circle", label: "Complete documentation" },
      { icon: "check_circle", label: "Working materials in Sketch" },
      { icon: "check_circle", label: "Integration help" },
      { icon: "check_circle", label: "40GB Cloud storage" },
      { icon: "cancel", label: "Support team full assist" },
    ],
  },
  {
    title: "Company",
    desc: "Free access for 200 members",
    price: 399,
    isActive: false,
    options: [
      { icon: "check_circle", label: "Complete documentation" },
      { icon: "check_circle", label: "Working materials in Sketch" },
      { icon: "check_circle", label: "Integration help" },
      { icon: "check_circle", label: "40GB Cloud storage" },
      { icon: "check_circle", label: "Support team full assist" },
    ],
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: any) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.2,
    },
  }),
};

const contentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Subscription({
  subscriptionSectionRef,
}: {
  subscriptionSectionRef: React.RefObject<HTMLDivElement | null>;
}) {
  const controls = useAnimation();
  const isInView = useInView(subscriptionSectionRef, {
    once: false,
    amount: 0.3,
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  return (
    <section
      id='subscription'
      ref={subscriptionSectionRef}
      className='py-16 bg-white'
    >
      <div className='container mx-auto px-4'>
        <div className='mb-16 text-center w-full max-w-4xl mx-auto'>
          <p className='text-[#ff0100] font-semibold'>Pricing Plans</p>
          <h2 className='my-4 text-xl md:text-3xl font-bold text-gray-900 [text-wrap:balance]'>
            Unlock the Power of Digital Publishing with E-Paper Facility
          </h2>
          <p className='text-sm md:text-lg text-gray-600 text-center'>
            Elevate your reading experience with a plan designed to fuel your
            passion for news, insights, and stories. Explore the options below
            to find the perfect subscription for your personal or professional
            needs—whether you&apos;re a casual reader or a media enthusiast.
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:px-40 px-5'>
          {PLANS.map(({ title, desc, options, price, isActive }, index) => (
            <motion.div
              key={index}
              className={`rounded-lg shadow-md overflow-hidden ${
                isActive ? "bg-red-50" : "bg-gray-100 opacity-75"
              }`}
              variants={cardVariants}
              initial='hidden'
              animate={controls}
              custom={index}
            >
              <div className='p-6'>
                <motion.p
                  className={`text-lg font-semibold ${
                    isActive ? "text-gray-900" : "text-gray-600"
                  } mb-1`}
                  variants={contentVariants}
                >
                  {title}
                </motion.p>
                <motion.p
                  className='text-sm text-gray-600 mb-6'
                  variants={contentVariants}
                >
                  {desc}
                </motion.p>
                <motion.h3
                  className='text-3xl font-bold text-gray-900'
                  variants={contentVariants}
                >
                  ${price}
                  <span className='text-lg font-normal text-gray-600 align-bottom'>
                    /year
                  </span>
                </motion.h3>
              </div>

              <motion.div className='px-6 py-0' variants={contentVariants}>
                <ul className='flex flex-col gap-3'>
                  {options.map(({ icon, label }, key) => (
                    <motion.li
                      key={key}
                      className='flex items-center gap-3 text-gray-600'
                      variants={contentVariants}
                      transition={{ delay: key * 0.1 }}
                    >
                      <span
                        className={`material-symbols-rounded w-4 h-4 ${
                          icon === "check_circle" && isActive
                            ? "text-[#ff0100]"
                            : "text-gray-600"
                        }`}
                      >
                        {icon}
                      </span>
                      <span className='text-sm'>{label}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div className='p-6' variants={contentVariants}>
                {isActive ? (
                  <button className='w-full bg-[#ff0100] text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors'>
                    Get Started
                  </button>
                ) : (
                  <p className='w-full text-center text-gray-500 py-2 px-4 bg-gray-200 rounded-md'>
                    Coming Soon
                  </p>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
