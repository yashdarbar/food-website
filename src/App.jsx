import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FoodDeliveryDashboard from "./pages/FoodDeliveryDashboard.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FoodDeliveryDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
