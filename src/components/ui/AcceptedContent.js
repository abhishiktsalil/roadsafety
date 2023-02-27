import classNames from "classnames";
import classes from "./AllContent.module.css";
import React from "react";
import SampleImage from "../../assets/images/img.png";

const NotMyJurisdiction=()=>{

    return (
        <div className={classNames("tabPanel", classes.tabPanel)}>
      <div className={classNames("table-responsive")}>
        <table className={classNames("table", classes.table)}>
          <thead>
            <tr>
              <th scope="col">Request Id</th>
              <th scope="col">Image</th>
              <th scope="col">Reporting Time</th>
              <th scope="col">Location</th>
              <th scope="col">Vehicle Number</th>
              <th scope="col">Reported By</th>
              <th scope="col">Responded</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr className={classNames("spaceUnder", classes.spaceUnder)}>
              <th scope="row">123</th>
              <td>
                <div className={classes.img_sm}>
                  <img src={SampleImage} alt="" />
                </div>
              </td>
              <td>01 Jan 2023, 11:49 AM</td>
              <td>Dwarka, Delhi</td>
              <td>DL2CBC8982</td>
              <td>
                Ankur <br />
                Mob : 99996787
              </td>
              <td>
                <span className={classNames(classes.accepted_info)}>Accepted</span>
              </td>
              <td>
                <button
                  className={classNames("btn", "btn-view-details", classes.btn, classes.btn_view_details)}
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  View Details
                </button>
              </td>
            </tr>
            <tr className={classNames("spaceUnder", classes.spaceUnder)}>
              <th scope="row">234</th>
              <td>
                <div className={classes.img_sm}>
                  <img src={SampleImage} alt="" />
                </div>
              </td>
              <td>01 Jan 2023, 11:49 AM</td>
              <td>Dwarka, Delhi</td>
              <td>DL2CBC8982</td>
              <td>
                Ankur <br />
                Mob : 99996787
              </td>
              <td>
                <span className={classNames(classes.accepted_info)}>Accepted</span>
              </td>
              <td>
                <button className={classNames("btn", "btn-view-details", classes.btn, classes.btn_view_details)}>View Details</button>
              </td>
            </tr>
            <tr className={classNames("spaceUnder", classes.spaceUnder)}>
              <th scope="row">245</th>
              <td>
                <div className={classes.img_sm}>
                  <img src={SampleImage} alt="" />
                </div>
              </td>
              <td>01 Jan 2023, 11:49 AM</td>
              <td>Dwarka, Delhi</td>
              <td>DL2CBC8982</td>
              <td>
                Ankur <br />
                Mob : 99996787
              </td>
              <td>
                <span className={classNames(classes.accepted_info)}>Accepted</span>
              </td>
              <td>
                <button className={classNames("btn", "btn-view-details", classes.btn, classes.btn_view_details)}>View Details</button>
              </td>
            </tr>
            <tr className={classNames("spaceUnder", classes.spaceUnder)}>
              <th scope="row">256</th>
              <td>
                <div className={classes.img_sm}>
                  <img src={SampleImage} alt="" />
                </div>
              </td>
              <td>01 Jan 2023, 11:49 AM</td>
              <td>Dwarka, Delhi</td>
              <td>DL2CBC8982</td>
              <td>
                Ankur <br />
                Mob : 99996787
              </td>
              <td>
                <span className={classNames(classes.accepted_info)}>Accepted</span>
              </td>
              <td>
                <button className={classNames("btn", "btn-view-details", classes.btn, classes.btn_view_details)}>View Details</button>
              </td>
            </tr>            
          </tbody>
        </table>
      </div>
    </div>

    );
};

export default NotMyJurisdiction;