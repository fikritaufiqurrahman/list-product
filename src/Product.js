import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
function Product(){
    const [data, setProduct] = useState([]);
    const params = useParams();
    useEffect(()=>{
        fetchProduct();
    }, []);
    function fetchProduct(){
        axios
        .get(`https://shoppingapiacme.herokuapp.com/shopping/?id=${params.id}`)
        .then((res)=>{
            setProduct(res.data);
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return(
       <div>
        {data.map((item)=>{
            return(
                <div className="product-container" key={item.id}>
                    <div>
                        <img className="prod-image" src={item.image} alt="" />
                    </div>
                    <div>
                        <h1 className="brand">{item.brand}</h1>
                        <h2>{item.item}</h2>
                        <p><strong>Price:</strong> {item.price}</p>
                        <p><strong>Color:</strong> {item.color}</p>
                        <Link className="btn" to={'/'}>Back</Link>
                    </div>
                </div>
            )
        })}
       </div>
    )
}
export default Product;