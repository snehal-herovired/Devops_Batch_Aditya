import React from 'react'
import "./header.css"
export default function Header() {
  return (
    <>
    <div className="header">
        <div className="section1">
            <div className="logo">
                <img src="/images/amazon.png" alt="amazon_logo"/>
            </div>
            <div className="deliver">
                <div className="icon">
                    <i className="fa fa-map-marker"></i>
                </div>
                <div className="deliver-content">
                    <div>Deliver to</div>
                    <div>India</div>
                </div>
            </div>
        </div>
        <div className="section2">
            <div className="searchbox">
                <input type="text"/>
            </div>

        </div>
        <div className="section3">
            <div className="signin">
                <button>SignIn</button>
            </div>
            <div className="orders">
                <span>Returns</span>
                <span>& Orders</span>
            </div>
            <div className="cart">
                <i className="fa fa-shopping-cart"></i>
            </div>
        </div>
    </div>
    </>
  )
}
