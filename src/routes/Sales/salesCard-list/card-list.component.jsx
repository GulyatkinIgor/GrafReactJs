import SaleCard from '../salesCard/card.component';
import './card-list.styles.css';

const SaleCardList = ({ dataAparts }) => {

  return(
    <div className='card-list'>
        {dataAparts.map((Category,Id)=>{
          console.log(dataAparts[1].Category._text)
          return(
            <h2>Category: {Category.Category._text}</h2>
            
           
          )

        })}
     
    </div>
    )
};
  

   
export default SaleCardList;
