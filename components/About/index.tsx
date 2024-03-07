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
                  title: '',
                  subtitle: `About US`,
                  description: `.`,
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
                {/* <span className="font-medium uppercase text-black dark:text-white">
                  <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle2 uppercase text-white ">
                    New
                  </span>{" "}
                  Who we are
                </span> */}
                <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                  A Complete Solution for
                  <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                    SEO
                  </span>
                </h2>
                <p>
                  Welcome to Be Digital, a women-owned SEO agency dedicated to providing exceptional SEO
                  services for individuals and digital business owners worldwide. We're here to help you attract
                  more qualified traffic to your website, focusing on the search terms that are crucial for your
                  business success. By optimizing every aspect that affects search engine rankings, we ensure
                  measurable results. Trust our proven expertise to enhance your online visibility and set your
                  business on the path to long-term success.
                </p>



              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">

          <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl '>

            <div className='grid grid-cols-1  my-16 mx-5 gap-5'>
              <div>
                <div className="pt-12 px-10 sm:px-24 pb-30 md:pb-10 rounded-3xl">
                  <div className="text-center">
                    <p className="mt-5 mb-2    rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1 mr-10 text-metatitle2 font-medium  text-white">
                      Story of Be Digital
                    </p>
                    <p className="pr-10"> 
                      Introducing Be Digital, founded by a passionate B-Tech graduate with six years of professional
                      background in SEO, web development, and digital marketing. With her deep understanding of
                      technology and a keen eye for digital trends, she recognized the immense potential of helping
                      businesses thrive in the online world. Her journey took a new turn with motherhood, igniting
                      her passion for business. Thus, Be Digital was born, with a mission to assist individuals
                      worldwide in managing their SEO and enhancing website ranking.
                    </p>
                  </div>
                </div>
              </div>
              <div>   <div className="pt-12 px-10 sm:px-24 pb-30 md:pb-10 rounded-3xl">
                <div className="text-center">
                  <p className="mt-5 mb-2 pr-5 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1 mr-10 text-metatitle2 font-medium  text-white">
                    Vision  of Be Digital
                  </p>
                  <p className="pr-10 text">
                    Our vision is crystal clear: to deliver top-quality SEO services that propel your website to the
                    pinnacle of Google rankings. Whether you're a business seeking to handle SEO clients or an
                    individual looking to optimize your website, we've got the expertise to assist you. Our expert
                    team is dedicated to enhancing the visibility of both local and digital businesses on the Google
                    search engine, ensuring that your brand stands out amidst the digital noise..

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
