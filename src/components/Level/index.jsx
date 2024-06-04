import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "../NavigationBar";
import Styles from "./index.module.css";
import ClickMenu from "./ClickMenu";

function formatTime(seconds, minutes) {
  let formated = "";
  minutes <= 9 ? formated = `0${minutes}` : formated = `${minutes}`;
  seconds <= 9 ? formated = `${formated}:0${seconds}` : formated = `${formated}:${seconds}`;

  return formated;
}

function Level() {
  const { id } = useParams();
  const [img, setImg] = useState("");
  const [time, setTime] = useState("00:00");
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [position, setPosition] = useState();

  useEffect(() => {
    (async () => {
      const img = await import(`../../assets/levels/${id}/original.jpg`);
      setImg(img.default);
    })();
  }, [id]);

  useEffect(() => {
    const timer = setInterval(() => {
      const formated = formatTime(seconds, minutes);
      setTime(formated);

      if (seconds === 59) {
        setSeconds(0);
        setMinutes(prev => prev + 1);
        return;
      }

      setSeconds(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [minutes, seconds, time]);

  function handleClick(e) {
    return setPosition(prev => (
      prev ?
        null
        :
        { top: e.clientY, left: e.clientX }
    ));
  }

  return (
    <>
      <NavigationBar />
      <ClickMenu position={position} />
      <h1 className={Styles.time}>{time}</h1>
      <div className={Styles.container} onClick={handleClick}>
        <img src={img} alt="" className={Styles.img} />
      </div>
    </>
  );
}

export default Level;
