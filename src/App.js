import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./components/css_variables.css";
import Slider from "./components/slider/Slider";
import ProductPage from "./components/productsContainer/ProductPage";
import { BannerImage } from "./components/banner/BannerImage";
function App() {
  return (
    <div>
      <Header />
      <BannerImage />
      <ProductPage />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
