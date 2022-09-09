import styles from "./style.js";
import "./index.css";
import { view } from "./assets/index";

import {
  Navbar,
  Hero,
  Services,
  Stats,
  Destinations,
  Packages,
  Booking,
  CTA,
  Footer,
} from "./components";

const App = () => {
  return (
    <div className="bg-black">
      <div className={`${styles.flexCenter}`}>
        <div
          style={{ backgroundImage: `url(${view})` }}
          className={` text-white ${styles.boxWidth}`}
        >
          {/* <img className="absolute" src={view} alt="view" /> */}
          {/* Homepage */}
          {/* <Homepage /> */}
          <Navbar />
          <Hero />
        </div>
      </div>

      <div className={` ${styles.flexCenter}`}>
        <div className={` text-white ${styles.boxWidth}`}>
          <Services />
          <Stats />
          <Destinations />
          <Packages />
          <Booking />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
