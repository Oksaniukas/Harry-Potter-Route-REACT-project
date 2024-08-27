import styles from "./styles.module.css";
import burgerBtn from "../../assets/burger-btn.svg";
import { useState } from "react";



const Header = ({ links }) => {
  const [isShowOverlay, setShowOverley] = useState(false);

  
  return (
    <>
      <header className={styles.main}>
        <div>FEUA-15</div>

        <nav>
          <ul>
            {links.map((link, id) => (
              <li  key={id}>
                <a href={link.link}>{link.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={() => {
            setShowOverley(!isShowOverlay);
          }}
        >
          <img src={burgerBtn.src} alt="menu button" />
        </button>
      </header>
      <div
        className={`${styles.overlay} ${isShowOverlay && styles.showOverlay}`}
      >
        <nav>
          <ul>
            {links.map((link, id) => (
              <li  key={id}>
                <a href={link.link}>{link.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
