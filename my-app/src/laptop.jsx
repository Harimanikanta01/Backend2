import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
function Laptop1(){
const [data,setData]=useState([])
const a=async()=>{
    const response=await axios("")
    setData(response.data)
}
useEffect(()=>{
    a();
})
return(
    <div className="laptop">
        {
            data.map((products)=>(
                <div key={products.id}>
                    <img src={products.img}></img>
                    <h1>{products.name}</h1>
                    <h4>{products.price}</h4>
                    {products.discount}
                    </div>
            ))
        }
    </div>
)
}