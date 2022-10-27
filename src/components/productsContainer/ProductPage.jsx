import Product from "../product/Product";
import styles from "./ProductPage.module.css";
const ProductPage = () => {
  return (
    <div className={styles.grid}>
      <Product
      image={'images/promo_iphone14pro.jpg'}
        headline={"iPhone 14 Pro"}
        text={"Pro. Beyond"}
        link1={"Learn more"}
        link2={"Buy"}
        dark='dark'
      />
       <Product
       image={'images/promo_iphone14.jpg'}
        headline={"iPhone 14"}
        text={"Big and bigger"}
        link1={"Learn more"}
        link2={"Buy"}
      />
      <Product
       image={'images/promo_apple_watch.jpg'}
        headline={"Watch Ultra"}
        text={"Adventure awaits."}
        link1={"Learn more"}
        link2={"Buy"}
      />
      <Product
       image={'images/promo_apple_watch_series.jpg'}
        headline={"Watch Series 8"}
        text={"A healthy leap ahead."}
        link1={"Learn more"}
        link2={"Buy"}
        dark={'dark'}
      />
      <Product
       image={'images/promo_airpods_pro.jpg'}
        headline={"AirPods Pro"}
        text={"Rebuilt from the sound up."}
        link1={"Learn more"}
        link2={"Buy"}
        dark={'dark'}
      />
       <Product
       image={'images/tile.jpg'}
        headline={"Card"}
        text={"Get up to 3% Daily Cash back with every purchase."}
        link1={"Learn more"}
        link2={"Apply now"}
      />
    </div>
  );
};

export default ProductPage;
