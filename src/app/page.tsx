import { Hero } from "@/components/landing-page/hero";
import Templates from "@/components/landing-page/templates";
import EasyUse from "@/components/landing-page/easy-use";
import Testimonials from "@/components/landing-page/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Templates />
      <EasyUse />
      <Testimonials />
    </>
  );
}
