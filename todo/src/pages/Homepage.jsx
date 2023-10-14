import React, { useState } from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import axios from 'axios'
export default function Homepage() {
  const [dropdown,setDropdown]= useState([])
  const views = (value)=>{
    axios.get(`http://localhost:2000/main/status/${value}`).then((data)=>{
      console.log(value);
      setDropdown(data.data.details)
     
    }).catch((error)=>{
      console.log(error);
    })
  }
  console.log(dropdown);
  return (
    <div>
      <Header view={views} />
      <Body data={dropdown} />
    </div>
  )
}
