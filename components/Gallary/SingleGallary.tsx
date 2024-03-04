import { Gallary } from "@/types/gallary";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const SingleGallary = ({ gallary }: { gallary: Gallary }) => {
    const { link, image, comment } = gallary;

    return (
        <article
            className="p-6 mb-6  transition duration-300 group transform hover:-translate-y-2  cursor-pointer">
            <div className="absolute opacity-0 top-0 right-0 left-0 bottom-0" />
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
            </h3>
        </article>


    )
};

export default SingleGallary;