"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Insta = () => {
  return (
    <>
      <div className="animate_top mx-auto text-center">
        <SectionHeader
          headerInfo={{
            title: ``,
            subtitle: `Social Post  `,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`,
          }}
        />
      </div>

      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30 mt-15">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <iframe src="https://widget.taggbox.com/150668" className="data"></iframe>
          </div>
        </div>
      </section>


    </>
  );
};

export default Insta;
