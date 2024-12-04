import "./App.css";
import OrderForm from "./components/order-form";
import HomePage from "./components/home-page";
import SuccessOrder from "./components/success-order";
import React, { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [pizza, setPizza] = useState();
  const [selectPizza, setSelectPizza] = useState();
  function navigate(data) {
    setCurrentPage(data);
  }

  return (
    <>
      {currentPage === "home" && (
        <HomePage navigate={navigate} setSelectPizza={setSelectPizza} />
      )}
      {currentPage === "order" && (
        <OrderForm
          navigate={navigate}
          currentPage={currentPage}
          pizza={setPizza}
          selectPizza={selectPizza}
        />
      )}
      {currentPage === "success" && <SuccessOrder pizza={pizza} />}
    </>
  );
}

export default App;
