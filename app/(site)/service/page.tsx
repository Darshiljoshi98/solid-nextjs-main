import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Feature from "@/components/Features";

export const metadata: Metadata = {
  title: "Feture Page ",
  description: "This is Feture page ",
  // other metadata
};

const Services = () => {
  return (
    <div className="pb-20 pt-40">
      <Feature />
    </div>
  );
};

export default Services;
