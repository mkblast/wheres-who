import { Link } from "react-router-dom";
import Styles from "./index.module.css";

function NavigationBar() {
  return (
    <>
      <nav className={Styles.nav}>
        <Link to={"/"} className={Styles.titleLink}> <h1 className={Styles.title}>Where&apos;s Who?</h1> </Link>
        <div className={Styles.options}>
          <Link to={"/"} className={Styles.link}> <span className={Styles.option}>Play</span> </Link>
          <Link to={"/leaderboard"} className={Styles.link}> <span className={Styles.option}>LeaderBoard</span> </Link>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;
