import Carousel from '../../components/carousel/carousel.component';
import { CarouselContainer } from './home.styles';
import Navigation from '../Navigation/navigation.component';
import Footer from '../Footer/footer.component';


const Home = () => {
    return(
       <div>
       <Navigation/>

   <CarouselContainer>
         <Carousel/>
   </CarouselContainer>


<section class="flex items-center justify-center py-10 text-white bg-white sm:py-16 md:py-24 lg:py-32">
    <div class="relative max-w-3xl px-10 text-center text-white auto lg:px-0">
        <div class="flex flex-col w-full md:flex-row">

         
            <div class="flex justify-between">
                <h1 class="relative flex flex-col text-6xl font-extrabold text-left text-black">
                    Агенство
                    <span>недвижимости</span>
                    <span>Графский</span>
                </h1>
            </div>
          
           
        </div>

     
        <div class="my-16 border-b border-gray-300 lg:my-24"></div>

       
        <h2 class="text-left text-gray-500 xl:text-xl">
        Агенство недвижимости Графский - все риелторские услуги: купля, продажа, обмен, аренда жилой и коммерческой недвижимости Москвы и Подмосковья,помощь в получении ипотеки.<br/>
        Защита интересов наших клиентов и юридическая чистота проводимых сделок позволяют нам уже 30 лет занимать лидирующее место на рынке! 
        </h2>
    </div>
</section>


<section class="h-auto bg-white">
    <div class="max-w-7xl mx-auto py-16 px-10 sm:py-24 sm:px-6 lg:px-8 sm:text-center">
        <h2 class="text-base font-semibold text-indigo-600 tracking-wide uppercase">subtitle text</h2>
        <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Build your next great idea</p>
        <p class="max-w-3xl mt-5 mx-auto text-xl text-gray-500">Are you ready to start building the next great idea. You can start off by using our design components to help tell you story and showcase your great idea.</p>
    </div>
</section>


<Footer/>


<script src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/2.8.0/alpine.js"></script>
      
      </div>       
    );
   }
   
   export default Home;