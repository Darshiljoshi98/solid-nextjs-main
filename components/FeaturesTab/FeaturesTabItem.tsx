import React from "react";
import { FeatureTab } from "@/types/featureTab";


import { motion } from "framer-motion";
import Image from "next/image";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, desc3, image, imageDark } = featureTab;

  return (
    <>
    
      <div className='grid grid-cols-1 md:grid-cols-2 my-16'>
              <div>      <motion.div
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
                  src={image}
                  alt={title}
                  className="dark:hidden"
                  fill
                />
                <Image
                  src={imageDark}
                  alt={title}
                  className="hidden dark:block"
                  fill
                />
              </motion.div></div>
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

                  <h2 className="ttext-center mb-7 text-3xl font-bold DescriptionTextColor text-azure xl:text-sectiontitle2">
                   {title}
                    
                  </h2>
                  <p className="text-center">
                 {desc1}
                  </p>
                  <p className="text-center mt-5">
                 {desc2}
                  </p>
                  <p className="text-center mt-5">
                 {desc3}
                  </p>



                </motion.div>
              </div>


              {/* <div className="flex items-center gap-8 lg:gap-32.5">


              </div> */}
            </div>
    </>
  );
};

export default FeaturesTabItem;
