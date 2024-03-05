import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "CeoPage - Be Digital",
  description: "This is Ceo page",
  // other metadata
};

const CeoPage = () => {
  return (
    <div className="pb-20 pt-20">
      <Testimonial />
    </div>
  );
};

export default CeoPage;
