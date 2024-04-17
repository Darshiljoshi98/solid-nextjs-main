import React from "react";
import { OfficeData } from "@/types/contact";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleOffice = ({ office }: { office: OfficeData }) => {
  const { icon, title, location, email, phone,phoneLink } = office;

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
        <div className="mb-7.5 flex flex-col gap-7.5 ">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px]">
            <Image src={icon} width={50} height={50} alt="title" />
          </div>
     
          <div>
            <div className="inline-flex items-baseline">
            <Image
                className="h-10 w-10 self-center"
                src={"/images/icon/location.svg"}
                width={15}
                height={15}
                alt={""}
              />
              <p className="ml-5 text-center DescriptionTextColor">
              
                {location}
              </p>
            </div>
          </div>
          <div>
            <div className="inline-flex items-baseline">
            <Image
                className="h-10 w-10 self-center"
                src={"/images/icon/email.svg"}
                width={15}
                height={15}
                alt={""}
              />
              <p className="ml-5 text-center DescriptionTextColor">
              
                {email}
              </p>
            </div>
          </div>
          <div>
            <div className="inline-flex items-baseline">
            <Image
                className="h-10 w-10 self-center"
                src={"/images/icon/phone.svg"}
                width={15}
                height={15}
                alt={""}
              />
              <p className="ml-5 text-center DescriptionTextColor">
              
              <a href={phoneLink}>{phone}</a>
              </p>
            </div>
          </div>

        </div>
      </motion.div>
    </>
  );
};

export default SingleOffice;
