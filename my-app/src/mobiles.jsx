import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

function Mobile1(){
const [mobile,setMobile]=useState([])
const a=async()=>{
    const response=await axios("http://127.0.0.1:8000/mobile/")
    setMobile(response.data)
}
const [count,setCount]=useState(0)
const inc=()=>{
    setCount(count+1)
}

useEffect(()=>{
    a()
},[])

    return(
        <>
     
        <div className="mobile">
        
            <h1 className="text-center bg-primary text-white">Mobiles</h1><div>
        <div className="row m-2">
            
            {
               
                mobile.map((products)=>(

                    <div key={products.id}>
                        <div className="card m-2">
                        
                            <div className="card-body ml-2">
                            <Link to={`http://localhost:3000/retr/${products.id}`}>
                        <img src={products.img}alt={products.id}className="card-img-top"style={{width:"256px",height:"250px"}}></img>
                        <h1 className="card-title ">name:{products.name} </h1>
                      <h4 className="card-text ">price:{products.price}</h4>  </Link>
                       discount: {products.discount}<br></br>
                        <button  onClick={inc}className="btn-danger">add to cart</button>
                        </div></div>
                        
                    </div>
                ))
                            }

        </div></div></div>
       
        </>
    )
}
export default Mobile1
