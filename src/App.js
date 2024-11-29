
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {BrouserRouter,Routes,Route}from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product'
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer';
import pic1 from '../Assets/pic1.jpg';
import pic2 from '../Assets/pic1.jpg';


function App() {
  return (
    <div>
      <Navbar/>
      <Routers>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory category="men"/>}/>
        <Route path='/womens' element={<ShopCategory category="women"/>}/>
        <Route path='/kids' element={<ShopCategory category="kids"/>}/>
        <Route path="/product" element={<Product/>}>
             <Route path =':productId' element={<Product/>}/>
        </Route>
          <Route path='/cart' element={<Cart/>}/>
        <Route path='/Login' element={<LoginSignup/>}/>

        
      </Routers>
      <Footer/>
    </div>
  );
}

export default App;
