import React from "react";
import {useState} from "react"
import { MenuItems } from "./MenuItems";
import { Button } from "../Button";
import './Navbar.css';


const Navbar =({setShow,size})=>{
    const [state,setState]=useState({clicked:false});
    const handleClick=()=>{
        setState({clicked: !state.clicked})
    }
    
    return(
        <nav className="navbarItems">
            <h1 className="navbar-logo" onClick={() => setShow(true)}>React<i className="fab fa-react"></i></h1>
            <div className="menu-icon" onClick={handleClick}>
                <i className={state.clicked ? 'fas fa-times':'fas fa-bars'}></i>
            </div>
            <ul className={state.clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item,index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url} >
                                {item.title}
                            </a>
                            </li>
                    )
                })}
                
            </ul>
            <div className="cart" onClick={() => setShow(false)}>
            <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
            </div>
            <Button>Sign Up</Button>
           
        </nav>
    );
};

export default Navbar;