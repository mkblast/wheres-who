import { useEffect } from "react";
import Styles from "./MissToast.module.css";

function MissToast({ missed, setMissed }) {
  useEffect(() => {
    const timeOut = setTimeout(() => setMissed(false), 5000);

    return () => clearTimeout(timeOut);
  }, [missed, setMissed]);

  return (
    missed ?
      <div className={Styles.toast} >
        <h3>You Missed</h3>
      </div >
      :
      <></>
  );
}

export default MissToast;
