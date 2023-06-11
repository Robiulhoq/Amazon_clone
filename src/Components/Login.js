import { Link, useHistory } from 'react-router-dom';
import React from 'react';
import './Login.css';
import { useState } from 'react';
import { connect } from 'react-redux';
import { setLogInUser } from '../StateManager/cartAction';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBl7YM-91AP14N1cZlkY7wV0LeSsETTKJM",
    authDomain: "clone-192e4.firebaseapp.com",
    projectId: "clone-192e4",
    storageBucket: "clone-192e4.appspot.com",
    messagingSenderId: "677693458417",
    appId: "1:677693458417:web:5e73b00d83ef6e3fbae650",
    measurementId: "G-QDEPL5S5DM"
}
const app = initializeApp(firebaseConfig);
const Login = (props) => {
    const [login, setLogin] = useState({
        name:'',
        email: '',
        password: ''
    });
    console.log(login);
    const history = useHistory();
    const hendleBlur = (e) => {
        const loginInfo = { ...login };
        loginInfo[e.target.name] = e.target.value;
        setLogin(loginInfo)
    }
    const auth = getAuth(app);
    const register = (e) => {
        createUserWithEmailAndPassword(auth, login.email, login.password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: login.name,
                  }).then(() => {
                   props.setUser(user);
                    history.push('/');
                  }).catch((error) => {
                    console.log(error);
                  });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
        e.preventDefault()

    }
    const singIn = (e) => {
        signInWithEmailAndPassword(auth, login.email, login.password)
            .then((userCredential) => {
                const user = userCredential.user;
               props.setUser(user);
                history.push('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
            e.preventDefault()
    }
    const [newUser, setNewuser] = useState(true);
    return (
        <div className='login'>
            <Link to="/">
                <img className="login_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG21.png" alt="" /></Link>
            {
                newUser ?
                    <div className="input_container">
                        <div className="">
                            <h3>SING IN</h3>
                            <form action="">
                                <p>Email</p>
                                <input onBlur={hendleBlur} name="email" className="form-control" type="email" placeholder='Enter email' />
                                <p>password</p>
                                <input onBlur={hendleBlur} name="password" className="form-control" type="password" placeholder='Enter password' /><br />
                                <input onClick={singIn} className="form-control btn-warning" type='submit' value='SUBMIT' />
                            </form>
                            <p>Don't have an account?</p>
                            <input onClick={() => setNewuser(false)} className="form-control btn-warning" type='submit' value='CREATE AMAZON ACCOUNT' />
                        </div>
                    </div> : <div className="input_container">
                        <div className="">
                            <h3>CREATE ACCOUNT</h3>
                            <form action="">
                                <p>Name</p>
                                <input onBlur={hendleBlur} name="name" className="form-control" type="name" placeholder='Enter name' />
                                <p>Email</p>
                                <input onBlur={hendleBlur} name="email" className="form-control" type="email" placeholder='Enter email' />
                                <p>Password</p>
                                <input onBlur={hendleBlur} name="password" className="form-control" type="password" placeholder='Enter password' /><br />
                                <input onClick={register} className="form-control btn-warning" type='submit' value='SUBMIT' />
                            </form>
                            <p>All ready have an account?</p>
                            <input onClick={() => setNewuser(true)} className="form-control btn-warning" type='submit' value='SING IN' />
                        </div>
                    </div>
            }

        </div>
    );

};
function mapToDispatchState(dispatch) {
    return {
        setUser: (user) => {
            dispatch(setLogInUser(user))
        }
    }
}
export default connect(null, mapToDispatchState)(Login);