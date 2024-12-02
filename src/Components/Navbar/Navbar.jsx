import React, { useState } from 'react';
import './Navbar.css'
import logo from  '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import {Link} from 'react-router-dom'
import ProductDisplay from '../ProductDisplay/ProductDisplay';


const RelatedProducts=()=>{


return (
    <div className="navbar">

      <div className="nav-logo">
         <img src={logo} alt=""
                height={100}
                width={100}
         />
         
         
      

         <p>SHOPPER</p>
            <ul className="nav-menu">
               <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}}to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>/*link-add pages to navigate*/
               <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/Mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
               <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}}to='/Women'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
               <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}}to='/Kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
              <Link to='/Login'><button>Login</button></Link>
              <Link to='/Cart'> <img src={cart_icon} alt="">
                  height={100}
                  width={100}
                  </img></Link>
            
              <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
         </div>
    </div>
   
)
}

export default Navbar;



