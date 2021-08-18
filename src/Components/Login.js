import { Link, useHistory } from 'react-router-dom';
import React from 'react';
import './Login.css';
import { useState } from 'react';
import {connect} from 'react-redux';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase/firebase.config';
import { setLogInUser } from '../StateManager/cartAction';
firebase.initializeApp(firebaseConfig);
const Login = (props) => {
    const [login, setLogin] = useState({
        email:'',
        password:''
    });
    const history = useHistory()
    const hendleBlur = (e) =>{
        const loginInfo = {...login};
        loginInfo[e.target.name] = e.target.value;
        setLogin(loginInfo)
    }
    const singIn =(e) =>{
        // firebase sing in
        firebase.auth().signInWithEmailAndPassword(login.email, login.password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          if(user){
              props.setUser(user)
            history.push('/')
          }
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage)
        });
        e.preventDefault()
    }
    const ragistar = (e) =>{
        // firebae ragister
        firebase.auth().createUserWithEmailAndPassword(login.email, login.password)
        .then((userCredential) => {
          // Signed in 
          var user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage)
          console.log(errorMessage);
          // ..
        });
        e.preventDefault()
    }
    return (
        <div className='login'>
            <Link to="/">
            <img className="login_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG21.png" alt="" />
            
            </Link>
            <div className="input_container row">
               <div className="col">
               <h3>SING IN</h3>
                <form action="">
                <h5>Email</h5>
                <input onBlur={hendleBlur} name="email" className="form-control" type="email" />
                <h5>password</h5>
                <input onBlur={hendleBlur} name="password" className="form-control"type="password" />
                <button onClick={singIn} className="btn btn-warning mt-4 submit_btn">SUBMIT</button>
                </form>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, rerum?</p>
                <button onClick={ragistar} className="btn btn-warning mt-2 submit_btn">CREATED AMAZON ACCOUNT</button>
               </div>
            </div>
        </div>
    );
};
function mapToDispatchState(dispatch){
    return{
        setUser:(user)=>{
            dispatch(setLogInUser(user))
        }
    }
}
export default connect(null,mapToDispatchState)(Login);