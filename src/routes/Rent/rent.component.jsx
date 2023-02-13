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
import Example from "./component/modal.component";
import ModalItem from "./component/modal.component";
import json from "./component/item.json"


class Rent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isItem: false,
      loadingItem: true,
      requestType: "api/rent/",
      data: [],
      dataItem: json
    };
  }

  handleDataChange = dataJson => {
    this.setState({ data: dataJson })
  }

  handleItemDataChange = item => {
    this.setState({ dataItem: item, isItem: true, loadingItem: false })
  }

  hideItem = () => {
    this.setState ({
      isItem: false
    })
  }

  showItem = () => {
    this.setState({
      isItem: true
    })
  }


  getDataApparts = async () => {
    const {requestType} = this.state
    const dataAppart = await axios.get(`http://localhost:3500/`+ requestType);
    const dataJson = JSON.parse(dataAppart.request.response);
    this.setState({
      data: dataJson,
      isLoading: false
    });
  };



  componentDidMount() {
    this.getDataApparts();
  }


  render() {
    const {isLoading, isItem, data, dataItem, loadingItem} = this.state
    return isLoading ? <Loading /> : 
       <div>
       <Navigation/>
       <Buttons  onDataChange={this.handleDataChange} />
       <SaleCardList onItem={this.handleItemDataChange} dataAparts={data} hide={this.hideItem} showItem={this.showItem} />
       <ModalItem isLoad={loadingItem} active={isItem} setActive={this.hideItem} data={dataItem}/>
     <Footer/>
</div> 
   }
 }
   export default Rent;