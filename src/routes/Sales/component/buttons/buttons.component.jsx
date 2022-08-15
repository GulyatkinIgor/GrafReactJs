import React, { Component } from 'react'
import axios from "axios";
import SaleCardList from "../../salesCard-list/card-list.component";
import chooseType from "../choosefunction.component";

class Buttons extends Component {
    

    handleInputChange = (dataAparts) => {
        this.props.onDataChange(dataAparts)
      }

    chooseType = async (request) => {
        const requestType = "api/sale/"
        const reqs = request
        const dataAppart = await axios.get(`http://localhost:3000/`+ requestType + request);
        const dataAparts = JSON.parse(dataAppart.request.response);
        // console.log("done  requestType", dataAparts);
        this.handleInputChange(dataAparts)
      };


    render(){
    const flat = "flat"
    const home = "home"
    const commerce = "commerce"
    const garage = "garage"
    const yard = "yard"
    const room = "room"
    return (
        <div>
        <button onClick={() => chooseType(flat)} type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">flat</button>
        <button onClick={() => chooseType(home)} type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">home</button>
        <button onClick={() => chooseType(commerce)} type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">commerce</button>
        <button onClick={() => chooseType(garage)} type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">garage</button>
        <button onClick={() => chooseType(yard)} type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">yard</button>
        <button onClick={() => chooseType(room)} type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">room</button>
        </div>        
    );
    }
  };

  export default Buttons;