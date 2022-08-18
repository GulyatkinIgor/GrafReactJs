import React from "react";
import Loading from "../../../Loading";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import "./modal.css"


const ModalItem = (props) => {
console.log("ITEM DATA", props.data)

const setArrayImages = (data) => {
  var arrObjects = []
  const arrayImage = data.Images.Image
  var isArray = Array.isArray(arrayImage)
  if (isArray === true) {
    const count = arrayImage.length - 1
    for ( var i = 0; i <= count; i++ ) {
      arrObjects[i] = {
        original: arrayImage[i]._attributes.url,
    }
    console.log(arrObjects)
    }
  } else if (isArray === false){
    arrObjects[0] = {
      original: arrayImage._attributes.url,
  }
  console.log(arrObjects)
  }
    return arrObjects  
}
const dataImages = setArrayImages (props.data)
console.log(dataImages)

  return props.isLoad ? <Loading/> : (
    <div className={props.active ? "modal active" : "modal"} onClick={()=> props.setActive (false)}>
      <div className={props.active ? "modalContent active" : "modalContent"} onClick={e => e.stopPropagation()}>
        <li className="carousel">
          <ImageGallery 
          items={dataImages}
          defaultImage="https://unsplash.it/400/300/?image=511"
          showBullets={true}
          showIndex={true}
          showPlayButton={false} 
          showFullscreenButton={false}
          startIndex={0}/>
        </li>
        <h1>{props.data.Description._text}</h1>
      </div>
    </div>
  )
}

export default ModalItem;