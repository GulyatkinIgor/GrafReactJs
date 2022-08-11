import Footer from "../Footer/footer.component";
import Navigation from "../Navigation/navigation.component";
import Carousel from '../../components/carousel/carousel.component';
import { CarouselContainer } from '../Home/home.styles';
import getDataSales from "../../Utils/FetchDataAppart.component";

const Sales = () => {

  const dataAppart = getDataSales
  console.log("done", dataAppart);

    return(
       <div>
       <Navigation/>

       Продажи Страница
       <CarouselContainer>
         <Carousel/>
       </CarouselContainer>
       
     <Footer/>
</div>
    );
   }
   
   export default Sales;