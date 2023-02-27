//import classNames from "classnames";
// import { useNavigate, Outlet } from "react-router-dom";
import classNames from "classnames";
import { useState } from "react";
import TabPanelPast from "../components/ui/TabPanelPast";
import TabPanelPending from "../components/ui/TabPanelPending";
import classes from "./Dashboard.module.css";

function Dashboard(props) {

  let defaultTab = props.tab==="Past" ? false : true; 
  //alert(defaultTab);
  const [tabSelected, setTabSelected] = useState(defaultTab);

  function tabClickHandler(e) {
   // console.log(e.target.getAttribute("id"));
    setTabSelected(false);
  }
  console.log(tabSelected);

  return (
    <div className={classes.main}>
      <nav>
        <div className={"nav nav-tabs"} id="nav-tab" role="tablist">
          <button type="button" className={classes.btnExport}>
            Export
          </button>
          <button
            className={classNames(
              "nav-link",
              tabSelected ? "active" : "",
              tabSelected ? classes.activeTab : ""
            )}
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected={tabSelected ? "true" : "false"}
            onClick={(event) => {              
              setTabSelected(true);
              //navigate("/PendingRequest")
            }}
          >
            Pending Request (3)
          </button>
          <button
            className={classNames(
              "nav-link",
              tabSelected ? "" : "active",
              tabSelected ? "" : classes.activeTab
            )}
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected={tabSelected ? "false" : "true"}
            onClick={tabClickHandler}
          >
            Past Request (8)
          </button>
        </div>
      </nav>
      <div className={"tab-content"} id={"nav-tabContent"}>
        {tabSelected ? (          
          <TabPanelPending show="show" active="active" />
        ) : (
          <TabPanelPast show="show" active="active" />
        )}
        {/* <Outlet /> */}
      </div>
    </div>
  );
}

export default Dashboard;
