import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {
const [data,changeData]=useState([])
const fetchDataFromApi= ()=>{
    axios.get("https://fakestoreapi.com/products").then(
        (reponse)=>{
            changeData(reponse.data)
        }
    ).catch()
}    
useEffect(()=>{fetchDataFromApi()},[])
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Rating</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value,index)=>{
                                            return <tr>
                                                <th scope="row">{value.id}</th>
                                                <td>{value.title}</td>
                                                <td>{value.price}</td>
                                                <td>{value.description}</td>
                                                <td>{value.category}</td>
                                                <td>{<img src={value.image} style={{ width: 100, height: 100 }} />}</td>
                                                <td>{value.rating.rate} ({value.rating.count} reviews)</td>
                                            </tr>
                                        }
                                    )
                                }
                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Viewall
