import React from 'react';
import './Item.css';

const Item = (props) => {
    const {items}=props || {};
    let total=0;
    // let member=[]
    for(const cart of items){
        total=total+cart.salary;
        // if(total>0){
        //     member=cart.name;
        // }
        // console.log(total)
    }
    
    return (
        <div className="items-container">
            <h1 className="text-design">Selected Company :</h1>
            <h2>Add Company:{props.items.length}</h2>
            {
                items.map(cart=><h2>Company Name:{cart.name}</h2>)
            }
            
            {/* <h2>Company Name:{member}</h2> */}
            <h2>Company Total income :<small>$</small> {total}</h2>
        </div>
    );
};

export default Item;