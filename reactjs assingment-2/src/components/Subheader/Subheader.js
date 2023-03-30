import React,{useState} from 'react'
import "./subheader.css"
export default function Subheader() {
    let [hover,sethover]=useState(false)
    const mystyles ={
        backgroundColor :"grey"
    }
    const hoverStyle ={
        border:hover ? "1px solid black" :""
    }
    const handlehover=()=>{
      sethover(true)
    }
    const handlehoverout=()=>{
        sethover(false)
    }
    return (
        <div class="subheader" style={mystyles}>
            <div onMouseEnter={handlehover} style={hoverStyle} onMouseLeave={handlehoverout}>All</div>
            <div>Today's Deals</div>
            <div>Customer Service</div>
            <div>Registry</div>
            <div>Gift Cards</div>
        </div>
    )
}
