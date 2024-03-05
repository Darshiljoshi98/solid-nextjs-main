"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{        
              title:'',      
              subtitle: "Our Expertise",
              description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 my-20">
            <div className="col-span-1 text-black mt-25">
              <div className=" grid gap-8 grid-flow-row">

                <div className="stats aos-init aos-animate " >
                  <b>
                    400+ P/M
                  </b>
                  <p>
                    Serving Keyword
                  </p>

                </div>
                <div className="stats aos-init aos-animate " >
                  <b>
                    80%
                  </b>
                  <p>
                    Keyword In Top 10
                  </p>

                </div>
                <div className="stats aos-init aos-animate " >
                  <b>
                    54+
                  </b>
                  <p>
                    Happy Client
                  </p>

                </div>
                
                <div className="stats aos-init aos-animate " >
                  <b>
                    99%
                  </b>
                  <p>
                    Client Sucess Rate
                  </p>

                </div>

                <div className="stats aos-init aos-animate " >
                  <b>
                    10+
                  </b>
                  <p>
                    indursty Expertise
                  </p>

                </div>
              </div>
            </div>

            <div className="col-span-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-2 xl:mt-20 xl:gap-12.5"> */}
                {/* <!-- Features item Start --> */}

                {featuresData.map((feature, key) => (
                  <SingleFeature feature={feature} key={key} />
                ))}
                {/* <!-- Features item End --> */}
              </div>
            </div>
            {/* </div> */}

          </div>
        </div>
      </section >

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
