import { Layout } from "./components/Layout";
import { Brands } from "./components/sections/Brands";
import { CTA } from "./components/sections/CallToAction";
import { Hero } from "./components/sections/Hero";
import  { Pricing } from "./components/sections/Pricing";
import { Services } from "./components/sections/Services";
import { AboutUs } from "./utils/store/AboutUs";

function App() {
  return (
  <Layout title="Vero's AI">
    <Hero />
    <Brands />
    <Services />
    <AboutUs />
    <Pricing />
    <CTA />
  </Layout>
  );
}

export default App;