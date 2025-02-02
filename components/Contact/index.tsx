"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import SectionHeader from "../Common/SectionHeader";
import Link from "next/link";
import SingleOffice from "./SingleOffice";
import countryaData from "./officeData";


const Contact = () => {
  /**
   * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
   * Reason: To fix rehydration error
   */
  const [hasMounted, setHasMounted] = React.useState(false);
  const [isDisabled, setisDisabled] = React.useState(false);
  const [status, setStatus] = React.useState<string | null>(null);

  const [user, setUser] = React.useState({
    username: "",
    email: "",
    phone: "",
    subject: "",
    message: "",


  })


  function handleChange(e) {
    
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
    setisDisabled(true)
    
    e.preventDefault();


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
        try{
          const response = await fetch('/api/Mail', {
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
        }
        catch  (e) {
          console.log(e)
        }
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
          setisDisabled(false)
        }, 5000);
        return () => clearTimeout(timeoutId);
      } else {

        setStatus('error');
        const timeoutId = setTimeout(() => {
          setStatus(null);
          setisDisabled(false)
        }, 5000);
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
          {/* <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/spiral.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/spiral.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div> */}

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
              <h2 className="text-center mb-15 text-3xl font-semibold subtitleTextColor  dark:text-white xl:text-sectiontitle2">
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
                    disabled={isDisabled}
                    className="text-center inline-flex items-center gap-2.5 rounded-full bg-color px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-green-900"
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
                  {status === 'success' &&
                    <p className="text-center mt-5 rounded-bl-full rounded-tl-full bg-color px-4.5 py-1.5 text-metatitle2 font-medium uppercase text-white">
                      Thanks,We will contact you again shortly.
                    </p>
                  }
                  {status === 'error' &&
                    <p className="text-center mt-5 rounded-bl-full rounded-tl-full bg-color px-4.5 py-1.5 text-metatitle2 font-medium uppercase text-white">
                      There was an error submitting your message. Please try again.
                    </p>
                  }
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
              <h2 className="text-center mb-12.5 text-3xl font-semibold subtitleTextColor dark:text-white xl:text-sectiontitle2">
                Find us
              </h2>

              <div className="5 mb-7">
                <h3 className="text-center mb-4 text-metatitle3 font-medium DescriptionTextColor dark:text-white">
                  Our Loaction
                </h3>
                <p className="text-center">A/40 Janpath society near hirabhai tower</p>
              </div>
              <div className="5 mb-7">
                <h3 className=" text-center mb-4 text-metatitle3 font-medium DescriptionTextColor dark:text-white">
                  Email Address
                </h3>
                <p className="text-center">
                  <a href="#">zarnaj@bedigitalworld.com</a>
                </p>
              </div>
              <div>
                <h4 className="text-center mb-4 text-metatitle3 font-medium DescriptionTextColor dark:text-white">
                  Phone Number
                </h4>
                <p className="text-center">
                  <a href="#">+91 7874074605</a>
                </p>
                
              </div>
              <div>
                <h4 className="text-center mt-4 mb-4 text-metatitle3 font-medium DescriptionTextColor dark:text-white md:block hidden">
               Map
                </h4>
                <p className="sm:pl-45 md:pl-0 lg:pl-0 xl:pl-0 2xl:pl-0 md:block hidden">                 
                  <iframe className="rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14691.957107178925!2d72.6070983!3d22.9874218!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85616662956d%3A0x27b12950b346591e!2sJoshi%20house!5e0!3m2!1sen!2sus!4v1709644451654!5m2!1sen!2sus" loading="lazy"></iframe>
                   
                </p>
                
              </div>

            </motion.div>
          </div>
        </div>
        <div  className="mt-20"> 
          <SectionHeader
            headerInfo={{
              title: "",
              subtitle: "Our Global Offices",
              description: "",

            }}
          />
          <div id="aboutus-section">

            <div className='mx-auto max-w-7xl px-4 py-2 my-2 lg:px-10 bg-lightgrey rounded-3xl relative'>
              <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-1 lg:mt-5 lg:grid-cols-2 xl:mt-5 xl:gap-12.5">
                {/* <!-- Features item Start --> */}

                {countryaData.map((office, key) => (
                  <SingleOffice office={office} key={key} />
                ))}
                {/* <!-- Features item End --> */}
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
