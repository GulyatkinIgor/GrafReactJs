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
    <div class="relative max-w-7xl px-10 text-center text-white auto lg:px-0">
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

       <h1 class="relative flex flex-col text-3xl font-extrabold text-center text-black">
       О НАС
       </h1>
        <h2 class="text-left text-gray-500 xl:text-xl">
        Агентство недвижимости ООО «ГРАФСКИЙ» - одно из самых крупных в городе Казани. Мы работаем в этой сфере на протяжении 25 лет, имеем богатый опыт в решении вопросов с недвижимостью, поэтому, если Вы ищите каталог квартир в Казани – будем рады Вам помочь! Мы предоставляем услуги комплексного сопровождения сделки купли-продажи жилья, как на первичном, так и на вторичном рынке. 
        </h2>
        <h2 class="text-left text-gray-500 xl:text-xl">
        Штат специалистов нашей компании состоит из профессионалов своего дела, которые предоставят Вам всю необходимую информацию по осуществлению сделки с недвижимостью, в частности, как купить новостройки в Казани или жилье вторичного рынка, помогут подобрать наиболее подходящий вариант покупки или продажи, и заключить договор. К тому же, мы оказываем услуги по сбору необходимой документации для осуществления сделки. </h2>
        <h2 class="text-left text-gray-500 xl:text-xl">
        Ежемесячно, к услугам нашей крупной компании прибегает более 800 человек, и к каждому клиенту мы подбираем индивидуальный подход. Если Вам нужно купить новостройки в Казани или жилье вторичного рынка, продать или обменять недвижимость, то наши риэлторы помогут с решением данного вопроса и подберут для Вас квартиру Вашей мечты, учитывая Ваши возможности.
        </h2>
    </div>
</section>


<section class="h-auto bg-white">
    <div class="max-w-7xl mx-auto py-16 px-10 sm:py-24 sm:px-6 lg:px-8 sm:text-center">
        <h2 class="text-base font-semibold text-indigo-600 tracking-wide uppercase">Поможем купить или продать вашу квартиру! тел. 8 (843) 267-58-88</h2>
        <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Build your next great idea</p>
        <p class="max-w-3xl mt-5 mx-auto text-xl text-gray-500">Are you ready to start building the next great idea. You can start off by using our design components to help tell you story and showcase your great idea.</p>
    </div>
</section>


<Footer/>


{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/2.8.0/alpine.js"></script> */}
      
      </div>       
    );
   }
   
   export default Home;