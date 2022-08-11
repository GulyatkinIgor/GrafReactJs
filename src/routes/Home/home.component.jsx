import { Outlet } from 'react-router-dom';
import Carousel from '../../components/carousel/carousel.component';
import { CarouselContainer } from './home.styles';


const Home = () => {
    return(

      <CarouselContainer>
      <div> Домашняя
      <Carousel/>
      </div>
      </CarouselContainer>
     
       
       
    );
   }
   
   export default Home;