import React from 'react';
import { connect } from 'react-redux';
import './Product.css';
import { addToCart } from '../StateManager/cartAction';

const Product = (props) => {
    
    const {id, title, price, img, rating,catagory} = props.item;
    const addCartItem = {id, title, price, img, rating,catagory};
    
    return (
        <div className='product'>
            <div className="product_info">
                <p>{title}</p>
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
            <button className="btn btn-warning" onClick={()=>props.addCart(addCartItem)}>ADD TO BUSKET</button>
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