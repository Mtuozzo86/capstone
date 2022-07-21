import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
console.log(styles);

function Navbar() {
  return (
    <div className={styles.navbar}>
      <h1>LightBulb</h1>
      <div className={styles['navbar-links']}>
        {" "}
        <NavLink to="/login">
          <p>Log In</p>
        </NavLink>
        <NavLink to="/create">
          <p>Create Acct</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
