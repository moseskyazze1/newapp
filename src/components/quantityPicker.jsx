import { useState } from 'react';
import './styles/quantitypicker.css';

function QuantityPicker(){
    const [quantity,setQuantity] =useState(1);

    function decrease(){
        let val= quantity-1;
        if(val > 0){
        setQuantity(val);
        }
    }
     function increase(){
        let val= quantity+1;
        setQuantity(val);

     }   
    
    return(
        <div className="quantitypicker">
            <button disabled={quantity==1} onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button onClick={increase}>+</button>
        </div>
    )
}

export default QuantityPicker;