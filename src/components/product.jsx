import './styles/product.css';
import QuantityPicker from '../components/quantityPicker';



function Product(props){

    function add(){
        console.log("adding"+props.info.title)
;    }
    return(
        <div className="product">
            <img src={"/images/"+props.info.image} alt=""/>
            <h5>{props.info.title}</h5>

            <label className='total'>{props.info.price.toFixed(2)}</label>
            <label>{props.info.price.toFixed(2)}</label>
            <div className='controls'>
            
            <QuantityPicker/>

            <button onClick={add} className='btn btn-sm btn-primary'>Add</button>
        </div>
        </div>
    );
}

export default Product;