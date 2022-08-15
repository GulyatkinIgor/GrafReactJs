import React from "react";
import axios from "axios"
import Footer from "../Footer/footer.component";
import Navigation from "../Navigation/navigation.component";
import Carousel from '../../components/carousel/carousel.component';
import { CarouselContainer } from '../Home/home.styles';
import { useState } from "react";
import getDataSales from "../../Utils/FetchDataAppart.component";
import SaleCardList from "./salesCard-list/card-list.component";
import Loading from "../../Loading";
import Buttons from "./component/buttons/buttons.component";


class Sales extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      requestType: "api/aparts/",
      data: []
    };
  }

  handleDataChange = dataJson => {
    this.setState({ data: dataJson })
  }


  getDataApparts = async () => {
    const {requestType} = this.state
    console.log("fetch Sales", "start");
    const dataAppart = await axios.get(`http://localhost:3000/`+ requestType);
    console.log("fetch Sales", "wait");
    console.log("fetch Sales", dataAppart.request.response);
    const dataJson = JSON.parse(dataAppart.request.response);
    console.log("done  Sales", dataJson);
    this.setState({
      data: dataJson,
      isLoading: false
    });
  };



  componentDidMount() {
    this.getDataApparts();
  }


  render() {
    const {isLoading, data} = this.state
    const dataAparts = data
    console.log("dataApart", dataAparts)

    return isLoading ? <Loading /> : (
       <div>
       <Navigation/>

       Продажи Страница
       <CarouselContainer>
         <Carousel/>
       </CarouselContainer>
       <Buttons  onDataChange={this.handleDataChange} />
       <SaleCardList dataAparts={dataAparts}/>
     <Footer/>
</div>
    );
   }
 }
   export default Sales;