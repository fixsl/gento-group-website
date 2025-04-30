import { Metadata } from "next";

import HeroSection from "@/src/components/HeroSection";
import ProjectsSection from "@/src/components/ProjectsSection";
import ServicesSection from "@/src/components/ServicesSection";
import UpdatedServices from "../components/UpdatedServices";

export const metadata: Metadata = {
  description:
    'Welcome to Gento Group of Companies.SL.Ltd, your premier partner in Building and Major Civil Construction. With a steadfast commitment to excellence, we pave the way for enhanced connectivity and seamless travel experiences',
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      {/* <ServicesSection /> */}
      <UpdatedServices />
      <ProjectsSection />
    </div>
  );
}
