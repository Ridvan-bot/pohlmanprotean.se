export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import About from "@/components/about";
import Services from "@/components/services";
import Technologies from "@/components/technologies";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <About />
      <Services />
      <Technologies />
      <Contact />
    </>
  );
}
