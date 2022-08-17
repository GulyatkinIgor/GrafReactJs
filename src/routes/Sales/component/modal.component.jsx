import React, { Component, useState } from "react";
import Loading from "../../../Loading";
import ImageGallery from 'react-image-gallery';
import "./modal.css"

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

const ModalItem = (props) => {
console.log("ITEM DATA", props.data)
  return props.isLoad ? <Loading/> : (
    <div className={props.active ? "modal active" : "modal"} onClick={()=> props.setActive (false)}>
      <div className={props.active ? "modalContent active" : "modalContent"} onClick={e => e.stopPropagation()}>
        <ImageGallery items={images} />
        <h1>{props.data.Description._text}</h1>
      </div>
    </div>
  )
}

export default ModalItem;