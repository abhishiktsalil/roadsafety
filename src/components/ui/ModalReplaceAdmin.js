import classNames from "classnames";

const ModalReplaceAdmin = () => {
  return (
    <div
      className={classNames("modal")}
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-sm">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Request For New Admin
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className={classNames("modal-body", "admin-form")}>
            <form action="">
              <div className={classNames("form-group")}>
                <label for="exampleFormControlInput1">Full Name</label>
                <input type="email" className="form-control" id="" />
              </div>
              <div className={classNames("form-group")}>
                <label for="exampleFormControlInput1">Email ID</label>
                <input type="email" className="form-control" id="" />
              </div>
              <div className={classNames("form-group")}>
                <label for="exampleFormControlInput1">Phone No</label>
                <input type="email" className="form-control" id="" />
              </div>
            </form>
          </div>
          <div className={classNames("modal-footer")}>
            <button type="button" className={ classNames("btn", "submit-btn")}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalReplaceAdmin;
