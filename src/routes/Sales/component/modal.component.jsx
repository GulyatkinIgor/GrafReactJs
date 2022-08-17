import React, { Component, useState } from "react";
import Loading from "../../../Loading";
import "./modal.css"

const ModalItem = (props) => {
console.log("ITEM DATA", props.data)
  return props.isLoad ? <Loading/> : (
    <div className={props.active ? "modal active" : "modal"} onClick={()=> props.setActive (false)}>
      <div className={props.active ? "modalContent active" : "modalContent"} onClick={e => e.stopPropagation()}>
        <h1>{props.data.Description._text}</h1>
      </div>
    </div>
  )
}

export default ModalItem;