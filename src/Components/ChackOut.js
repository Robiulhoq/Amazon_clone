import React, { useEffect, useState } from 'react';
import './ChackOut.css';
import Subtotal from './Subtotal';
import { connect } from 'react-redux';  
import ChackOutItem from './ChackOutItem';
const ChackOut = (props) => {
    const cartProduct = props.cartItem;
  
    return (
        <div className="chackout">
            <div className="chackout_left">
                <div className="chackout_title">
                    <h2>Your Shopping Busket</h2>
                    
                    {
                        cartProduct.map(items => <ChackOutItem item ={items}></ChackOutItem> )
                    }
                    
                </div>
            </div>
            <div className="chackout_right">
                <Subtotal cartPd={cartProduct} />
            </div>
        </div>
    );
};
function mapToStateProps(state){
    return{
        cartItem:state.cart
    }
}
export default connect(mapToStateProps) (ChackOut);