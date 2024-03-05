import React from "react";
import { OfficeData } from "@/types/contact";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleOffice = ({ office }: { office: OfficeData }) => {
  const { icon, title, location, email, phone } = office;

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
        className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
      >
        <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px]">
          <Image src={icon} width={50} height={50} alt="title" />
        </div>
        <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
          {title}
        </h3>
        <div className="text-center">
          <div className="inline-flex items-baseline">
          <Image className="self-center w-15 h-15" src={'/images/icon/location.svg'} width={15} height={15} alt={""} />
            <p className="mt-5 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1 mr-10 text-metatitle2 font-medium  text-white">
              {location}
            </p>

           
          </div>
        </div>
        <div className="text-center">

          <div className="inline-flex items-baseline">
          <Image className="self-center w-10 h-10 mt-5 mr-10" src={'/images/icon/email.svg'} width={15} height={15} alt={""} />
            <p className="mt-5 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1 mr-10 text-metatitle2 font-medium  text-white">
              {email}
            </p>

           
          </div>
        </div>
        <div className="text-center">

          <div className="inline-flex items-baseline">
          <Image className="self-center w-10 h-10 mt-5 mr-14" src={'/images/icon/phone.svg'} width={15} height={15} alt={""} />
            <p className="mt-5 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1 mr-10 text-metatitle2 font-medium  text-white">
              {phone}
            </p>

           
          </div>
        </div>
        
      </motion.div>
    </>
  );
};

export default SingleOffice;
