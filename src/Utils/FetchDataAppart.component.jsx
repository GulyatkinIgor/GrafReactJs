import React from "react";
import axios from "axios";


export default function getDataSales (){
    console.log("fetch", "start");
    const dataAppart = axios.get(`http://localhost:3000/api/aparts`);
    console.log("fetch", "wait");
    console.log("fetch", dataAppart.request.response);
    const dataJson = JSON.parse(dataAppart.request.response);
    console.log("done", dataJson);
    return (
        dataJson
    )
}