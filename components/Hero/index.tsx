"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                🔥 Be Digital  - Patner of Your Growth
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Your Trustworthy  Reliable SEO team is  just one click away  {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  Click Below Button
                </span>
              </h1> 


              <div className="mt-10">
                <Link
                  aria-label="get started button"
                  className="flex rounded-full bg-primary  px-7.5 py-2.5 text-white" href={`/#features`}                    >
                  Get Started
                </Link>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute  top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute  bottom-0 z-1"
                />
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden ml-10 radius   overflow-hidden"
                    width={600} height={700}
                    src="/images/hero/banner.jpg"
                    alt="Hero"

                  />
                  <Image
                    className="hidden shadow-solid-l dark:block ml-10   radius  overflow-hidden"
                    src="/images/hero/banner.jpg"
                    alt="Hero"
                    width={600} height={700}

                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div>
        <div className='mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

      

            <div className="mx-auto sm:mx-0">
              <div className='py-3 text-center lg:text-start'>
                <button className='text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black'>DESIGN AGENCY</button>
              </div>
              <div className="py-3 text-center lg:text-start">
                <h1 className='text-5xl lg:text-60xl font-bold text-darkpurple'>
                  Your Trustworthy <br /> Reliable SEO team is <br /> just one click away <br />
                </h1>
                <p className="mt-5 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1 mr-10 text-metatitle2 font-medium  text-white">
                Contact us Now! 
                </p>
                <h1>
                 
                </h1>
              </div>
         
            </div>

        

            <div className='lg:-m-24 lg:pt-20 hidden lg:block pl-'>
              <Image src="/images/user/banner2.jpg" alt="hero-image" width={500} height={500} />
            </div>

          </div>
        </div>

      </div> */}


    </>
  );
};

export default Hero;
