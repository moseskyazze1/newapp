import { useState } from "react";
import DataContext from "./dataContext";

function GlobalProvider(props){
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({name: "Moses"});

    function addProductToCart(product){
        console.log("Global fn");

        var copy = [...cart];
        let found = false;
        for (let i=0; i<copy.length; i++){
            let prod = copy[i];

            if(prod._id ==product.id) {
                prod.quantity +=product.quantity;
                found = true;
            }
        }

        if (!found){
            copy.push(product);
        }
        
        setCart(copy);

    }

    function resetCart(){

    }
    return(
        <DataContext.Provider value={{
            cart:cart,
            user: user,
            addProductToCart: addProductToCart,
            resetCart:resetCart,
        }}>
            {props.children}
        </DataContext.Provider>
    );
}

export default GlobalProvider;