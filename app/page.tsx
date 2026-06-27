import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Steps from "@/components/Steps";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Features />
        <Gallery />
        <Steps />
        <Download />
      </main>
      <Footer />
    </>
  );
}
