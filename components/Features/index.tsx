"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";
import { useRouter } from "next/navigation";

const Features = () => {

  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-5 lg:py-25 xl:py-10 ">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 pt-10">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{        
              title:'',      
              subtitle: "Our Expertise",
              description: `Our experts craft a tailored strategy just for you, packed with smart keyword choices. We dig
              deep into past trends and future projections to ensure your site shines across the globe..`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 my-2">
            <div className="col-span-1  text-black mt-25 ml-15">
              <div className=" grid gap-8 sm:gap-3 grid-flow-row">

                <div className="stats aos-init aos-animate text-center " >
                  <b>
                    400+ P/M
                  </b>
                  <p>
                    Serving Keyword
                  </p>

                </div>
                <div className="stats aos-init aos-animate text-center" >
                  <b>
                    80%
                  </b>
                  <p>
                    Keyword In Top 10
                  </p>

                </div>
                <div className="stats aos-init aos-animate text-center" >
                  <b>
                    54+
                  </b>
                  <p>
                    Happy Client
                  </p>

                </div>
                
                <div className="stats aos-init aos-animate text-center" >
                  <b>
                    99%
                  </b>
                  <p>
                    Client Sucess Rate
                  </p>

                </div>

                <div className="stats aos-init aos-animate text-center" >
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
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
             
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

export default Features;
