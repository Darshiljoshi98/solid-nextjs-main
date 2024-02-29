import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import Insta from "@/components/Insta";
import Gallary from "@/components/Gallary";

export const metadata: Metadata = {
  title: "Be Digital",
  description: "This is Home for Sep Pro",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Brands /> */}      
      <About/>
      <Feature />
      {/* <About /> */}
      <FeaturesTab />
      {/* <FunFact />
      <Integration />
      <CTA />
      <FAQ />   */}
      <Pricing />
      <Testimonial />
      <Gallary />
      <Blog />
      <Contact />
      <Insta/>
    
     
    </main>
  );
}
