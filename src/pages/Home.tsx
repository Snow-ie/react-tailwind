import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Brands from "../components/ Brands";
import Card from "../components/Card";
import Payday from "../components/Payday";
import DownloadApp from "../components/DownloadApp";
import Footer from "../components/Footer";

import TrendingProducts from "../components/TrendingProducts";
import CallToAction2 from "../components/CallToAction2";

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
      <CallToAction2 />
      <Footer />
    </div>
  );
}

export default Home;
