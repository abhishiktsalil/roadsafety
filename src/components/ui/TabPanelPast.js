import { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import classes from "./TabPanelPast.module.css";
import TabNavButton from "./TabNavButton";
import TabContent from "./TabContent";
import ModalRequestDetails from "./ModalRequestDetails";
import "bootstrap";

function TabPanelPast(props) {
  const [activeTab, setActiveTab] = useState("All");
  const [sortBy, setSortBy] = useState("Today");

  return (
    <div
      className={classNames("tab-pane", "fade", props.show, props.active)}
      id="nav-profile"
      role="tabpanel"
      aria-labelledby="nav-profile-tab"
      tabIndex={0}
    >
      {/* content info start */}
      <div className="row">
        <div className="col-md-6">
          <div className={classes.buttonContainer}>
            <TabNavButton
              id="All"
              title="All"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabNavButton
              id="Accepted"
              title="Accepted"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabNavButton
              id="Rejected"
              title="Rejected"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabNavButton
              id="NotMyJurisdiction"
              title="Not My Jurisdiction"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className={classes.filterSec}>
            <div className={classes.searchWrap}>
              <input
                type="text"
                className={classNames("form-control", classes.formControl)}
                placeholder="Search"
              />
            </div>
            <div className={"sortbyopt"}>
              <div className={"dropdown"}>
                <button
                  className={classNames(
                    "btn",
                    "dropdown-toggle",
                    classes.btn,
                    classes.dropdownBtn
                  )}
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort by
                </button>
                <ul
                  className={classNames("dropdown-menu", classes.dropdown_menu)}
                  aria-labelledby="dropdownMenuButton"
                >
                  <li
                    className={
                      sortBy === "Recent"
                        ? classNames("activeFilter", classes.activeFilter)
                        : ""
                    }
                  >
                    <Link
                      to="#"
                      onClick={() => {setSortBy("Recent");}}
                      className={classNames(
                        "dropdown-item",
                        classes.dropdown_item
                      )}
                    >
                      Recently Added
                    </Link>
                  </li>
                  <li
                    className={
                      sortBy === "Today"
                        ? classNames("activeFilter", classes.activeFilter)
                        : ""
                    }
                  >
                    <Link
                      to="#"
                      onClick={() => {setSortBy("Today");}}
                      className={classNames(
                        "dropdown-item",
                        classes.dropdown_item
                      )}
                    >
                      Today
                    </Link>
                  </li>
                  <li
                    className={
                      sortBy === "LastWeek"
                        ? classNames("activeFilter", classes.activeFilter)
                        : ""
                    }
                  >
                    <Link
                      to="#"
                      onClick={() => {setSortBy("LastWeek");}}
                      className={classNames(
                        "dropdown-item",
                        classes.dropdown_item
                      )}
                    >
                      Last Week
                    </Link>
                  </li>
                  <li
                    className={
                      sortBy === "Last30Days"
                        ? classNames("activeFilter", classes.activeFilter)
                        : ""
                    }
                  >
                    <Link
                      to="#"
                      onClick={() => {setSortBy("Last30Days");}}
                      className={classNames(
                        "dropdown-item",
                        classes.dropdown_item
                      )}
                    >
                      Last 30 Days
                    </Link>
                  </li>
                  <li
                    className={
                      sortBy === "CustomDate"
                        ? classNames("activeFilter", classes.activeFilter)
                        : ""
                    }
                  >
                    <button className={classes.custom_date} onClick={() => {setSortBy("CustomDate");}}>
                      + Custom Date
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classNames("sub_content_info", classes.sub_content_info)}>
        <div className={classNames("tabContainer", classes.tabContainer)}>
          <TabContent activeTab={activeTab} />
        </div>
      </div>
      <ModalRequestDetails />      
    </div>
  );
}

export default TabPanelPast;
