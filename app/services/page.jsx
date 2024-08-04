"use client";

// imports
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Modern and functional websites tailored to specific needs. From informational pages to online stores, ensuring a web presence that is attractive, fast, and secure.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Intuitive user interfaces and seamless user experiences are designed with a focus on aesthetics and usability, ensuring customers enjoy every interaction with the product.",
    href: "",
  },
  {
    num: "03",
    title: "Software Development",
    description:
      "Custom software solutions are developed to optimize business processes. From mobile apps to complex enterprise systems, ideas are turned into reality with cutting-edge technology.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Visibility on search engines is enhanced to attract more traffic to the website. Advanced SEO strategies are used to ensure the business stands out in search results.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl " />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
