import SaleCard from '../salesCard/card.component';
import './card-list.styles.css';

const SaleCardList = ({ dataAparts }) => {

  return(
    <div className='card-list'>
        {dataAparts.map((data,Id)=>{
          return(            
            <div>
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{data.Locality._text}</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">{data.Title._text}</h2>
          <p class="mt-1">{data.Price._text}</p>
        </div>
      </div>
  
          )

        })}
     
    </div>
    )
};
  

   
export default SaleCardList;

