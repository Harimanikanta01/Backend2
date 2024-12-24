import { useState,useEffect } from "react";
import axios from 'axios'
import './App.css';
function Banner(){
 const [data,setData]=useState([])
 const [img,setImg]=useState([])
 const c = async () => {
    const response=await axios(' http://127.0.0.1:8000/banner/')
    setData(response.data)
 }
 useEffect(()=>{
c()
 },[])
 useEffect(() => {
    // Set the first image after data is fetched
         if(data.length>0){
         setImg(data[0].img)
        const wa=setTimeout(()=>{
            setImg(data[1].img)
        },1000)
        const timer=(()=>{
            setImg(data[1].img)
        },7000)
     
        
        return () => {
            clearTimeout(timer);
        return () => clearTimeout(wa);
         }}
}, [data]);

const clicl=()=>{
    setImg(data[1].img)
}
const prev=()=>{
    setImg(data[0].img)
}


    return(
        
         <div className="banner ">
            
            {data.map((product) => (
                <div key={product.id}> 
                    <img src={img} alt={1} className="mt-4 ml-2 mr-3" />
                    <button onClick={clicl}>
                        <img src="https://cdn4.iconfinder.com/data/icons/arrow-navigation-alignment-and-user-interface-v-1/512/arrows_arrow_direction_navigation_move_align_sign_-_50-512.png"alt='1'style={{width:"50px",height:'50px',position:'absolute',right:'2%',top:'47%'}}></img>
                        </button>
                        <button onClick={prev}>
                    <img src="https://cdn0.iconfinder.com/data/icons/transit-2/32/transit-11-512.png"alt='2'style={{width:"50px",height:'50px',position:'absolute',right:'6%',top:'47%'}}></img>
                    </button>
                    <br></br>
                    
                </div>
            ))}
            
        </div>
        
    )
}
export default Banner