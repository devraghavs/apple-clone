import React from "react";
import styles from "./BannerImage.module.css";

export const BannerImage = () => {
  return (
    <section>
      <div className={styles.unit_wrapper}>
        <div className={styles.unit_copy_wrapper}>
          <h2 className={styles.heading}>iPad</h2>
          <h3 className={styles.subhead}>Lovable. Drawable. Magical.</h3>
          <p className="avail">Available starting 10.26</p>
          <div className={styles.link}>
            <a href="#">Learn more &rsaquo;</a>
            <a href="#">Order now &rsaquo;</a>
          </div>
        </div>
        <div className={styles.unit_image_wrapper}>
          <img
            src={"images/hero_ipad.jpg"}
            className={styles.unit_image_ipad_hero_ipad}
            alt="hero_ipad"
          />
        </div>
      </div>

      <div className={`${styles.unit_wrapper} ${styles.theme_dark}`}>
        <div className={styles.unit_copy_wrapper_dark}>
          <h2 className={styles.heading}>iPad Pro</h2>
          <h3 className={styles.subhead}>Supercharged by</h3>
          <p>Available starting 10.26</p>
          <div className={styles.link}>
            <a href="#">Learn more &rsaquo;</a>
            <a href="#">Order now &rsaquo;</a>
          </div>
        </div>
        <div className={styles.unit_image_wrapper_dark}>
          <img
            src={"images/banner-2.jpg"}
            className={styles.unit_image_ipad_hero_ipad_pro}
            alt="banner_2"
          />
        </div>
      </div>

      <div className={styles.unit_wrapper}>
        <div className={styles.unit_copy_wrapper_apple_tv}>
          <h2 className={styles.heading}>Apple TV 4k</h2>
          <h3 className={styles.subhead}>
            The Apple experience. Cinematic in every sense.
          </h3>
          <p className="avail">Available starting 11.4</p>
          <div className={styles.link}>
            <a href="#">Learn more &rsaquo;</a>
            <a href="#">Order now &rsaquo;</a>
          </div>
        </div>
        <div className={styles.unit_image_wrapper_apple_tv}>
          <img
            src={"images/hero_tv4k.jpg"}
            className={styles.unit_image_ipad_apple_tv}
            alt="banner_3"
          />
        </div>
      </div>
    </section>
  );
};
