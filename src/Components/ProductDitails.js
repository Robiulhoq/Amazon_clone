import React from 'react'
import { connect } from 'react-redux';
import './ProductDitails.css';
import { addToCart } from '../StateManager/cartAction';
import product1 from './FakeData/product1.json';
import { useParams } from 'react-router-dom';
import Product from './Product';
function ProductDitails(props) {
    const productId = useParams();
    return (
        <div class="container product_ditails_container">
            <div class="row row-cols-2">
                <div class="col">
                    {
                        product1.map(item => item.id == productId.id ?
                            <div className='product_img_container'>
                                <img src={item.img} alt="" />
                            </div> : null)
                    }
                </div>
                <div class="col">
                    {
                        product1.map(item => item.id == productId.id ? <div className='product_ditails_information'>
                            <h4>{item.title}</h4>
                            <h5 className='mt-2'>$ {item.price}</h5>
                            <h6 className='mt-3'>SELECT SIZE</h6>
                            <ul className='product_select_size mt-2'>
                                <li>S</li>
                                <li>M</li>
                                <li>X</li>
                                <li>XL</li></ul>
                            <button className="btn btn-warning" onClick={()=>props.addCart(item)}>ADD TO BUSKET</button>
                            <h6 className='mt-3'>PRODUCT DITAILS</h6>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, impedit!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, impedit!
                            </p>
                            <h6 className='mt-3'>FEATURED</h6>
                            <li>Lorem, ipsum dolor.</li>
                            <li>Lorem, ipsum dolor.</li>
                            <li>Lorem, ipsum dolor.</li>

                        </div> : null)
                    }
                </div>
                
            </div>
        </div>
    )
}
function mapToDispatch(dispatch){
    return{
        addCart:(cartItem) =>{
            dispatch(addToCart(cartItem))
        }
    }
}
export default connect(null,mapToDispatch)(ProductDitails);