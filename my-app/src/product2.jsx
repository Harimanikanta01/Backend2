import axios from "axios";
import { useState, useEffect } from "react";
import './App.css';

function P2() {
    const [data, setData] = useState([]);
   

    const fetchData = async () => {
        const response = await axios("http://127.0.0.1:8000/product2/");
        setData(response.data);
    };

    useEffect(() => {
        fetchData();
    }, []);
    const [hide, setHide] = useState([]);

    const a = async () => {
        const response = await axios("http://127.0.0.1:8000/add1/");
        console.log(response.data);
        setHide(response.data);
    };

    useEffect(() => {
        a();
    }, []);
    


    

    

        
    return (
        <div>
            <h3><b>Best of Shoes</b></h3>
            <div className="p2">
                <div className="row  ml-2 ">
                    {data.map((product) => (
                        <div className="col-md-5" key={product.id}>
                            <div className="card mb-4 mt-3 ">
                                <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className="card-img-top mr-2" 
                                    style={{ width: "100%", height: '180px', objectFit: 'cover' }} 
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-center">{product.name}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="add md-2">
            <div className="add ">
                
                {
                    hide.map(products=>(
<div key={products.id}>
    
    <img src={products.images}alt={products.id} style={{width:'63%',height:'100%'}}></img>
    </div>
                    ))
                }
          </div>  
            
        </div>
        </div>
    );
}

export default P2;