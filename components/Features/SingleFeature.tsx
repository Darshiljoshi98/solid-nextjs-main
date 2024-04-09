import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';


const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description,routerUrl } = feature;
  const router = useRouter();
  const movepage = async () => {

    router.push(`/service/${routerUrl}`)
  }
  return (
    <>
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
        className="animate_top z-40 relative rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5 "
      >
            <button className="absolute -right-3.5 top-7.5 -rotate-60 rounded-bl-full rounded-tl-full bg-color px-4.5 py-1.5 text-metatitle font-medium uppercase text-white cursor-pointer" onClick={movepage}>
                Know More
              </button>
        
     
     <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] ">
          <Image src={icon} width={50} height={50} alt="title" />
        </div>
        <h3 className="text-center mb-5 mt-7.5 text-xl font-semibold DescriptionTextColor dark:text-white xl:text-itemtitle">
          {title}
        </h3>

        <p className="text-wrap text-center">{description}</p>   



      </motion.div>
    </>
  );
};

export default SingleFeature;
