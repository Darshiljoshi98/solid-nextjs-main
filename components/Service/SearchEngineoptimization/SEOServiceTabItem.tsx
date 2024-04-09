import React from "react";
import { FeatureTab } from "@/types/featureTab";

import { motion } from "framer-motion";
import Image from "next/image";

const ServiceTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, desc3, image, imageDark } = featureTab;

  return (
    <>
      <div>
        <h2 className="DescriptionTextColor text-azure text-center text-3xl font-bold xl:text-sectiontitle2">
          {title}
        </h2>
        <div>
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
              className="animate_right pt-10 md:pl-20 md:pt-25"
            >
              {/* <span className="font-medium uppercase text-black dark:text-white">
              <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle2 uppercase text-white ">
                New
              </span>{" "}
              Who we are
            </span> */}

              <p className="text-center">{desc1}</p>
              <p className="text-center mt-5">{desc2}</p>
              <p className="text-center">{desc3}</p>
            </motion.div>
          </div>

          {/* <div className="flex items-center gap-8 lg:gap-32.5">


          </div> */}
        </div>
      </div>
    </>
  );
};

export default ServiceTabItem;
