import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Brands from "../components/ Brands";
import Card from "../components/Card";
import Payday from "../components/Payday";
import DownloadApp from "../components/DownloadApp";
import Footer from "../components/Footer";

import TrendingProducts from "../components/TrendingProducts";
import CallToAction from "../components/CallToAction";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Brands />
      <Card />
      <Payday />
      <TrendingProducts />
      <DownloadApp />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default Home;
