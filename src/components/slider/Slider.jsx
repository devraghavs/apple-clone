import SimpleImageSlider from "react-simple-image-slider";
import styles from "./Slider.module.css";

const Slider = () => {
  const images = [
    "images/slider-1.jpg",
    "images/slider-2.jpg",
    "images/slider-3.jpg",
    "images/slider-4.jpg",
    "images/slider-5.jpg",
  ];
  return (
    <div className={styles.slider}>
      <SimpleImageSlider
        width={"80%"}
        height={400}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        navStyle={2}
     />
    </div>
  );
};

export default Slider;
