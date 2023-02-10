import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function Product() {

  let source = ["https://static.wixstatic.com/media/ead566_a12b3feb70ae46139eee97c99f6ecebf~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01/ead566_a12b3feb70ae46139eee97c99f6ecebf~mv2.webp", "https://static.wixstatic.com/media/ead566_14e75a560cbc411ead722de92eaf8189~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01/ead566_14e75a560cbc411ead722de92eaf8189~mv2.webp", "https://static.wixstatic.com/media/ead566_1e4ebac233ca43019bafaa65d0a4eeb1~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01/ead566_1e4ebac233ca43019bafaa65d0a4eeb1~mv2.webp", "https://static.wixstatic.com/media/ead566_cad5cb7b64444962ade1c6fea43b525b~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01/ead566_cad5cb7b64444962ade1c6fea43b525b~mv2.webp", "https://static.wixstatic.com/media/ead566_621d6a0ac1514a7892713f2aec051f51~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01/ead566_621d6a0ac1514a7892713f2aec051f51~mv2.webp", "https://static.wixstatic.com/media/ead566_f6bd1296bdc747c0b1ecd468719a05e4~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01/ead566_f6bd1296bdc747c0b1ecd468719a05e4~mv2.webp"]


  const [quantity, setQuantiy] = useState(1);

  const handleDecrement = () => {
    (quantity === 0)? setQuantiy(0): setQuantiy(prevCount => prevCount - 1);
  }

  const handleIncrement = () => {
    setQuantiy(prevCount => prevCount + 1);
  }

  return (
    <>
      <div className="container" id='d1'>
        <div className="c1" id='carousel'>
          <Carousel slide={true} >
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={source[0]}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Sustainability Kit</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={source[1]}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Reusable Cup</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={source[2]}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Bamboo Straws</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={source[3]}
                alt="Fourth slide"
              />
              <Carousel.Caption>
                <h3>Bamboo Cotton Eartips</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={source[4]}
                alt="Fifth slide"
              />
              <Carousel.Caption>
                <h3>Toothbrush</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={source[5]}
                alt="Sixth slide"
              />
              <Carousel.Caption>
                <h3>Natural Loofah</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div className="row mx-1">
            <div className="col-md-3 mt-5 mx-4" id='button'>
              <button type="button" className="btn btn-success btn-lg" id='b1'><i className="fa-solid fa-bag-shopping mx-2" ></i>Purchase</button>
            </div>
            <div className="col-md-3 mt-5 " id='price'>
              <span className="current">€10.99</span>
              <span className="old mx-3"><del>€21.98</del></span>
            </div>
            <div className="col-md-3 mt-5 mx-5" id='quantity'>
              <div className="input-group mx-5">
                <button type="button" onClick={handleDecrement} className="input-group-text">-</button>
                <div className="form-control text-center">{quantity}</div>
                <button type="button" onClick={handleIncrement} className="input-group-text">+</button>
              </div>
            </div>
          </div>
        </div>
        <div className="details" style={{ fontSize: "20px" }}>
          <div className='container' style={{ color: "black" }}>
            <div className="items">
            <b><h1>Sustainability Starter Kit</h1></b>
              Consists of:
              <ul>
                <li>2 Bamboo Straws</li>
                <li>1 Plant Based Reusable Cup with 2 lids</li>
                <li>1 Natural Loofah</li>
                <li>1 box of 50 Bamboo Cotton Eartips</li>
                <li>1 Bamboo Toothbrush</li>
              </ul>
            </div>
            <div className="features">
              Features:
              <ul>
                <li>Govt Approved, Tested, and approved in TUV Rhineland, Germany</li>
                <li>100% recyclable and non-toxic</li>
                <li>Leak-Proof</li>
                <li>Odorless tasteless and doesn't react with hot beverages</li>
                <li>Lightweight</li>
                <li>Microwavable</li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}


