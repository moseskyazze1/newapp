import Product from '../components/product';
import dataService from '../services/dataService';
import './styles/catalog.css';
import { useEffect, useState } from 'react';


function Catalog(){
    const[products,setProducts] = useState([]);
    const[categories,setCategories] = useState([]);
    
    useEffect(function () {

        //const prods = dataService.getProducts();
        //setProducts(prods);
        loadCatalog()
        loadCategories()

        //const cat = dataService.getCategories();
        //setCategories(cat);
    }, []);

     async function loadCatalog(){
        let prods =  await dataService.getProducts()
        setProducts(prods)
        console.log(prods)
    }

    async function loadCategories(){

    let cats = await dataService.getCategories()
    setCategories(cats)
    console.log(cats)
    }

return(
    <div className="catalog">
        <h1>Check our catalog</h1>
        
        <div className='filters'>
            {categories.map((cat) => (<button className='btn btn-primary'>{cat}</button>))}
        </div>
        {products.map(prod=> <Product info={prod} />)}
    </div>
);
}

export default Catalog;