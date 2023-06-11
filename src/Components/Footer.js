import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YoutubeIcon from '@material-ui/icons/YouTube';
const Footer = () => {
    return (
        <div className="footer">
            <div class="d-flex justify-content-around align-items-center footer_item">
                <div>
                    <img className='header_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" /> <br />
                    <div class="d-flex justify-content-between">
                        <FacebookIcon />
                        <InstagramIcon />
                        <YoutubeIcon />
                    </div>
                </div>
                <div>
                    <h4>Support</h4>
                    <li>Contact us</li>
                    <li>About us</li>
                    <li>FAQ</li>
                    <li>Downloads</li>
                    <li>Best Sells</li>
                </div>
                <div>
                    <p>Stay up to date on our marktplace. please subscribe!!</p>
                    <div className='subscrive'>
                        <input type="text" placeholder='Enter your email' />
                        <button>subscribe</button></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;