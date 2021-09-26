import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Item from '../Item/Item';
import './Store.css';

const Store = () => {
    const [carts,setCarts] =useState([]);
    const [items,setItems] = useState([]);
    useEffect(()=>{
        fetch('./people.JSON')
        .then(res=>res.json())
        .then(data=>setCarts(data))
    },[])
    const selectCart=(cart)=>{
        const newItem=[...items,cart];
        setItems(newItem);
       
    }
    return (
        <div className="all-container">
            <div className="store-container">
                {
                    carts.map(cart=><Cart key={cart.key}cart={cart} selectCart={selectCart}></Cart>)
                }
              
            </div>
            <div>
                <Item items={items}></Item>
                  
            </div>
        </div>
    );
};

export default Store;