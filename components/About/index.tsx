"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-2 lg:pb-5 xl:pb-5 ">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-10 xl:pt-10">
          {/* <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/spiral.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/spiral.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div> */}
          <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
            <div className="animate_top mx-auto text-center">
              <SectionHeader
                headerInfo={{
                  title: "",
                  subtitle: `About US`,
                  description: `.`,
                }}
              />
            </div>
          </div>
          <div className="mx-auto max-w-c-1235 px-4 pt-4 md:px-8 xl:px-0">
            <div className="my-10 grid grid-cols-1 md:grid-cols-2">
              <div>
                {" "}
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: -20,
                    },

                    visible: {
                      opacity: 1,
                      x: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_left relative mx-auto  aspect-[588/526.5] "
                >
                  <Image
                    src="/images/logo/342.svg"
                    alt="About"
                    className="dark:hidden"
                    fill
                  />
                  <Image
                    src="/images/logo/342.svg"
                    alt="About"
                    className="hidden dark:block"
                    fill
                  />
                </motion.div>
              </div>
              <div>
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: 20,
                    },

                    visible: {
                      opacity: 1,
                      x: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_right pt-10 md:pl-20 md:pt-10"
                >
                  {/* <span className="font-medium uppercase text-black dark:text-white">
                  <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle2 uppercase text-white ">
                    New
                  </span>{" "}
                  Who we are
                </span> */}

                  <h2 className="relative mb-6 text-center text-3xl font-bold text-black dark:text-white xl:text-hero">
                    A Complete Solution for
                    <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                      SEO
                    </span>
                  </h2>
                  <p className="text-center">
                    Welcome to Be Digital, a women-owned SEO agency dedicated to
                    providing exceptional SEO services for individuals and
                    digital business owners worldwide.
                  </p>
                  <p className="mt-5 text-center">
                    We're here to help you attract more qualified traffic to
                    your website, focusing on the search terms that are crucial
                    for your business success. By optimizing every aspect that
                    affects search engine rankings, we ensure measurable
                    results. Trust our proven expertise to enhance your online
                    visibility and set your business on the path to long-term
                    success.
                  </p>
                  <p className="mt-5 text-center">
                    Trust our proven expertise to enhance your online visibility
                    and set your business on the path to long-term success.
                  </p>
                </motion.div>
              </div>

              {/* <div className="flex items-center gap-8 lg:gap-32.5">


              </div> */}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-c-1235 px-4 pt-4 md:px-8 xl:px-0">
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-10">

        <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top relative z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5 "
      >
        <button className="-rotate-60 bg-color absolute -right-3.5 top-7.5 cursor-pointer rounded-bl-full rounded-tl-full px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
          Vision of Be Digital
        </button>

        {/* <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] ">
          <Image src={icon} width={75} height={75} alt="title" />
        </div> */}
        <h3 className="DescriptionTextColor mb-5 mt-7.5 text-center text-xl font-semibold dark:text-white xl:text-itemtitle">
          Our vision is crystal clear: to deliver top-quality SEO services that
          propel your website to the pinnacle of Google rankings.
        </h3>

        <p className="text-wrap text-center">
          {" "}
          Our vision is crystal clear: to deliver top-quality SEO services that
          propel your website to the pinnacle of Google rankings.{" "}
        </p>
        <p className="text-wrap mt-5 text-center">
          {" "}
          Our expert team is dedicated to enhancing the visibility of both local
          and digital businesses on the Google search engine, ensuring that your
          brand stands out amidst the digital noise..{" "}
        </p>
      </motion.div>

      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top relative z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5 "
      >
        <button className="-rotate-60 bg-color absolute -right-3.5 top-7.5 cursor-pointer rounded-bl-full rounded-tl-full px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
          Story of Be Digital
        </button>

        {/* <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] ">
          <Image src={icon} width={75} height={75} alt="title" />
        </div> */}
        <h3 className="DescriptionTextColor mb-5 mt-7.5 text-center text-xl font-semibold dark:text-white xl:text-itemtitle">
          Introducing Be Digital, founded by a passionate B-Tech graduate with
          six years of professional background in SEO, web development, and
          digital marketing. .
        </h3>

        <p className="text-wrap text-center">
          {" "}
          With her deep understanding of technology and a keen eye for digital
          trends, she recognized the immense potential of helping businesses
          thrive in the online world. Her journey took a new turn with
          motherhood, igniting{" "}
        </p>
        <p className="text-wrap mt-5 text-center">
          {" "}
          Thus, Be Digital was born, with a mission to assist individuals
          worldwide in managing their SEO and enhancing website ranking.{" "}
        </p>
      </motion.div>
        </div>
      </div>

    </>
  );
};

export default About;
