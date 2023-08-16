import { LogoIcon } from "components/Icons";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <figure>
        <LogoIcon width="2.5em" height="2.5em" />
        <figcaption>
          <span>Kacper Ziuzia -</span> Rewards program
        </figcaption>
      </figure>
    </header>
  );
};

export default Header;
