import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Cart = () => {
  const [foodItems, setFoodItems] = useState([]); 
  const [cart, setCart] = useState([]); 


  useEffect(() => {
    const storedFoodItems =
      JSON.parse(localStorage.getItem("food_items")) || [];
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    setFoodItems(storedFoodItems);
    setCart(storedCart);
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div>
      <h2 class="text-center mb-4 text-info fw-bold mt-3">
         Cart Page
      </h2>
        <div className="table-responsive-sm mt-3">
          <table className="table table-striped text-center">
            <thead className="table-dark">
              <tr>
                <th scope="col">Item Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Cart;
