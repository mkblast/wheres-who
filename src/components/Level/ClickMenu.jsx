import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Styles from "./ClickMenu.module.css";

function ClickMenu({ position }) {
  const { id } = useParams();
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    (async () => {
      const character1 = import(`../../assets/levels/${id}/characters/1.jpg`);
      const character2 = import(`../../assets/levels/${id}/characters/2.jpg`);
      const character3 = import(`../../assets/levels/${id}/characters/3.jpg`);

      const res = await Promise.all([character1, character2, character3]);

      const characters = res.map(c => ({ ...c, key: crypto.randomUUID() }));

      setCharacter(characters);
    })();
  }, [id]);

  return (
    position ?
      <div style={{
        position: "fixed",
        left: `${position.left}px`,
        top: `${position.top}px`
      }} className={Styles.menu}>
        {characters.map(c => (
          <img src={c.default} alt="" key={c.key} className={Styles.icon} />
        ))}
      </div>
      :
      <></>
  );
}

export default ClickMenu;
