"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-2 lg:pb-5 xl:pb-5 ">
          <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
            <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
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
          </div>
          <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">

            <div className="animate_top mx-auto text-center">
              <SectionHeader
                headerInfo={{
                  title: `About US`,
                  subtitle: `About US`,
                  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`,
                }}
              />
            </div>

          </div>
          <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0 pt-6">
            <div className="flex items-center gap-8 lg:gap-32.5">
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
                className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
              >
                <Image
                  src="/images/logo/3.svg"
                  alt="About"
                  className="dark:hidden"
                  fill
                />
                <Image
                  src="/images/logo/3.svg"
                  alt="About"
                  className="hidden dark:block"
                  fill
                />
              </motion.div>
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
                className="animate_right md:w-1/2"
              >
                <span className="font-medium uppercase text-black dark:text-white">
                  <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                    New
                  </span>{" "}
                  Who we are
                </span>
                <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                  A Complete Solution for
                  <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                    SEO
                  </span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  ultricies lacus non fermentum ultrices. Fusce consectetur le.
                </p>



              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">

          <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl '>

            <div className='grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 gap-5'>
              <div>
                <div className="pt-12 px-10 sm:px-24 pb-30 md:pb-10 rounded-3xl">
                  <div className="text-center">
                    <p className="mt-5 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1 mr-10 text-metatitle font-medium  text-white">
                      Story of BeDigital
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
                    </p>
                  </div>
                </div>
              </div>
              <div>   <div className="pt-12 px-10 sm:px-24 pb-30 md:pb-10 rounded-3xl">
                <div className="text-center">
                  <p className="mt-5 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1 mr-10 text-metatitle font-medium  text-white">
                    Vision  of BeDigital
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.

                  </p>
                </div>
              </div></div>
            </div>
          </div>

        </div>

      </section>

    </>
  );
};

export default About;
