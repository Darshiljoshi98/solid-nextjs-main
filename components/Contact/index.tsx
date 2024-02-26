"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import SectionHeader from "../Common/SectionHeader";
import Link from "next/link";


const Contact = () => {
  /**
   * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
   * Reason: To fix rehydration error
   */
  const [hasMounted, setHasMounted] = React.useState(false);
  const [status, setStatus] = React.useState<string | null>(null);

  const [user, setUser] = React.useState({
    username: "",
    email: "",
    phone: "",
    subject: "",
    message: "",


  })


  function handleChange(e) {
    debugger
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  const handleSubmit = async (e) => {
    debugger
    e.preventDefault();
    console.log(user.username)
    console.log(user.email)
    console.log(user.phone)

    try {
      const response = await fetch('/api/Contact', {
        method: 'POST',
        headers: { "Content_Type": "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          subject: user.subject,
          message: user.message
        })
      })
      // Set the status based on the response from the API route
      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
          phone: "",
          subject: "",
          message: ""

        })

        setStatus('success');
        const timeoutId = setTimeout(() => {
          setStatus(null);
        }, 3000);
        return () => clearTimeout(timeoutId);
      } else {

        setStatus('error');
        const timeoutId = setTimeout(() => {
          setStatus(null);
        }, 3000);
        return () => clearTimeout(timeoutId);
      }

    } catch (e) {
      console.log(e)
    }
  }
  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/spiral.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
            >
              <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Send a message
              </h2>

              <form
                onSubmit={handleSubmit}
              >
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={user.username}
                    name="username"
                    onChange={handleChange}
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />

                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    value={user.email}
                    name="email"
                    onChange={handleChange}
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={user.subject}
                    onChange={handleChange}
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />

                  <input
                    type="text"
                    placeholder="Phone number"
                    name="phone"
                    required
                    value={user.phone}
                    onChange={handleChange}

                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>

                <div className="mb-11.5 flex">
                  <textarea
                    placeholder="Message"
                    rows={4}
                    required
                    name="message"
                    value={user.message}
                    onChange={handleChange}
                    className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                  ></textarea>
                </div>
                <div className="flex flex-wrap gap-4 xl:justify-between ">
                  <button
                    aria-label="send message"
                    className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
                  >
                    Send Message
                    <svg
                      className="fill-white"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                        fill=""
                      />
                    </svg>
                  </button>
                </div>
                <div>
                  {status === 'success' && <p className='success_msg'>Thanks,We will contact you again shortly.</p>}
                  {status === 'error' && <p className='error_msg'>There was an error submitting your message. Please try again.</p>}

                </div>
              </form>
            </motion.div>
           
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Find us
              </h2>

              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Our Loaction
                </h3>
                <p>290 Maryam Springs 260, Courbevoie, Paris, France</p>
              </div>
              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Email Address
                </h3>
                <p>
                  <a href="#">yourmail@domainname.com</a>
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Phone Number
                </h4>
                <p>
                  <a href="#">+009 42334 6343 843</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div>
          <SectionHeader
            headerInfo={{
              title: "",
              subtitle: "Our Global Offices",
              description: "",

            }}
          />
          <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
              <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
              <h3 className='text-center text-blue text-lg tracking-widest'>ABOUT US</h3>
              <h4 className='text-center text-4xl lg:text-65xl font-bold'>Know more about us.</h4>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32'>

                <div className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
                  <h4 className='text-4xl font-semibold  text-black mb-5 group-hover:text-white'>data</h4>
                  {/* <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" /> */}
                  <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>dara</h4>
                  <Link href="#" className='text-lg font-semibold group-hover:text-white text-blue hover-underline'>

                    {/* <ChevronRightIcon width={20} height={20} /> */}
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
