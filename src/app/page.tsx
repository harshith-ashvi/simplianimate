import { Hero } from "@/components/landing-page/hero";
import Templates from "@/components/landing-page/templates";
import EasyUse from "@/components/landing-page/easy-use";
import Testimonials from "@/components/landing-page/testimonials";
import Footer from "@/components/landing-page/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Templates />
      <EasyUse />
      <Testimonials />
      <Footer />
    </>
  );
}
