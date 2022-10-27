import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.content}>
        <ul>
          <li>
            To access and use all the features of Apple Card, you must add Apple
            Card to Wallet on an iPhone or iPad with the latest version of iOS
            or iPadOS. Update to the latest version by going to Settings General
            Software Update. Tap Download and Install.
          </li>
          <li>Available for qualifying applicants in the United States.</li>
          <li>
            Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City
            Branch
          </li>
          <li>
            Learn more about how Apple Card applications are evaluated at
            <a
              className={styles.link}
              href="https://support.apple.com/kb/HT209218"
            >
              support.apple.com/kb/HT209218
            </a>
          </li>
        </ul>
      </section>

      <section className={styles.navContainer}>
        <div className={styles.list}>
          <label className={styles.footerTitle}>Shop and Learn</label>
          <input className={styles.checkStyle} type={'checkbox'}/>
          <ul>
            <li>
              <a href="">Store</a>
            </li>
            <li>
              <a href="">Mac</a>
            </li>
            <li>
              <a href="">iPad</a>
            </li>
            <li>
              <a href="">iPhone</a>
            </li>
            <li>
              <a href="">Watch</a>
            </li>
            <li>
              <a href="">Pods</a>
            </li>
            <li>
              <a href="">TV &amp; Home</a>
            </li>
            <li>
              <a href="">AirTag</a>
            </li>
            <li>
              <a href="">Accessories</a>
            </li>
            <li>
              <a href="">Gift Cards</a>
            </li>
          </ul>
        </div>
        <div>
        <div className={styles.list}>
          <label className={styles.footerTitle}>Services</label>
          <input className={styles.checkStyle} type={'checkbox'}/>
          <ul>
            <li>
              <a href="">Apple&nbsp;Music</a>
            </li>
            <li>
              <a href="">Apple&nbsp;TV+</a>
            </li>
            <li>
              <a href="">Apple&nbsp;Fitness+</a>
            </li>
            <li>
              <a href="">Apple&nbsp;News+</a>
            </li>
            <li>
              <a href="">Apple&nbsp;Arcade</a>
            </li>
            <li>
              <a href="">iCloud</a>
            </li>
            <li>
              <a href="">Apple&nbsp;One</a>
            </li>
            <li>
              <a href="">Apple&nbsp;Card</a>
            </li>
            <li>
              <a href="">Apple&nbsp;Books</a>
            </li>
            <li>
              <a href="">Apple Podcasts</a>
            </li>
            <li>
              <a href="">App&nbsp;Store</a>
            </li>
          </ul>
          </div>
          <div className={styles.list}>
            <label className={styles.footerTitle} htmlFor="">Account</label>
            <input  className={styles.checkStyle} type={'checkbox'}/>
            <ul>
              <li>
                <a href="">Manage Your Apple&nbsp;ID</a>
              </li>
              <li>
                <a href="">Apple Store Account</a>
              </li>
              <li>
                <a href="">iCloud.com</a>
              </li>
            </ul>
          
        </div>
        </div>
        <div className={styles.list}>
          <label className={styles.footerTitle} htmlFor="">Apple Store</label>
          <input className={styles.checkStyle} type={'checkbox'}/>
          <ul>
            <li>
              <a href="">Find a Store</a>
            </li>
            <li>
              <a href="">Genius Bar</a>
            </li>
            <li>
              <a href="">Today at Apple</a>
            </li>
            <li>
              <a href="">Apple Camp</a>
            </li>
            <li>
              <a href="">Apple Store App</a>
            </li>
            <li>
              <a href="">Refurbished and Clearance</a>
            </li>
            <li>
              <a href="">Financing</a>
            </li>
            <li>
              <a href="">Apple&nbsp;Trade&nbsp;In</a>
            </li>
            <li>
              <a href="">Order Status</a>
            </li>
            <li>
              <a href="">Shopping Help</a>
            </li>
          </ul>
        </div>
        <div>
          <div className={styles.list}>
            <label className={styles.footerTitle} htmlFor="">For Business</label>
            <input className={styles.checkStyle} type={'checkbox'}/>
            <ul>
              <li>
                <a href="">Apple and Business</a>
              </li>
              <li>
                <a href="">Shop for Business</a>
              </li>
            </ul>
          </div>
          <div className={styles.list}>
            <label className={styles.footerTitle} htmlFor="">For Education</label>
            <input className={styles.checkStyle} type={'checkbox'}/>
            <ul>
              <li>
                <a href="">Apple and Education</a>
              </li>
              <li>
                <a href=""> Shop for K-12</a>
              </li>
              <li>
                <a href="">Shop for College</a>
              </li>
            </ul>
          </div>
          <div className={styles.list}>
            <label className={styles.footerTitle} htmlFor="">For Healthcare</label>
            <input className={styles.checkStyle} type={'checkbox'}/>
            <ul>
              <li>
                <a href="">Apple and Education</a>
              </li>
              <li>
                Shop for K-12
                <a href=""></a>
              </li>
              <li>
                <a href="">Shop for College</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
        <div className={styles.list}>
            <label className={styles.footerTitle} htmlFor="">Apple Values</label>
            <input className={styles.checkStyle} type={'checkbox'}/>
            <ul>
              <li>
                <a href="">Accessibility</a>
              </li>
              <li>
                <a href="">Education</a>
              </li>
              <li>
                <a href="">Environment</a>
              </li>
              <li>
                <a href="">Inclusion and Diversity</a>
              </li>
              <li>
                <a href="">Privacy</a>
              </li>
              <li>
                <a href="">Racial Equity and Justice</a>
              </li>
              <li>
                <a href="">Supplier Responsibility</a>
              </li>
            </ul>
          </div>

       
        <div className={styles.list}>
          <label className={styles.footerTitle}>About Apple</label>
          <input className={styles.checkStyle} type={'checkbox'}/>
          <ul>
            <li>
              <a href="">Newsroom</a>
            </li>
            <li>
              <a href="">Apple&nbsp;Leadership</a>
            </li>
            <li>
              <a href="">Career Opportunities</a>
            </li>
            <li>
              <a href="">Investors</a>
            </li>
            <li>
              <a href="">Ethics & Compliance</a>
            </li>
            <li>
              <a href="">Events</a>
            </li>
            <li>
              <a href="">Contact Apple</a>
            </li>
          </ul>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.shop}>
          More ways to shop: <a href=""> Find an Apple Store</a> or{" "}
          <a href="https://locate.apple.com/">other retailer</a> near you.{" "}
          <span className="nowrap">Or call 1-800-MY-APPLE.</span>
        </div>
        <div className={styles.country}>
          <a
            className=""
            href=""
            title="Choose your country or region"
            aria-label="United States. Choose your country or region"
          >
            United States
          </a>
        </div>
        <div className={styles.flex}>
          <div className={styles.copyright}>
            Copyright © 2022 Apple Inc. All rights reserved.
          </div>
          <div className={styles.copyright}>
            <a href="">Privacy Policy</a>
            <a href="">Terms of Use</a>
            <a href="">Sales and Refunds</a>
            <a href="">Legal</a>
            <a href="">Site Map</a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
