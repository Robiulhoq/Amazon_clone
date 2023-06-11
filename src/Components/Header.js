import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeLoginUser } from '../StateManager/cartAction';


const Header = (props) => {
    const cartProduct = props.cartItem;
    const user = props.loginInfo;
    const  hendleSingOut = () =>{
        
    }
    return (
        <div className='header'>
           <Link to="/"> <img className='header_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" /></Link>
            <div className="header_search">
                <input className='header_searcInput'  type="text" />
                <SearchIcon className="header_searchIcon" ></SearchIcon>
            </div>
            <div className="header_nav">
                <Link style={{textDecoration:'none'}} to={!user && "/login"}>
                <div onClick={hendleSingOut} className="header_option">
                    <span className='header_optionLineOne'>Hey! {user?.displayName}</span>
                    <span className='header_optionLineTwo'>{user?<p>SingOut</p>:<p>singin</p>}</span>
                </div>
                </Link>
                <div className="header_option">
                <span className='header_optionLineOne'>Returns</span>
                    <span className='header_optionLineTwo'>& Odder</span>
                </div>
                <div className="header_option">
                    <span className='header_optionLineOne'>Your</span>
                    <span className='header_optionLineTwo'>Prime</span>
                </div>
                <div className="header_optionBusket">
                        <Link className="chackout_link" to="/chackout">
                   <ShoppingBasketIcon></ShoppingBasketIcon>
                    <span className='header_optionLineTwo header_basketCount'>{cartProduct.length}</span>
                 </Link>
                </div>
            </div>

        </div>
    );
};
function mapToStateProps(state){
    return{
        cartItem:state.cart,
        loginInfo:state.loginUser
    }
}
function mapToDispatchState(dispatch){
    return{
        removeUser:(v)=>{
            dispatch(removeLoginUser(v))
        }
    }
}
export default connect(mapToStateProps, mapToDispatchState)(Header);