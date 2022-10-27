import React from "react";
import styles from "./Product.module.css";

const Product = ({ image, headline, text, link1, link2, style, dark,textContainerStyle }) => {
  return (
    <div className={styles.container}>
      <div>
        <img src={image} alt="" />
      </div>
      <div className={`${styles.textContainer} ${styles[dark]} ${textContainerStyle}`}>
        <h1 className={styles.heading}>{headline}</h1>
        <h3 className={styles.subhead}>{text}</h3>
        <div className={styles.link}>
          <a>{link1} &rsaquo;</a>
          <a>{link2} &rsaquo;</a>
        </div>
      </div>
    </div>
  );
};

export default Product;
