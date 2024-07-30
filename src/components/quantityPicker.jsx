import { useState } from 'react';
import './styles/quantitypicker.css';

function QuantityPicker(props){
    const [quantity,setQuantity] =useState(1);

    function decrease(){
        let val= quantity-1;
        if(val > 0){
        setQuantity(val);
        props.onChange(val);
        }
    }
     function increase(){
        let val= quantity+1;
        setQuantity(val);
        props.onChange(val);

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