import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import Logo from "../../assets/images/logo.png";
import SvgDashboard from "../../assets/icons/Dashboard.tsx";
import SvgAdminManagement from "../../assets/icons/Admin.tsx";
import SvgPastRequest from "../../assets/icons/Past.tsx";
import SvgPendingRequest from "../../assets/icons/Pending.tsx";
import SvgUser from "../../assets/icons/User.tsx";
import classNames from "classnames";

function Navbar(props) {
  return (
    <header className={classes.sidebar}>
      <div>
        <NavLink to="/" className={classes.logo}>
          <img src={Logo} className={classes.filterYellow} alt="logo" />
        </NavLink>
      </div>
      <nav>
        <ul className={classes.sidemenu}>
          <li>
            <NavLink to="/dashboard" className={classNames("active", classes.filterYellow)}>             
              <SvgDashboard height="100" width="100" />              
              {/* <SvgDashboard height="10" width="10" />               */}
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/PendingRequest" className={classes.filterYellow}>
              <SvgPendingRequest />
              Pending Requests
            </NavLink>
          </li>
          <li>
            <NavLink to="/PastRequest" className={classes.filterYellow}>
              <SvgPastRequest />
              Past Requests
            </NavLink>
          </li>
          <li>
            <NavLink to="/AdminManagement" className={classes.filterYellow}>
              <SvgAdminManagement width={150}/>
              Admin Management
            </NavLink>
          </li>          
          <li>
            <NavLink to="/Login" className={classes.filterYellow}>
            <SvgUser />
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
