import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Product from './components/Product';
import Slider from './components/Slider';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  let imageSrc = ["https://www.realsimple.com/thmb/kMnbpnFZwmJbDlb2kj9OHF4UZcs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sustainable-2000-b7db4bede9a44f31b13024be4de35c95.jpg","https://cdn.shopify.com/s/files/1/0267/1699/5754/articles/373e577807794d147200b7e7c2a10d86_800x.jpg?v=1663327444", "https://youthincmag.com/wp-content/uploads/2021/10/iStock-1161748765.jpg", "https://thecspo.org/wp-content/uploads/0.2.jpg"]

  return (
    <Router>
        <Navbar/>
      <Routes>      
            <Route exact path="/Home" element={<React.Fragment>
                <div style={{backgroundColor:'black'}}><Home imageSrc={imageSrc[0]} title={"EARTHLY"}/>/
                <Slider imageSrc = {imageSrc[1]} title = {"Save Environment"} subtitle = {"Sustainable products at affordable prices"} />
                <Slider imageSrc = {imageSrc[2]} title = {"Reduce-Reuse-Recycle"} subtitle = {"Start your journey to save the environment"} flipped={true}/>
                <Slider imageSrc = {imageSrc[3]} title = {"Get Huge Discount!"} subtitle = {"All products are easy to use."} /></div>
              </React.Fragment>}></Route>
            <Route exact path="/Product" element={<Product />}/>
      </Routes>
      </Router>
  );
}

export default App;
