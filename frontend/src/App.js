import './App.css';
import React from 'react';
import {BrowserRouter , Routes , Route ,Navigate } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Services from './pages/Services';
import Companies from './pages/filtered';
import Cart from './pages/Cart';
import Admin from './pages/adminPage';
import Buynow from './components/Buynow';

function App() {
    const user = JSON.parse(localStorage.getItem('user'))

    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<Home/>}
                />
                <Route
                    path='/companies'
                    element= { <Companies/>}
                />
                <Route
                    path='/services'
                    element= { <Services/>}
                />
                <Route
                    path='/cart'
                    element= { <Cart/>}
                />
                <Route
                    path='/buynow'
                    element= { <Buynow/>}
                />
                <Route
                    path='/admin'
                    element= {<Admin/>}
                />
            </Routes>
        </BrowserRouter>
    </>
  );
}
export default App;
