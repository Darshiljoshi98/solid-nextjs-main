"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import Link from "next/link";



const Pricing = () => {
  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section className="overflow-hidden pb-5 pt-5 lg:pb-10 xl:pb-10">
        {/* <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
 
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `PRICING PLANS`,
                subtitle: `Simple Pricing`,
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`,
              }}
            />
          </div>
    
        </div> */}
{/* 
        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/spiral.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
         
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                $10{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /month
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Small Pack
              </h4>
              <p>Lorem ipsum dolor sit amet, consec adipisicing elit.</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    300 GB Storage
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Unlimited Photos and Videos
                  </li>
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    Exclusive Support
                  </li>
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    Custom Branding Strategy
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Get the Plan
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
 
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                popular
              </div>

              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                $59{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /month
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Medium Pack
              </h4>
              <p>Lorem ipsum dolor sit amet, consec adipisicing elit.</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    300 GB Storage
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Unlimited Photos and Videos
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Exclusive Support
                  </li>
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    Custom Branding Strategy
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Get the Plan
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                $189{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /month
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Large Pack
              </h4>
              <p>Lorem ipsum dolor sit amet, consec adipisicing elit.</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    300 GB Storage
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Unlimited Photos and Videos
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Exclusive Support
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Custom Branding Strategy
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Get the Plan
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
*/
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: ``,
              subtitle: `What our CEO says`,
              description: `.`,
            }}
          />
        </div> }

        <div className="relative">

          {/* <Image src="./images/shape/spiral.svg" height={272} width={686} alt="spiral-design" className="absolute left-0 hidden lg:block -z-10" /> */}

          <div className='mx-auto max-w-7xl px-4 my-2 sm:py-10 lg:px-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 my-5'>
              {/* COLUMN-1 */}
              <div>
                <Image src="/images/user/ceo4.jpg" alt="man-icon" width={416} height={530} className="mx-auto md:mx-0" />

                <div className='col-span-4 pt-4 pl-20 md:pl-22 sm:pl-60' >
                  <div className='flex gap-4'>
                    <div className='footer-icons'>
                      <Link href="https://www.facebook.com/profile.php?id=100070063160778"><Image src={'/images/user/facebook.svg'} alt="facebook" width={15} height={20} /></Link>
                    </div>
                    <div className='footer-icons'>
                      <Link href="https://twitter.com"><Image src={'/images/user/instagram.svg'} alt="instagram" width={20} height={20} /></Link>
                    </div>
                    <div className='footer-icons'>
                      <Link href="https://instagram.com"><Image src={'/images/user/gmail.svg'} alt="gmail" width={20} height={20} /></Link>
                    </div>
                  </div>
                </div>

              </div>

              {/* COLUMN-2 */}
              <div className="relative">
                <Image src="./images/user/comma.svg" alt="comma-image" width={200} height={106} className="absolute comma-pos hidden lg:block" />
                <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start DescriptionTextColor  ">Dedicated to help peoples design needs.</h2>
                <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start text-wrap">Welcome to Be Digital, where we redefine the boundaries of digital visibility and search engine optimization. In today's digital era, the significance of a robust online presence cannot be overstated. As the CEO of Be Digital, my mission is not just to lead our company into the forefront of the SEO industry but to ensure we are instrumental in transforming the digital landscapes of our clients.</p>
                <p className="text-2xl font-semibold mt-12 lg:ml-32 preline text-center lg:text-start subtitleTextColor">Darshil Joshi, CEO </p>

              </div>

            </div>
          </div>
        </div>

        {/* <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: ``,
              subtitle: `Our Patners`,
              description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`,
            }}
          />

        </div>
        <div className="relative mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="absolute -bottom-16 -z-1 h-full w-full">
            <Image
              fill
              src="/images/shape/spiral.svg"
              alt="Dotted"
              className="dark:hidden"
            />
            <Image
              fill
              src="/images/shape/spiral.svg"
              alt="Dotted"
              className="hidden dark:block"
            />
          </div>
          <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl '>

            <div className='grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 gap-5'>

           


              <div className="bg-darkblue bg-beliefs pt-12 px-10 sm:px-24 pb-30 md:pb-10 rounded-3xl">
                <div className="text-center">
                  <span className="inline-flex items-baseline">
                    <p className="mt-5 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1 mr-10 text-metatitle font-medium  text-white">
                    Australia
                    </p>
                    <Image className="self-center w-15 h-15 " src={'/images/user/aus.svg'} width={30} height={30} alt={""} />
                  </span>
                </div>

            
                <Image src="./images/user/man.svg" alt="man-icon" width={416} height={510} className="mx-auto md:mx-0 pt-15" />
                <div className="text-center">
                  <h5 className="mb-2 text-red-100 mt-2 font-medium leading-tight">John Doe</h5>

                  <p className="text-red-100 ">Web designer</p>
                </div>
                <div className='col-span-4 pt-4 pl-20' >
                  <div className='flex gap-4'>
                    <div className='footer-icons'>
                      <Link href="https://facebook.com"><Image src={'/images/user/facebook.svg'} alt="facebook" width={15} height={20} /></Link>
                    </div>
                    <div className='footer-icons'>
                      <Link href="https://twitter.com"><Image src={'/images/user/instagram.svg'} alt="instagram" width={20} height={20} /></Link>
                    </div>
                    <div className='footer-icons'>
                      <Link href="https://instagram.com"><Image src={'/images/user/gmail.svg'} alt="gmail" width={20} height={20} /></Link>
                    </div>
                  </div>
                </div>
               

              </div>

            

              <div className="bg-darkblue bg-beliefs2 pt-10 px-10 sm:px-24 pb-52 md:pb-50 rounded-3xl">
                <div className="text-center">

                  <span className="inline-flex items-baseline">
                    <p className="mt-5 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1 mr-10 text-metatitle font-medium  text-white">
                    New Zealand
                    </p>

                    <Image className="self-center w-15 h-15" src={'/images/user/new.svg'} width={30} height={30} alt={""} />
                  </span>
                </div>
              

                <Image src="./images/user/man.svg" alt="man-icon" width={416} height={510} className="mx-auto md:mx-0 pt-15" />
                <div className="text-center">
                  <h5 className="mb-2 mt-2 text-red-100 font-medium leading-tight">John Doe</h5>
                  <p className="text-red-100">Web designer</p>
                </div>
                <div className='col-span-4 pt-4 pl-20' >
                  <div className='flex gap-4'>
                    <div className='footer-icons'>
                      <Link href="https://facebook.com"><Image src={'/images/user/facebook.svg'} alt="facebook" width={15} height={20} /></Link>
                    </div>
                    <div className='footer-icons'>
                      <Link href="https://twitter.com"><Image src={'/images/user/instagram.svg'} alt="instagram" width={20} height={20} /></Link>
                    </div>
                    <div className='footer-icons'>
                      <Link href="https://instagram.com"><Image src={'/images/user/gmail.svg'} alt="gmail" width={20} height={20} /></Link>
                    </div>
                  </div>
                </div>
                
              </div>


            </div>
          </div>
        </div> */}
      </section>
      {/* <div className="text-center">
      <Image src="./images/user/man.svg" alt="comma-image" width={416} height={530} className="mx-auto mb-4 w-32 rounded-lg"/>

  <h5 className="mb-2 text-xl font-medium leading-tight">John Doe</h5>
  <p className="text-neutral-500 dark:text-neutral-400">Web designer</p>
</div> */}


      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
