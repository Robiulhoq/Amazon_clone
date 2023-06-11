import React from 'react';
import { connect } from 'react-redux';
import {removeFromCart} from '../StateManager/cartAction';
import './chackOutItem.css';
const ChackOutItem = (props) => {
    const {title,id,img,price} =props.item;
    const countPrice = 1;
    return (
        <div className="chackout_container">
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="info_container">
            <h4>{title}</h4>
            <p>$ {price}</p>
            <button className="btn btn-warning" onClick={()=>props.removeCart(id)}>remove</button>
            </div>
        </div>
    );
};
function mapToDispatchProps(dispatch){
    return{
        removeCart:(id)=>{
            dispatch(removeFromCart(id))
        }
    }
}

export default connect(null,mapToDispatchProps)(ChackOutItem);