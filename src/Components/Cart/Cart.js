import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = (props) => {
    const {name,img,salary,inventor,Headquater,inventYear}=props.cart;
    const icon=<FontAwesomeIcon icon={faUserCheck} />
    return (
        <div className="cart-container" >
            <div className="cart-img">
                <img src={img} alt="" />
            </div>
            <div className="cart-details">
                <h2>Name:{name}</h2>
                <h3>Inventor:{inventor}</h3>
                <h3>Invent Year:{inventYear}</h3>
                <h3>Headequater:{Headquater}</h3>
                <h3>Company Income:<small>$</small>{salary}</h3>
                <button className="btn-change" onClick={()=>props.selectCart(props.cart)}>{icon}   Select</button>
            </div>
        </div>
    );
};

export default Cart;