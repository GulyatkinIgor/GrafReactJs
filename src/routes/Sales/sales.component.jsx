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
import Item from "../Item/item.component";


class Sales extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isItem: true,
      requestType: "api/aparts/",
      data: [],
      dataItem: {}
    };
  }

  handleDataChange = dataJson => {
    this.setState({ data: dataJson })
  }

  handleItemDataChange = item => {
    this.setState({ dataItem: item, isItem: false })
  }


  getDataApparts = async () => {
    const {requestType} = this.state
    const dataAppart = await axios.get(`http://localhost:3000/`+ requestType);
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
    const {isLoading, isItem, data, dataItem} = this.state
    return isLoading ? <Loading /> : ( isItem ? 
       <div>
       <Navigation/>

       Продажи Страница
       <CarouselContainer>
         <Carousel/>
       </CarouselContainer>
       <Buttons  onDataChange={this.handleDataChange} />
       <SaleCardList onItem={this.handleItemDataChange} dataAparts={data}/>
     <Footer/>
</div> 
:
<div>
       <Item item={dataItem}/>
</div> 
    );
   }
 }
   export default Sales;