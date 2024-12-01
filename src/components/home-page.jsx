import React from "react";
import { Button } from "reactstrap";
import { usePageContext } from "../context.jsx";
import bannerImage from "/assets/Iteration-1-assets/home-banner.png";
import logo from "/assets/Iteration-1-assets/logo.svg";
import Menu from "./sub-component/menu";
import Cards from "./sub-component/cards";
import Footer from "./sub-component/footer";

function HomePage() {
  const { setCurrentPage } = usePageContext(); // Destructuring ile alınmalı

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
        <Button
          color="danger"
          onClick={() => setCurrentPage("order")}
          className="order-button"
        >
          ACIKTIM
        </Button>
      </header>
      <Menu />
      <section className="bg-light py-5" style={{ width: "100%" }}>
        <Cards />
      </section>
      <footer className="bg-dark text-white py-4">
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage;
