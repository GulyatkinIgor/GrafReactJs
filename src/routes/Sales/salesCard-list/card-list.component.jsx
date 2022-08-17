import Item from '../../Item/item.component';
import './card-list.styles.css'
import Modal from 'react-bootstrap/Modal';
import ModalItem from '../component/modal.component';
import { useState } from 'react';

const SaleCardList = (currentItem) => {
  const [modalActive, setModalActive] = useState(false)
  
  const dataAparts = currentItem.dataAparts

  const click = (item) => {
    console.log("PIZZZZZZZZZDA", item)
    currentItem.onItem(item)
  }

  return(
    <div>
    <div className='card-list'>
        {dataAparts.map((item)=>{
          return(
            <button onClick={ () => click(item)}>
            <div>
        <a class="block relative h-48 rounded overflow-hidden">
          
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{item.Locality._text}</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">{item.Title._text}</h2>
          <p class="mt-1">{item.Price._text}</p>
        </div>
      </div>
        </button>            
  
  )
  
})}
     
      
    </div>
</div>
    )
};
  

   
export default SaleCardList;

