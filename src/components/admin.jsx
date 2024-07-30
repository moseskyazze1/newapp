import './styles/admin.css';
import { useState }from "react";

function Admin() {
    const[product, setProduct] = useState({
        title: "",
        image: "",
        price: "",
        category: "",
    });
    const [coupon, setCoupon] = useState({
    code: "",
    discount: "",
});


    function handleCoupon(e){
        const text = e.target.value;
        const name = e.target.name;

        coupon[name] =text;

        //create a copy
        let copy = {...coupon};
        //modify the copy
        copy[name] = text;
        //set the copy back
        setCoupon(copy);

    }

    function handleProduct(e){
        const text = e.target.value;
        const name = e.target.name;

        coupon[name] =text;

        //create a copy
        let copy = {...product};
        //modify the copy
        copy[name] = text;
        //set the copy back
        setProduct(copy);

    }

    function saveCoupon(){
        console.log(coupon);
    }


    function saveProduct(){
        console.log(product);
    }


    return (
        <div className="admin page">
        <h1>Store Administration</h1>

        <div className='parent'>
            <section className='sec-prods'>
                <h3>Products</h3>

                <div className='form'>
                    <div>
                        <label className="form-label">Title</label>
                        <input onChange={handleProduct} name="title" type="text" className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">Image</label>
                        <input onChange={handleProduct} name="image" type="text" className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">Price</label>
                        <input onChange={handleProduct} name="price" type="text" className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">Category</label>
                        <input onChange={handleProduct} name="category" type="text" className="form-control" />
                    </div>
                    <button onClick={saveProduct} className='btn btn-primary'>Save Product</button>
                </div>
            </section>

            <section className='sec-coupons'>
                <h3>Coupons</h3>

                <div className="form">
                    <div>
                        <label className="form-label">Code</label>
                        <input onChange={handleCoupon} name="code" type="text" className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">Discount</label>
                        <input onChange={handleCoupon} name="discount" type="text" className="form-control" />
                    </div>
                    <button onClick={saveCoupon} className='btn btn-primary'>Save Coupon</button>
                </div>
            </section>
        </div>
    </div>
);
};

export default Admin;