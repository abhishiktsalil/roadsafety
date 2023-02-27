import classNames from "classnames";
import classes from "./TopHeader.module.css";
import { Link } from "react-router-dom";
import { useState } from 'react';

function TopHeader() {

  const [language, setLanguage] = useState("English");

  function ChangeLanguage(event) {
    setLanguage(event.target.value);
    console.log(language);
  }

  return (
    <div>
      <div className={classes.header}>
        {/*Top-Banner*/}
        <div className={classes.topBanner}>
          <h2>
            Hospital Admin <span>50 Total Cases</span>
          </h2>
          <div className={classes.addArea}>
            <div className={classes.headingArea}>Indira Gandhi Hospital</div>
            <p>Address: Dwaraka Sector 9, Dwarka, New Delhi, Delhi 110077.</p>
          </div>
        </div>
        {/*User-Panel*/}
        <div className={classes.userPanel}>
          <div className={classes.userInfo}>
            <div className={classes.userBase}>
              <div className={classes.userEmail}>hospital@gmail.com</div>
              <p>Super Admin</p>
            </div>
          </div>
          <div className={classes.language}>
            <select name="Language" title="Language" onChange={ChangeLanguage} id="language">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
          <div className={classNames(classes.adminLogin, classes.logout)}>
            <Link to="/login">logout</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
