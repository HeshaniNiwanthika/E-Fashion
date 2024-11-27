import React, { useState } from 'react';
import './Navbar.css'
import pic1 from  '../Assets/pic1.jpg'

import pic3 from '../Assets/pic3.jpg'
import piclogo from '../Assets/piclogo.png'


const Navbar=() => {
   const[menu,setMenu]=useState("shop");

return (
    <div className="navbar">

      <div className="nav-logo">
         <img src={piclogo} alt=""
                height={100}
                width={100}
         />
         <img src={pic1} alt=""
               height={100}
               width={100}
         
         />

         <p>SHOPPER</p>
            <ul className="nav-menu">
               <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
               <li onClick={()=>{setMenu("mens")}}>Men{menu==="mens"?<hr/>:<></>}</li>
               <li onClick={()=>{setMenu("womens")}}>Women{menu==="womens"?<hr/>:<></>}</li>
               <li onClick={()=>{setMenu("kids")}}>Kids{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
              <button>Login</button>
              <img src={pic3} alt=""
                  height={100}
                  width={100}
              
              />
              <div className="nav-cart-count">0</div>
            </div>
         </div>
    </div>
   )

}
export default Navbar



