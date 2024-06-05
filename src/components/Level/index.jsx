import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "../NavigationBar";
import Styles from "./index.module.css";
import ClickMenu from "./ClickMenu";
import { formatTime } from "../../utiles";
import InputMenu from "./InputMenu";
import MissToast from "./MissToast";
import Footer from "../Footer";

function Level() {
  const { id } = useParams();
  const [img, setImg] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [position, setPosition] = useState();
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [missed, setMissed] = useState(false);
  const [win, setWin] = useState(false);

  useEffect(() => {
    (async () => {
      const img = await import(`../../assets/levels/${id}/original.jpg`);
      setImg(img.default);
    })();
  }, [id]);

  useEffect(() => {
    if (win) {
      return;
    }

    const timer = setInterval(() => {
      return setSeconds(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [win]);

  function handleClick(e) {
    return setPosition(prev => (
      prev ?
        null
        :
        { top: e.clientY, left: e.clientX }
    ));
  }

  function calculatePosition(e) {
    const rect = e.target.getBoundingClientRect();

    const originalWidth = e.target.naturalWidth;
    const originalHeight = e.target.naturalHeight;

    const currentWidth = rect.width;
    const currentHeight = rect.height;

    const scaleX = currentWidth / originalWidth;
    const scaleY = currentHeight / originalHeight;

    const x = Math.floor((e.clientX - rect.left) / scaleX);
    const y = Math.floor((e.clientY - rect.top) / scaleY);

    setX(x);
    setY(y);
  }

  return (
    <>
      <NavigationBar />
      <ClickMenu
        position={position}
        setPosition={setPosition}
        x={x}
        y={y}
        setMissed={setMissed}
        setWin={setWin} />
      <h1 className={Styles.time}>{formatTime(seconds)}</h1>
      <div className={Styles.container} >
        <img src={img}
          alt=""
          className={Styles.img}
          onClick={(e) => {
            handleClick(e);
            calculatePosition(e);
          }}
        />
      </div>
      <MissToast missed={missed} setMissed={setMissed} />
      <InputMenu win={win} seconds={seconds} />
      <Footer />
    </>
  );
}

export default Level;
