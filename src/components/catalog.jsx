import Product from '../components/product';
import './styles/catalog.css';

const categories=['fruit', 'food', 'vegetable','drinks', ];



   
const data = [
        {
            title: "Watermelon",
            price: 12.33,
            category: "fruit",
            image: "watermellon.jpg",
            _id: "1",
            width: 300,
            height: 300
        },
        {
            title: "Banana",
            price: 17.33,
            category: "fruit",
            image: "banana.jpg",
            _id: "2",
            width: 300,
            height: 300
        },
        {
            title: "Strawberries",
            price: 11.33,
            category: "fruit",
            image: "strawberry.jpg",
            _id: "3",
            width: 300,
            height: 300
        },
        {
            title: "Oranges",
            price: 16.33,
            category: "fruit",
            image: "oranges.jpg",
            _id: "4",
            width: 300,
            height: 300
        },
        {
            title: "Pineapple",
            price: 18.33,
            category: "fruit",
            image: "pineapple.jpg",
            _id: "5",
            width: 300,
            height: 300
        },
        {
            title: "milk",
            price: 18.33,
            category: "drinks",
            image: "milk.jpg",
            _id: "6",
            width: 300,
            height: 300
        },
        {
            title: "Eggs",
            price: 18.33,
            category: "food",
            image: "eggs.jpg",
            _id: "7",
            width: 300,
            height: 300
        },
        {
            title: "Carrot",
            price: 18.33,
            category: "vegetable",
            image: "carrot.jpg",
            _id: "8",
            width: 300,
            height: 300
        }
    ];
    

function Catalog(){
return(
    <div className="catalog">
        <h1>Check our catalog</h1>
        
        <div className='filters'>
            {categories.map(cat => <button className='btn btn-primary'>{cat}</button>)}
        </div>
        {data.map(prod=> <Product info={prod} />)}
    </div>
);
}

export default Catalog;