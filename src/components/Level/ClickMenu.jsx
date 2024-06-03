import Styles from "./ClickMenu.module.css";

function ClickMenu({ position }) {
  return (
    position ?
      <div style={{
        position: "fixed",
        left: `${position.left}px`,
        top: `${position.top}px`
      }} className={Styles.menu}>
        <p>Ha Ha Ha menu be like: IM A MENU</p>
      </div>
      :
      <></>
  );
}

export default ClickMenu;
