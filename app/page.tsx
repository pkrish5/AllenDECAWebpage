import AboutSectionOne from "@/components/About/AboutSectionOne";
import Advisors from "@/components/About/Advisors";
import Officers from "@/components/About/OfficerTeam";
import ScrollUp from "@/components/Common/ScrollUp";
import ResourcesPage from "@/components/Resource";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      {/* <AboutSectionOne /> */}
      <br></br>
      {/* <Advisors/>
      <br></br> */}
      <Officers />
      <ResourcesPage />
    </>
  );
}
