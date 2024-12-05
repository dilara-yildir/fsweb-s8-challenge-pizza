import React, { useState } from "react";
import { Button } from "reactstrap";
import bannerImage from "/assets/Iteration-1-assets/home-banner.png";
import logo from "/assets/Iteration-1-assets/logo.svg";
import Menu from "./sub-component/menu.jsx";
import Cards from "./sub-component/cards.jsx";
import Footer from "./sub-component/footer.jsx";
import PizzaCards from "./sub-component/pizza-card.jsx";


function HomePage({navigate}) {
  const [pizza, setPizza]= useState();
  const [menu, setMenu] = useState();


  return (
    <div>
      <header
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <img src={logo} alt="Teknolojik Yemekler" className="logo" />
        <p className="description">KOD ACIKTIRIR</p>
        <p className="description">PIZZA DOYURUR</p>
        <Button onClick={() => navigate("order")} className="order-button">
          ACIKTIM
        </Button>
      </header>
    
       <Menu setMenu={setMenu}/>
      <section className="bg-light py-5" style={{ width: "100%" }}>
        <Cards  navigate={navigate}/>
        <PizzaCards setPizza={setPizza}/>
      </section>
      <footer className="bg-dark text-white py-4">
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage;
