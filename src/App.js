import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
