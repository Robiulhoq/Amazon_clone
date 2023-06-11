import React, { useState } from 'react';
import './Home.css';
import Product from './Product';
import product1 from './FakeData/product1.json';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const Home = () => {
  const sliderImage = [
    "https://res.cloudinary.com/dv8sz8mml/image/upload/c_scale,w_1000/v1686395543/amazon_clone/Untitled_design_krbhr8.png",
    "https://res.cloudinary.com/dv8sz8mml/image/upload/c_scale,w_1000/v1686395543/amazon_clone/Untitled_design_1_fvhjt5.png",
    "https://res.cloudinary.com/dv8sz8mml/image/upload/c_scale,w_1000/v1686395542/amazon_clone/Get_it_on_the_App_Store_mashyd.png"
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const prev = () => {
    if(currentSlide <= 0){
      setCurrentSlide(1);
    }
    setCurrentSlide(currentSlide => currentSlide - 1);
  }

  const next = () => {
    if(currentSlide >= 2){
      setCurrentSlide(1)
    }
    setCurrentSlide(currentSlide => currentSlide + 1);
  }

  return (
    <div className='home'>
      <div className="header_image_slider">
        {sliderImage.map((item, index) => (
          <img
            key={index}
            className={`slider_img ${index === currentSlide ? 'active' : ''}`}
            src={item}
            alt=""
          />
        ))}
        <div className="slider_button">
          <KeyboardArrowLeftIcon className='slider_left_arrow' onClick={prev}/>
          <KeyboardArrowRightIcon className='slider_right_arrow' onClick={next}/>
        </div>
      </div>
      <h4 className='text-center m-4'>Popular products</h4>
      <div className="home_row">
      {
                    product1.map(item => item.catagory === "mango" ? <Product item={item}></Product> : null)
                }
                {
                    product1.map(item => item.catagory === "lisu" ? <Product item={item}></Product> : null)
                }
      </div>
      <h4 className='text-center m-4'>Digital products</h4>
      <div className="home_row">
      {
                    product1.map(item => item.catagory === "jam" ? <Product item={item}></Product> : null)
                }
                {
                    product1.map(item => item.catagory === "apple" ? <Product item={item}></Product> : null)
                }
                {
                    product1.map(item => item.catagory === "orange" ? <Product item={item}></Product> : null)
                }
      </div>
    </div>
  );
};

export default Home;
