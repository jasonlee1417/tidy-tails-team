import Faqs from "./ui/faqs";
import Header from "./ui/header";
import Hero from "./ui/hero";
import Whyus from "./ui/whyus";
import CallToAction from "./ui/callToAction";
import Footer from "./ui/footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Howitworks from "./ui/Howitworks";
import Aboutus from "./ui/aboutus";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Whyus />
      <Howitworks />
      <Aboutus />
      <Faqs />
      <CallToAction/>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
