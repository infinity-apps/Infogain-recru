import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.scss";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className={styles["main-navigation"]}>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "nav-is-active" : "")}
            to="/"
          >
            Home / transactions
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "nav-is-active" : "")}
            to="/transactions"
          >
            Raw transactions
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
