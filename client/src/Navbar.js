import { NavLink } from "react-router-dom";
import { BsFillLightbulbFill} from 'react-icons/bs'
import styles from "./Navbar.module.css";
console.log(styles);

function Navbar() {
  return (
    <div className={styles.navbar}>
      <BsFillLightbulbFill className={styles.lightbulb}/>
      <NavLink styles={styles.navbar} to="/"><h1>LightBulb</h1></NavLink>
      
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
