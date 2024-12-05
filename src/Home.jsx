import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import FoodItems from './FoodItems'

const Home = () => {
  return (
    <>
    <Navbar></Navbar>
       <div class="container mt-5">
      <h2 class="text-center mb-4 text-info fw-bold">
        Order Your Favorite Food
      </h2>

      <FoodItems></FoodItems>
    

      <div id="products" class="row gy-4 justify-content-center">

      </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Home
