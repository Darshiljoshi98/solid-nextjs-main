"use client";
import React, { useState } from "react";

import SectionHeader from "../../Common/SectionHeader";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

const GoogleMyBusinessSeo = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-10">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <SectionHeader
            headerInfo={{
              title: "",
              subtitle: "Services",
              description: `Google My Business Seo`,
            }}
          />
        </div>
        <div className="flex justify-center items-center pt-5"> 
          <Image
            src={"/images/icon/soon.jpg"}
            width={500}
            height={500}
            alt="image"
          />
        </div>
      </section>
    </>
  );
};

export default GoogleMyBusinessSeo;
