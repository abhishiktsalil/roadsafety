import classNames from "classnames";
import classes from "./ModalRequestDetails.module.css";
import SampleImage from "../../assets/images/img.png"

const ModalRequestDetails = () => {
    return (        
        <div className={classNames("modal", classes.modal)} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className={classNames("modal-dialog")}>
            <div className={classNames("modal-content")}>
              <div className={classNames("modal-header")} >
                <h5 className={classNames("modal-title")} id="exampleModalLabel" >Details</h5>
                <button type="button" className={classNames("btn-close")} data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className={classNames("modal-body")}>
                  <div className={classNames("data-info")}>
                      <div className={classNames("img-pop",classes.img_pop)}><img src={SampleImage} alt="" /></div>
                      <ul className={classNames("data-table", classes.data_table)}>
                          <li><label htmlFor="">Request Id</label><span>123</span></li>
                          <li><label htmlFor="">Reporting Time</label><span>01 Jan 2013, 11:49 AM</span></li>
                          <li><label htmlFor="">Location</label><span>Dwarka, Delhi</span></li>
                          <li><label htmlFor="">Vehicle Number</label><span>DL2CBC8982</span></li>
                          <li><label htmlFor="">Number Of Person</label><span>3</span></li>
                          <li><label htmlFor="">Reported By</label><span>Ankur<br/>Mob:999999999</span></li>
                          <li><label htmlFor="">Need Ambulance</label><span>Yes</span></li>
                          <li><label htmlFor="">Description </label><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores nobis iure ipsa ea, natus placeat inventore distinctio alias repudiandae quam ratione laboriosam commodi necessitatibus provident cum! Possimus obcaecati quos corrupti?</span></li>
                      </ul>
                  </div>
              </div>
              <div className={classNames("modal-footer")} hidden>
                <button type="button" className={classNames("btn", "btn-secondary")} data-bs-dismiss="modal">Close</button>
                <button type="button" className={classNames("btn", "btn-primary")}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
    );
}

export default ModalRequestDetails;