import "./App.css";
import OrderForm from "./components/order-form";
import HomePage from "./components/home-page";
import SuccessOrder from "./components/success-order";
import React, { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  function navigate(data) {
    setCurrentPage(data);
  }

  return (
    <>
      {currentPage === "home" && <HomePage navigate={navigate} />}
      {currentPage === "order" && <OrderForm navigate={navigate} currentPage={currentPage} />}
      {currentPage === "success" && <SuccessOrder />}
    </>
  );

}

export default App;
