import Styles from "./index.module.css";
import githubIcon from "../../assets/github-mark-white.svg";

function Footer() {
  return (
    <a href="https://github.com/mkblast" className={Styles.container}>
      <img src={githubIcon} alt="" />
      <p>by: MKBlast</p>
    </a>
  );
}

export default Footer;
