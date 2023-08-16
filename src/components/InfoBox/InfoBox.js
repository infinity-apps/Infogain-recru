import PropTypes from "prop-types";

import Exclamation from "components/Icons/Exclamation";

import styles from "./InfoBox.module.scss";

const InfoBox = ({ type = "info", message }) => {
  return (
    <div className={`${styles.container} ${styles[type]}`}>
      <span className={styles.icon}>
        <Exclamation />
      </span>
      <span>{message}</span>
    </div>
  );
};

InfoBox.propTypes = {
  type: PropTypes.oneOf(["info", "error"]),
  message: PropTypes.string.isRequired,
};

export default InfoBox;
