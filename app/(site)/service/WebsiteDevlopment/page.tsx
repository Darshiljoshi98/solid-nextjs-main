import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Service from "@/components/Service/WebSiteDevlopment";
import ServiceWebsiteDevlopment from "@/components/Service/WebSiteDevlopment";

export const metadata: Metadata = {
  title: "Service Page - Website Devlopment Page ",
  description: "This is website Devlopment service page ",
  icons:"/images/logo/data.svg"
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-15">
      <ServiceWebsiteDevlopment />
    </div>
  );
};

export default SupportPage;
