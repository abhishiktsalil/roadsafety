import classNames from "classnames";
import classes from "./AdminContent.module.css";
import React from "react";
import ModalReplaceAdmin from "./ModalReplaceAdmin";

const AdminContent = () => {
  return (<>
    <div className={classNames("tabPanel", classes.tabPanel)}>
      <div className={classNames("table-responsive")}>
        <table className={classNames("table", classes.table)}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Full Name</th>
              <th scope="col">Email Id</th>
              <th scope="col">Phone No.</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr className={classes.spaceUnder}>
              <th scope="row">1</th>
              <td>Ankur goel</td>
              <td>ankur@gmail.com</td>
              <td>9997674261</td>
              <td>
                <button
                  className={classNames("btn", "btn-view-details", classes.btn, classes.btn_view_details)}
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Replace Admin
                </button>
              </td>
            </tr>
            <tr className={classes.spaceUnder}>
              <th scope="row">2</th>
              <td>Ankur goel</td>
              <td>ankur@gmail.com</td>
              <td>9997674261</td>
              <td>
                <button
                  className={classNames("btn", "btn-view-details", classes.btn, classes.btn_view_details)}
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Replace Admin
                </button>
              </td>
            </tr>
            <tr className={classes.spaceUnder}>
              <th scope="row">3</th>
              <td>Ankur goel</td>
              <td>ankur@gmail.com</td>
              <td>9997674261</td>
              <td>
                <button
                  className={classNames("btn", "btn-view-details", classes.btn, classes.btn_view_details)}
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Replace Admin
                </button>
              </td>
            </tr>
            <tr className={classes.spaceUnder}>
              <th scope="row">4</th>
              <td>Ankur goel</td>
              <td>ankur@gmail.com</td>
              <td>9997674261</td>
              <td>
                <button
                  className={classNames("btn", "btn-view-details", classes.btn, classes.btn_view_details)}
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Replace Admin
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <ModalReplaceAdmin />
    </>
  );
};

export default AdminContent;
