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
            <div className="">
                <div className="p-6 container mx-auto">

                    <div className="md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">

                        {gallaryData.map((gallary, key) => {
                            return (<>

                                <SingleGallary gallary={gallary} key={key} />
                            </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallary;