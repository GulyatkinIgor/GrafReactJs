import React from "react";
import Loading from "../../../Loading";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import "./modal.css"


const ModalItem = (props) => {

const setArrayImages = (data) => {
  var arrObjects = []
  const arrayImage = data.Images.Image
  var isArray = Array.isArray(arrayImage)
  if (isArray === true) {
    const count = arrayImage.length - 1
    for ( var i = 0; i <= count; i++ ) {
      arrObjects[i] = {
        original: arrayImage[i]._attributes.url,
        thumbnail: arrayImage[i]._attributes.url,
    }
    }
  } else if (isArray === false){
    arrObjects[0] = {
      original: arrayImage._attributes.url,
      thumbnail: arrayImage._attributes.url
  }
  }
    return arrObjects  
}
const dataImages = setArrayImages (props.data)

  return props.isLoad ? <Loading/> : (
    <div className={props.active ? "modal active" : "modal"} onClick={()=> props.setActive (false)}>
      <div className={props.active ? "modalContent active" : "modalContent"} onClick={e => e.stopPropagation()}>
        <div className="carousel">
          <ImageGallery 
          items={dataImages}
          defaultImage="https://unsplash.it/400/300/?image=511"
          showBullets={true}
          thumbnailLoading="eager"
          loading="eager"
          showIndex={true}
          showPlayButton={false} 
          showFullscreenButton={true}
          startIndex={0}
          thumbnailPosition="left"/>
          
        </div>
        <div className="description">
          <h1>Описание:</h1>
          <p1>{props.data.Description._text}</p1>
        </div>
      </div>
    </div>
  )
}

export default ModalItem;