import {CgProfile} from "react-icons/cg";
import React from 'react';
import {AiOutlineSearch} from "react-icons/ai"
import {AiOutlineShoppingCart} from "react-icons/ai"
import Profile from "./Profile";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const  Navbar = () =>{
    return(
        <header>
            <div className="container">
            <div className="containertitle">
                <a href="/" style={{color: "white"}}><span id="profile"><a href="/"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" className="icon" style={{fontSize:"180%" , color:"#fff"}}><CgProfile/></a></span>  SAI Electronics</a>
                <Profile/>
            </div>
            <div className="search">
                <input  className="searchbar" placeholder="Search here...."/>
                <button className="searchicon">
                    <AiOutlineSearch />
                </button>
            </div>
                <nav>
                        <div className="navend" style={{fontSize:"115%"}}>
                            <a href='/companies' style={{color: "white"}}>Companies</a>
                            <a href='/services' style={{color: "white"}}>Services</a>
                            <a href='/cart' style={{color: "white", fontSize:"120%"}}><AiOutlineShoppingCart/></a>
                        </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
