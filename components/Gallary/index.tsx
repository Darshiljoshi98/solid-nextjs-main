import Image from "next/image";
import Link from "next/link";
import React from "react";
import SingleGallary from "./SingleGallary";
import gallaryData from './gallaryData'
import SectionHeader from "../Common/SectionHeader";

const Gallary = () => {

    return (
        <>
            <div className="animate_top mx-auto text-center">
                <SectionHeader
                    headerInfo={{
                        title: ``,
                        subtitle: `Resources`,
                        description: `.`,
                    }}
                />
            </div>
            <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-20 ">
                <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
                    <div className="flex items-center  lg:gap-32.5">

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-14" >
                        {/* className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-2 xl:mt-20 xl:gap-12.5 */}
                            {gallaryData.map((gallary, key) => {
                                return (<>

                                    <SingleGallary gallary={gallary} key={key} />
                                </>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>






        </>
    );
};

export default Gallary;