"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import { useEffect, useState } from "react";


const Insta = () => {

  const [message, setMessage] = useState(false);
 
  useEffect(() => {
    // senddata();
}, [])
 
  const senddata = async () => {        
    try {
      fetch(`/api/insta`)
      .then((res) => res.json())
      .then((data) => {
    
        if(data.message == 'Server error, please try again!'){
          console.log("505")
          setMessage(true)
        }   
        else{
          
          console.log(JSON.parse(data.data))


        }  
      })   

    } catch (e) {
      console.log(e)
    }
  }
  return (
    <>
      <div className="animate_top mx-auto text-center mt-20">
        <SectionHeader
          headerInfo={{
            title: ``,
            subtitle: `Social Post  `,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`,
          }}
        />
      </div>

      {/* <!-- ===== About Start ===== --> */}
      {message ?      <button >ssss</button> : <h1>data getddd</h1> }

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
