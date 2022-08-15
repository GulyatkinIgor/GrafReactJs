import axios from "axios";
import Sales from "../sales.component";
import SaleCardList from "../salesCard-list/card-list.component";

const chooseType = async (request) => {
    const requestType = "api/sale/"
    const reqs = request
    const dataAppart = await axios.get(`http://localhost:3000/`+ requestType + request);
    const dataAparts = JSON.parse(dataAppart.request.response);
    console.log("done  requestType", dataAparts);
    SaleCardList({dataAparts})
  };

  export default chooseType;