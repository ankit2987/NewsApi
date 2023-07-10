import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"

const FetchData = ({cat}) => {
    const [Data, setData] = useState("");
    const fetchData = async()=>{
      
        await axios
        .get(
          cat?
          
          'https://newsapi.org/v2/top-headlines?country=in&category={cat}&apiKey=afb587a3c6b942a78ee8dc29ed0042f9'
            :"https://newsapi.org/v2/top-headlines?country=in&apiKey=afb587a3c6b942a78ee8dc29ed0042f9"

        )
        .then((res)=>setData(res.data.articles));
    };
    useEffect(() => {
      fetchData();
    }, [cat]);
    
    
  return (
    <div className='container my-4'>
        <h3><u>Top Headlines</u></h3>
        <div className='container d-flex justify-content-center align-items-center flex-column my-3' style={{minHeight: "100vh"}}>
        {
          Data? Data.map((items,index)=>(
            <>
            <div className='container my-3 p-3' style={{width:"600px",boxShadow:"2px 2px 10px silver", borderRadius:"10px"}}>
            <h5 className='my-2'>{items.title}</h5>
            <div className='d-flex justify-content-center align-items-center flex-column my-3'>
            <img src={items.urlToImage}
            alt="Image not Found"
            className='img-fluid'
            style={{width:'auto',height:'300px',objectFit:'cover'}}/>
            </div>
            

            
            <p className='my-1'>{items.content}</p>
            <Link to={items.url} target='blank'>View More</Link>
            </div>
            </>
          )):"Loading..."
        }
        
        
        </div>
    </div>
  )
}

export default FetchData;