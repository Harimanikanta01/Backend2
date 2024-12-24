import React, { useState, useEffect } from "react";
import axios from "axios";

function Retr() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // Error state

    const fetchData = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/mr/1/");
            console.log("Response data:", response.data); // Log the response data
            setData(response.data); // Ensure this is an array
        } catch (err) {
            console.error("Error fetching data:", err);
            setError(err); // Set the error state
        } finally {
            setLoading(false); // Set loading to false after the request
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Show loading message
    }

    if (error) {
        return <div>Error fetching data: {error.message}</div>; // Show error message
    }

    return (
        <div>
           
                <div >
                    <div className="title"> <h1>Shopsy</h1></div>
               
                <div className="card row ">
                    </div>
                    <div className="card-body col">
            <img src={data.img}alt={data.id}style={{width:"350px"}}className="card-img top"></img>
            <b><h3 className="card-title">{data.name}</h3>
            <p>{data.price}</p>
            <p>{data.discount}</p></b>

           </div>
            </div>
        </div>
    );
}

export default Retr;