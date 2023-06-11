import React, { useState } from 'react';
import ChackOutItem from './ChackOutItem';
import { connect } from 'react-redux'
import './ChackoutProduct.css';
import { useHistory, Link } from 'react-router-dom';
const ChackOutProduct = (props) => {
    const history = useHistory()
    const hendlePayment = () => {
        localStorage.setItem('total', '')
        history.push('/success')
        window.location.reload()
    }
    const cartProduct = props.cartItem;
    const [checkout, setCheckOut] = useState({
        name: '',
        email: '',
        address: '',
        creditCard: ''
    });
    console.log(checkout);
    const hendleBlur = (e) =>{
        const checkoutInfo = {...checkout};
        checkoutInfo[e.target.name] = e.target.value;
        setCheckOut(checkoutInfo);
    }
    return (
        <div className="container">
            <h1>Checkout</h1>
            <form action="submit_order.php" method="post">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" onChange={hendleBlur} name="name" required />
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" onChange={hendleBlur} name="email" required />
                </div>
                <div class="form-group">
                    <label for="address">Address:</label>
                    <input type="text" id="address" onChange={hendleBlur} name="address" required />
                </div>
                <div class="form-group">
                    <label for="creditCard">Credit Card Number:</label>
                    <input type="text" id="creditCard" onChange={hendleBlur} name="creditCard" required />
                </div>
                {
                    checkout.name == '' || checkout.creditCard == '' || checkout.address == ''|| checkout.email == ''?
                    <button onClick={()=>alert("Please fill the from")} className="btnn">Place Order</button>:
                    <Link to='/success'><button class="btnn">Place Order</button></Link>
                }
                
            </form>
        </div>

    );
};
function mapToStateProps(state) {
    return {
        cartItem: state.cart
    }
}

export default connect(mapToStateProps)(ChackOutProduct);