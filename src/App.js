
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
import men_banner from '../Assets/men_banner';
import women_banner from '../Assets/women_banner';
import kid_banner from '../Assets/kid_banner'


function App() {
  return (
    <div>
      <Navbar/>
      <Routers>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner}category="kids"/>}/>
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
