import React from 'react';
import './Home.css';
import Product from './Product';
import product1 from './FakeData/product1.json';
const Home = () => {

    return (
        <div className='home'>
            <div className="home_container">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div className="carousel-item active" data-bs-interval="1500">
      <img className="home_image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item"data-bs-interval="2000">
      <img className="home_image"src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img className="home_image"src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            </div>
            <div className="home_row">
                {
                    product1.map(item => item.catagory === "mango" ? <Product item={item}></Product> : null)
                }
                {
                    product1.map(item => item.catagory === "lisu" ? <Product item={item}></Product> : null)
                }


            </div>
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
            <div className="home_row">
                {/* {
                    product1.map(item => item.catagory === "mango" ? <Product item={item}></Product> : null)
                } */}
            </div>
        </div>
    );
};

export default Home;