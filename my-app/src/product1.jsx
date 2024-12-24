import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import './App.css';
function P1(){
    const [data,setData]=useState([])

    const a=async()=>{
        const response=await axios("http://127.0.0.1:8000/product1/")
        setData(response.data)
    }
    
    
    useEffect(()=>{
  a()
    },[])
return(
    <div>
        <h3><b>Best of Cameras</b></h3>
    <div className="p1 ">
        
      
{
    data.map((products)=>(
        <ul key={products.id}>
        <img src={products.image}alt={products.id}style={{width:"215px",height:'200px'}}className="card-img-top"></img>
      <div className="card-body"> <h2 className="card-title">{products.name}</h2></div>
       
       
        </ul>
       
    ))
    
}
</div>
    </div>
    
    
)
}
export default P1