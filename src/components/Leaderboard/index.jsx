import { useEffect, useState } from "react";
import Styles from "./index.module.css";
import NavigationBar from "../NavigationBar";
import Footer from "../Footer";

function Leaderboard() {
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3000/api/leaderboard/");
      const json = await res.json();

      setLevels([
        json.filter(e => e.level === 1),
        json.filter(e => e.level === 2),
        json.filter(e => e.level === 3),
      ]);

    })();
  }, []);

  return (
    <>
      <NavigationBar />
      <div className={Styles.levels}>
        {levels.map((level, idx) => (
          <div key={idx} className={Styles.level}>
            <h1>Level: {idx + 1}</h1>
            <div className={Styles.records}>
              {level.map(rec => (
                <div key={rec._id} className={Styles.record}>
                  <p>{rec.name}:</p>
                  <p>{rec.record}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Leaderboard;
