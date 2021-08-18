import React from 'react';
import ChackOutItem from './ChackOutItem';
import {connect} from 'react-redux'
import './ChackoutProduct.css';
import { useHistory } from 'react-router-dom';
const ChackOutProduct = (props) => {
    const history = useHistory()
    const hendlePayment = () =>{
        localStorage.setItem('total','')
        history.push('/success')
        window.location.reload()
    }
    const cartProduct = props.cartItem;
    return (
        <div className="payment">
            <div className="payment_container">
                <h2>Chackout({cartProduct?.length}Item)</h2>
                <div className="payment_section">
                    <div className="payment_title">
                        <h4>Delivery Address</h4>
                        <div className="payment_address">
                            <p>Shihan, Acadamy</p>
                            <p>Feni, Bangladesh</p>
                            <div className="payment_section">
                                <h3>Review item and delevary</h3>
                                <div className="payment_item">
                                      
                    {
                        cartProduct.map(items => <ChackOutItem item ={items}></ChackOutItem> )
                    }
                                </div>
                                <div className="payment_method">
                                    <h2>Payment method</h2>
                                        
                                        <button onClick={hendlePayment} className="btn btn-warning">Pay{localStorage.getItem('total')}</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
};
function mapToStateProps(state){
    return{
        cartItem:state.cart
    }
}

export default connect(mapToStateProps)(ChackOutProduct);