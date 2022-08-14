import axios from "axios";
import Sales from "../sales.component";

const chooseType = async (request) => {
    const requestType = "api/sale/"
    const reqs = request
    const dataAppart = await axios.get(`http://localhost:3000/`+ requestType + request);
    const dataJson = JSON.parse(dataAppart.request.response);
    console.log("done  requestType", dataJson);
    return dataJson
  };

  export default chooseType;