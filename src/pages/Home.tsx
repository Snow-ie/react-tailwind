import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Brands from "../components/ Brands";
import Card from "../components/Card";
import Payday from "../components/Payday";
import Young from "../components/Young";
import DownloadApp from "../components/DownloadApp";
import Footer from "../components/Footer";
import Calltoaction from "../components/Calltoaction";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Brands />
      <Card />
      <Payday />
      <Young />
      <DownloadApp />
      <Calltoaction />
      <Footer />
    </div>
  );
}

export default Home;
