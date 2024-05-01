"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [showSeondSlideButton, SetshowSeondSlideButton] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const sliderChange = (e) => {
    if (e.activeIndex == 1) {
      SetshowSeondSlideButton(true);
    } else {
      SetshowSeondSlideButton(false);
    }
  };

  return (
    <>
      {/* <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white ">
                🔥 Be Digital  - Patner of Your Growth
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white  text-center">
                Unlock the power of your online presence and watch your revenue soar with our top-tier SEO services! {"   "}
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
      </section> */}
      {/* <section className="overflow-hidden pb-15 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className='grid grid-cols-1 md:grid-cols-2 my-16'>

            <div>
              <div className="w-11/12 ">

                <h1 className="mb-5  text-3xl font-bold DescriptionTextColor  dark:text-white  text-center">
                  Unlock the power of your online presence and watch your revenue soar with our top-tier SEO services! {"   "}
                  <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                    Click Below Button
                  </span>
                </h1>


                <div className="mt-10   text-center childData">
                  <div>

                    <Link
                      aria-label="get started button"
                      className="  bg-color p-5  font-bold  text-white" href={`/#features`}                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="">
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
                <div className=" relative aspect-[700/444] w-full pt-15 md:pt-0">
                  <Image
                    className="shadow-solid-l dark:hidden md:ml-15  radius   overflow-hidden"
                    width={600} height={700}
                    src="/images/hero/banner.jpg"
                    alt="Hero"

                  />
                  <Image
                    className="hidden shadow-solid-l dark:block ml-10  pt-10 radius  overflow-hidden"
                    src="/images/hero/banner.jpg"
                    alt="Hero"
                    width={600} height={700}

                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      
      </section> */}

      <div></div>
      <div>
        <div className="grid grid-cols-12 gap-6 pt-20">
          <div className="col-start-2 col-end-12">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={sliderChange}
              autoplay={{
                delay: 1500,
                disableOnInteraction: true,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                // when window width is >= 640px
                0: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 1,
                },
              }}
            >
              <SwiperSlide className="relative">
                <Image
                  className=""
                  width={1800}
                  height={50}
                  src="/images/hero/b1.jpg"
                  alt="Hero"
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  className=""
                  width={1800}
                  height={50}
                  src="/images/hero/b2.jpg"
                  alt="Hero"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-start-1 col-end-3"></div>
{/* 
          <div className="col-start-2 col-end-12 ">
            <div className="text-center ">
              {showSeondSlideButton ? (
                <div>
                  <Link
                    aria-label="get started button"
                    className="  bg-color p-5  font-bold  text-white"
                    href={`/support`}
                  >
                    Get Quote
                  </Link>
                </div>
              ) : (
                <div>
                  <Link
                    aria-label="get started button"
                    className="  bg-color p-5  font-bold  text-white"
                    href={`/support`}
                  >
                    Contact Us
                  </Link>
                </div>
              )}
            </div>
          </div> */}
        </div>
      </div>
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
