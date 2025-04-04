"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What types of media content does E-Paper Facility produce?",
    answer:
      "E-Paper Facility specializes in digital newspapers, magazines, blogs, and multimedia content, including articles, videos, and podcasts tailored to your audience.",
  },
  {
    question: "How often is new content published on your platform?",
    answer:
      "We publish fresh content daily, with premium editions released weekly and monthly, depending on your subscription plan.",
  },
  {
    question: "Can I advertise my business through E-Paper Facility?",
    answer:
      "Yes, we offer a variety of advertising options, including banner ads, sponsored articles, and video placements, customizable to your marketing needs.",
  },
  {
    question: "What subscription plans are available for readers?",
    answer:
      "We provide flexible plans: a free tier with limited access, a monthly plan for $9.99 with full content, and an annual plan for $99, including exclusive features.",
  },
  {
    question:
      "Does E-Paper Facility offer content creation services for other businesses?",
    answer:
      "Absolutely! We provide custom content creation, including white papers, press releases, and social media campaigns, managed by our expert team to elevate your brand.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='py-16 bg-white' id='faq'>
      <div className='px-5 md:px-40'>
        <h2 className='text-3xl md:text-4xl font-bold text-center text-black'>
          Frequently Asked Questions
        </h2>
        <p className='text-center text-gray-600 mt-4 md:w-[70%] mx-auto'>
          Got Questions? Check out the answers to common questions about the PUNCH
          EPaper platform.
        </p>
        <div className='mt-8 space-y-4'>
          {faqs.map((faq, index) => (
            <div key={index} className='border-b-2 pb-2'>
              {/* Question Button */}
              <button
                className='w-full text-left p-3 font-semibold flex justify-between items-center text-black focus:outline-none'
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <motion.span
                  className='text-xl text-[#FF0100]'
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? "−" : "+"}
                </motion.span>
              </button>

              {/* Animated Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key='content'
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className='p-4 pt-0 text-gray-600'>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
