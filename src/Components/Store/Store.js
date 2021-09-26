import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Item from '../Item/Item';
import './Store.css';

const Store = () => {
    const [carts,setCarts] =useState([]);
    const [items,setItems] = useState([]);
    // here some data is loaded:
    useEffect(()=>{
        fetch('./people.JSON')
        .then(res=>res.json())
        .then(data=>setCarts(data))
    },[])
    // button eventHandler:
    const selectCart=(cart)=>{
        const newItem=[...items,cart];
        setItems(newItem);
       
    }
    return (
        <div className="all-container">
            {/* All cart section where showing all companies details in dynamically */}
            <div className="store-container">
                {
                    carts.map(cart=><Cart key={cart.key}cart={cart} selectCart={selectCart}></Cart>)
                }
              
            </div>
            {/* Here showing items setion dynamically */}
            <div>
                <Item items={items}></Item>
                  
            </div>
        </div>
    );
};

export default Store;