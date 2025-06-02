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
import Reviews from "./ui/reviews";
import WhyHireUs from "./ui/whyhireus";
import AreasWeServe from "./ui/areasweserve";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Whyus />
      <Reviews />
      <WhyHireUs />
      {/*cta block*/}
      <AreasWeServe />
      {/*refer a friend*/}
      <Howitworks />
      <Faqs />
      <CallToAction/>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
