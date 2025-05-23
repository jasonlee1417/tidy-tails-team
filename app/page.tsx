import Faqs from "./ui/faqs";
import Header from "./ui/header";
import Hero from "./ui/hero";
import Whyus from "./ui/whyus";
import CallToAction from "./ui/callToAction";
import Footer from "./ui/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Whyus />
      <Faqs />
      <CallToAction/>
      <Footer />
    </div>
  );
}
