import { useState, useEffect } from 'react';
import classNames from "classnames";
import classes from "./TabPanelPending.module.css";

import Image from "../../assets/images/img.png";
import GoogleMap from "../../assets/images/google-map.png";

const startingMinutes = 1;
let time  = startingMinutes * 60;
var timer;

function TabPanelPending(props) {    
  const [countdownTime, setCountdownTime] = useState("0:00");  

  const updateCountdown = () => {   
    
    const minutes = Math.floor(time/60);
    let seconds  = time % 60;    
    seconds = seconds < 10 ? '0' + seconds : seconds;
    setCountdownTime(minutes + ':' + seconds);
    if (minutes > 0 || seconds > 0  ) {
        time--;        
    }else{
      clearInterval(timer);
    }      
  }  

  useEffect(() => {    
    timer = setInterval(() => { 
      updateCountdown();
    }, 1000);
    return () => {
      clearInterval(timer); 
    }    
}, []);

 

  return (
    <div
      className={classNames("tab-pane", "fade", props.show, props.active)}
      id="nav-home"
      role="tabpanel"
      aria-labelledby="nav-home-tab"
      tabIndex={0}
    >
      {/* Pending Requests */}
      <div className={classes.contentInfo}>
        <div className={"row"}>
          <div className={"col-md-4"}>
            <div className={classes.imgArea}>
              <img src={Image} alt="" />
            </div>
          </div>
          <div className={"col-md-8"}>
            {/* <!-- data info start --> */}
            <div className={"data-info"}>
              <ul className={classes.dataTable}>
                <li>
                  <label>Request Id</label>
                  <span>123</span>
                </li>
                <li>
                  <label>Reporting Time</label>
                  <span>01 Jan 2013, 11:49 AM</span>
                </li>
                <li>
                  <label>Location</label>
                  <span>
                    Dwarka, Delhi{" "}
                    <i className={classes.googleLnk}>
                      <img src={GoogleMap} alt="" />
                    </i>
                  </span>
                </li>
                <li>
                  <label>Vehicle Number</label>
                  <span>DL2CBC8982</span>
                </li>
                <li>
                  <label>Number Of Person</label>
                  <span>3</span>
                </li>
                <li>
                  <label>Reported By</label>
                  <span>
                    Ankur
                    <br />
                    Mob:999999999
                  </span>
                </li>
                <li>
                  <label>Need Ambulance</label>
                  <span>Yes</span>
                </li>
                <li>
                  <label>Description </label>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Maiores nobis iure ipsa ea, natus placeat inventore
                    distinctio alias repudiandae quam ratione laboriosam commodi
                    necessitatibus provident cum! Possimus obcaecati quos
                    corrupti?
                  </span>
                </li>
              </ul>
            </div>
            {/* <!-- data info end --> */}
            {/* <!-- Attend the Request Start --> */}
            <div className={classes.attendRequest}>
              <div className={classes.attendTimerWrap}>
                <div className={classes.attendTimer}>
                  <div className={classes.attendWatch}>
                    <div id="countdown">{countdownTime}</div>
                  </div>
                  <div className={classes.attendLabel}>MINUTES</div>
                </div>
              </div>
              <div className={classes.headingAttend}>Attend the Request?</div>
              <div className={classes.btns}>
                <button className={classNames("btn", classes.btn, classes.btnYello)}>Accept</button>
                <button className={classNames("btn", classes.btn, classes.btnReject)}>Reject</button>
              </div>
              <div className={classes.attendInfo}>
                <textarea
                  name=""
                  id=""
                  cols="20"
                  rows="5"
                  placeholder="Share Your Comment"
                  className={"form-control"}
                ></textarea>
              </div>
            </div>
            {/* <!-- Attend the Request End --> */}
          </div>
          <ul className={classes.btnsMain}>
            <li>
              <button className={classNames("btn", classes.btn,classes.btnPre)}>Previous</button>
            </li>
            <li>
              <button className={classNames("btn", classes.btn,classes.btnYello)}>Next</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TabPanelPending;
