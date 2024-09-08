import { Metadata } from "next";

import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";

export const metadata: Metadata = {
  description:
    'Welcome to Gento Group of Companies.SL.Ltd, your premier partner in Building and Major Civil Construction. With a steadfast commitment to excellence, we pave the way for enhanced connectivity and seamless travel experiences',
}

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
    </div>
  );
}
