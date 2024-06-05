import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Styles from "./InputMenu.module.css";
import PropTypes from 'prop-types';

function InputMenu({ win, seconds }) {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [inputErr, setInputErr] = useState([]);
  const navigate = useNavigate();

  function handleChange(e) {
    setName(e.target.value);
  }

  async function handleSubmit() {
    const res = await fetch(`https://wheres-who.glitch.me/api/leaderboard/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        record: seconds,
      })
    });

    const json = await res.json();

    if (!res.ok) {
      setInputErr(json.errors);
      return;
    }

    navigate("/leaderboard");
    setName(name);
  }

  return (
    <div className={Styles.menu} style={{
      visibility: win ? "visible" : "hidden",
      opacity: win ? 1 : 0,
    }}>
      <h1 className={Styles.win}>You Win</h1>
      <div className={Styles.inputs}>
        <input type="text" required value={name} onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {
        inputErr ?
          inputErr.map(err => (
            <div key={err.path} className={Styles.error}>
              <p>{err.msg}</p>
            </div>
          ))
          :
          <></>
      }
    </div>
  );
}

InputMenu.propTypes = {
  win: PropTypes.bool,
  seconds: PropTypes.number,
};

export default InputMenu;
