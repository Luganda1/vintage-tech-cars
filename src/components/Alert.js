import React from "react";
import {FaWindowClose} from "react-icons/fa";
import {UserContext} from "../context/user"

export default function Alert() {
  const {alert, hideAlert} = React.useContext(UserContext);

  let mystyles = "alert-container"

  if(alert.show){
    mystyles += " alert-show";
    if(alert.type === "danger"){
      mystyles += " alert-danger"
    }
  }


  return (
  <div className={mystyles}>
    <div className="alert">
      <p>{alert.show && alert.msg}</p>
      <button className="alert-close" onClick={hideAlert}>
        <FaWindowClose/>
      </button>
    </div>
  </div>
    )
}
