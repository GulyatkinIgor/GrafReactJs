import Carousel from '../../../components/carousel/carousel.component';
import { CarouselContainer } from '../../Home/home.styles';
import SaleCard from '../salesCard/card.component';
import './card-list.styles.css';

const SaleCardList = ({ dataAparts }) => {

  function click(data){
    console.log("ZALUPA",data)
  }

  return(
    <div className='card-list'>
        {dataAparts.map((data,Id)=>{
          return(
        <a href="/Item">
            <div>
        <a class="block relative h-48 rounded overflow-hidden">
          
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{data.Locality._text}</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">{data.Title._text}</h2>
          <p class="mt-1">{data.Price._text}</p>
        </div>
      </div>
        </a>            
  
          )

        })}
     
    </div>
    )
};
  

   
export default SaleCardList;

