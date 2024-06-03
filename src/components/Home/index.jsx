import image1 from "./../../assets/1-small.jpg";
import image2 from "./../../assets/2-small.jpg";
import image3 from "./../../assets/3-small.jpg";
import Styles from "./index.module.css";
import { Link } from "react-router-dom";
import NavigationBar from "../NavigationBar";

function Home() {
  return (
    <>
      <NavigationBar />
      <div className={Styles.div}>
        <div>
          <Link to={"/levels/1"}>
            <img className={Styles.img} src={image1} alt="Level 1" />
          </Link>
          <h2>LeveL 1</h2>
        </div>
        <div>
          <Link to={"/levels/2"}>
            <img className={Styles.img} src={image2} alt="Level 2" />
          </Link>
          <h2>LeveL 2</h2>
        </div>
        <div>
          <Link to={"/levels/3"}>
            <img className={Styles.img} src={image3} alt="Level 3" />
          </Link>
          <h2>LeveL 3</h2>
        </div>
      </div>
    </>
  );
}

export default Home;
