import { Gallary } from "@/types/gallary";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const SingleGallary = ({ gallary }: { gallary: Gallary }) => {
    const { link, image, comment } = gallary;

    return (
        <article
            className="p-6 mb-6  transition duration-300 group transform hover:-translate-y-2  cursor-pointer">
            {/* <div className="absolute opacity-0 top-0 right-0 left-0 bottom-0" />
            <div className="relative mb-4 rounded-2xl">
                <Image
                    width={400}
                    height={400}
                    className=" h-100 w-200 rounded-full overflow-hidden hover:bg-slate-500 hover:rounded-lg"
                    src={image}
                    alt=""
                />
           
            </div>
            <h3 className="font-medium text-xl leading-8">
                <div

                    className="block relative group-hover:text-orange-500 transition-colors duration-200"
                >
                    <span dangerouslySetInnerHTML={{ __html: comment }} />
                </div>
            </h3> */}
            <div className=" dark:bg-gray-900 bg-[#f5f5f5] rounded-xl relative group w-[350px] h-[300px] select-none xs:h-[250px] h-[216px] overflow-hidden px-5 cursor-pointer hover:bg-primary/10 dark:hover:bg-primary/10  space-y-4 group flex flex-col justify-center pt-2 sm:pt-0 ">
        <div className="flex flex-col  -mt-8">
          <h5 className="text-xl text-gray-800 dark:text-white font-semibold group-hover:scale-105 group-hover:text-primary transition-all duration-300 w-full text-ellipsis line-clamp-1 ">
          <span  dangerouslySetInnerHTML={{ __html: comment }} />
          </h5>
         
        </div>

        <div className=" max-w-[200x] max-h-[220px]  w-full flex justify-center items-center">
          <Image
            className="object-center xs:mt-8  h-[200px] group-hover:scale-110 hover:transition-all duration-500"
            height={200}
            width={300}
            src={image}
            alt='abc'
          />
        </div>
        {/* <button className="absolute -bottom-10 left-1/2 -translate-x-1/2 transform transition-all w-[140px] duration-500 group-hover:bottom-6 rounded-lg">
          <Link href="" className="flex gap-3 items-center">
            <p>Shop Now</p>
       
          </Link>
        </button> */}
      </div>
        </article>
        


    )
};

export default SingleGallary;