import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Pricing from "@/components/Pricing";
import Gallary from "@/components/Gallary";

export const metadata: Metadata = {
  title: "CeoPage - Be Digital",
  description: "This is Ceo page",
  icons:"/images/logo/data.svg"
  // other metadata
};

const CeoPage = () => {
  return (
    <div className="pb-20 pt-20">
      <Gallary />
    </div>
  );
};

export default CeoPage;
