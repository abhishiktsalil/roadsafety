import classes from "./Dashboard.module.css";
import classNames from "classnames";
import AdminContent from "../components/ui/AdminContent";


function AdminManagement() {
  return (
    <div className={classes.main}>
      <div className={classes.headingWrap}>
        <div className={classes.headingTxt}>Admin Management</div>
        <button className={classNames("btnExport",classes.btnExport)}>Export</button>
      </div>
      <div className={classNames("sub_content_info", classes.sub_content_info)}>
        <div className={classNames("tabContainer", classes.tabContainer)}>
        <AdminContent />
        </div>
      </div>      
    </div>
  );
}

export default AdminManagement;
