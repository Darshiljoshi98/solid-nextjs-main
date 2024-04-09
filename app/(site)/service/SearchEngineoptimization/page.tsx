import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import SearchEngineoptimization from "@/components/Service/SearchEngineoptimization";

export const metadata: Metadata = {
  title: "Service Page -  Seo page ",
  description: "This is seo service page ",
  icons:"/images/logo/data.svg"
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <SearchEngineoptimization />
    </div>
  );
};

export default SupportPage;

