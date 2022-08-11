import React from "react";
import axios from "axios";


export default function getDataSales (){
    console.log("NEWfetch", "start");
    const dataAppart = axios.get(`http://localhost:3000/api/aparts`);
    console.log("NEWfetch", "wait");
    console.log("NEWfetch", dataAppart.request.response);
    const dataJson = JSON.parse(dataAppart.request.response);
    console.log("NEWdone", dataJson);
    return (
        dataJson
    )
}