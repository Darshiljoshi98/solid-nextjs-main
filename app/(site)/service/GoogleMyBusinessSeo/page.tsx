import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import GoogleMyBusinessSeo from "@/components/Service/GoogleMyBusinessSeo";

export const metadata: Metadata = {
  title: "Service Page -  Googale My Business Seo page ",
  description: "This is   Googale My Business Seo service page ",
  icons:"/images/logo/data.svg"
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      
      <GoogleMyBusinessSeo />
      
    </div>
  );
};

export default SupportPage;
