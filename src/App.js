
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';


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
    </div>
  );
}

export default App;
