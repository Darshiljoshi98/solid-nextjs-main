import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import WhitelableSEOPartners from "@/components/Service/WhitelableSEOPartners";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Service Page -Whiteable  Seo Partner  Page ",
  description: "This is Whiteable  Seo Partner page ",
  icons:"/images/logo/data.svg"
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <WhitelableSEOPartners />
      <Testimonial />
    </div>
  );
};

export default SupportPage;
