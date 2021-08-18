import React, { useEffect, useState } from 'react';
import './Subtotal.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Subtotal = (props) => {
    const cartPrice = props.cartItem;
    // const [price, setPrice] = useState({});
    if(cartPrice.length){
        const subTotal = cartPrice.map(cart => parseInt(cart.price));
        const total = subTotal.reduce((td, item) => td+item)
        localStorage.setItem('total',total)
    }
  if(cartPrice.length === 0){
      localStorage.setItem('total','')
  }

    return (
        <div className="subtotal">

          <p><b>Subtotal ({cartPrice.length} Items):{localStorage.getItem('total')}</b></p>
          {
              cartPrice.length?
              <Link to="/chackOutProduct"><button  className='btn btn-warning'>Proced To Chackout👉🏼</button></Link>:
              <p>No Product Add To Cart</p>
          }
       
           
        </div>
    );
};
function mapToStateProps(state){
    return{
        cartItem:state.cart
    }
}

export default connect(mapToStateProps) (Subtotal);