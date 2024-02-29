import { Gallary } from "@/types/gallary";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const SingleGallary = ({ gallary }: { gallary: Gallary }) => {
    const { link, image, comment } = gallary;

    return (
        <article
            className="p-6 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
            <div className="absolute opacity-0 top-0 right-0 left-0 bottom-0" />
            <div className="relative mb-4 rounded-2xl">
                <Image
                    width={400}
                    height={400}
                    className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                    src={image}
                    alt=""
                />
                <div
                    className="flex justify-center items-center bg-teal-600  bg-sky-500  absolute top-0 left-0 w-full h-full  rounded-2xl opacity-0 transition-all duration-300 transform 5 text-xl group-hover:opacity-40"


                    rel="noopener noreferrer"
                >

                </div>
            </div>
            <h3 className="font-medium text-xl leading-8">
                <div

                    className="block relative group-hover:text-orange-500 transition-colors duration-200"
                >
                    <span dangerouslySetInnerHTML={{ __html: comment }} />
                </div>
            </h3>
        </article>


    )
};

export default SingleGallary;