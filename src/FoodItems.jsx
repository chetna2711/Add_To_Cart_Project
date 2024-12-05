import React, { useState } from "react";
import food_items from "./data";

const FoodItems = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    alert(`${item.name} is added successfully...`);

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = existingCart.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      existingCart.push({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));

    setCart(existingCart);
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          {food_items.map((food) => (
            <div
              key={food.id}
              className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 d-flex justify-content-center"
            >
              <div
                className="card"
                style={{ width: "100%", maxWidth: "300px" }}
              >
                <img
                  src={food.img}
                  className="card-img-top"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                  alt={food.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{food.name}</h5>
                  <p className="card-text">{food.description}</p>
                  <p className="card-text">
                    <strong>Price: ${food.price}</strong>
                  </p>
                  <button
                    onClick={() => handleAddToCart(food)}
                    className="btn btn-primary w-100"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FoodItems;
