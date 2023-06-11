import React from 'react';
import { connect } from 'react-redux';
import './Product.css';
import { addToCart } from '../StateManager/cartAction';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link, useParams } from 'react-router-dom';
const Product = (props) => {
    
    const {id, title, des, price, img, rating,catagory} = props.item;
    const addCartItem = {id, title, price, img, rating,catagory};
    const productId = useParams();
    return (
        <div className='product'>
            <div className="product_info">
                <h6>{title}</h6>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                    <div className="product_rating">
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>⭐⭐⭐</p>
                            ))}
                    </div>
                </p>
            </div>
            <img src={img} alt="" />
            <div className="d-flex justify-content-between group_btn"><button className="btn btn-warning" onClick={()=>props.addCart(addCartItem)}>ADD TO BUSKET</button>
            
            <Link to={`/product/${id}`} ><VisibilityIcon/></Link>
            </div>
        </div>
    );
};
function mapToDispatch(dispatch){
    return{
        addCart:(cartItem) =>{
            dispatch(addToCart(cartItem))
        }
    }
}

export default connect(null,mapToDispatch)(Product);