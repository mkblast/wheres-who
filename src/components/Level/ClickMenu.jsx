import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Styles from "./ClickMenu.module.css";
import PropTypes from 'prop-types';

function ClickMenu({ position, setPosition, x, y, setWin }) {
  const { id } = useParams();
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    (async () => {
      const character1 = import(`../../assets/levels/${id}/characters/1.jpg`);
      const character2 = import(`../../assets/levels/${id}/characters/2.jpg`);
      const character3 = import(`../../assets/levels/${id}/characters/3.jpg`);

      const res = await Promise.all([character1, character2, character3]);

      let key = 0;

      const characters = res.map(c => {
        const newChar = { ...c, key };
        key += 1;
        return newChar;
      });

      setCharacter(characters);
    })();
  }, [id]);

  async function handleClick(character) {
    const res = await fetch(`https://wheres-who.glitch.me/api/levels/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        character,
        x,
        y,
      })
    });

    const json = await res.json();

    if (!res.ok) {
      console.log(json);
      return;
    }

    setCharacter(prev => {
      const newChar = prev.filter(e => e.key !== character);

      if (newChar.length === 0) {
        setWin(true);
      }

      return newChar;
    });
    setPosition(null);
    return;
  }

  return (
    position ?
      <div
        style={{
          position: "fixed",
          left: `${position.left}px`,
          top: `${position.top}px`
        }}
        className={Styles.menu}
      >
        {characters.map(c => (
          <img src={c.default}
            alt="" key={c.key}
            className={Styles.icon}
            onClick={() => handleClick(c.key)}
          />
        ))}
      </div>
      :
      <></>
  );
}

ClickMenu.propTypes = {
  position: PropTypes.object,
  setPosition: PropTypes.func,
  x: PropTypes.number,
  y: PropTypes.number,
  setWin: PropTypes.func,
};

export default ClickMenu;
