import SaleCard from '../salesCard/card.component';
import './card-list.styles.css';

const SaleCardList = ({ dataAparts }) => {
  const {Category,Id} = dataAparts;

  return(
    <div className='card-list'>
        {dataAparts.map((Category,Id)=>{
          console.log(dataAparts.Category)
          return(
            <h2>Category: {dataAparts.Category._text}</h2>
           
          )

        })}
     
    </div>
    )
};
  

   
export default SaleCardList;
