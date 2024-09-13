// ## Namaste React Course by Akshay Saini
// Chapter 04 - Talk is Cheap, show me the code

import React from "react";
import ReactDOM from "react-dom/client";
import ChildImg from "./images/child.jpg";
import HandImage from "./images/Hand image.png";
import Card from "./src/components/card";
import Mission from "./src/components/mission";
import Navbar from "./src/components/navbar";
import Slider from "./src/components/slider";
import "bootstrap/dist/css/bootstrap.min.css";
import Story from "./src/components/story";

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// Header component for header section: Logo, Nav Items
const Header = () => {
  return <Navbar />;
};

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = () => {
  return (
    <>
      <div class="main-image">
        <img
          className="mainImg"
          src={ChildImg}
          alt="main img"
          class="img-fluid"
          width="100%"
        />
      </div>
      <div className="ngo-thought">
        <h1>WELCOME TO NULIFE</h1>
        <p>
          God has obligated himself only to the extent of our needs.that would
          include food, clothing, shelter, companionship, love, and savation
          through jesus christ...
          <img className="hand" src={HandImage} alt="Hand image" />
        </p>
      </div>
      <div class="keyPoint">
        <h2>Our Key Interventions: Creating Oppertunities Through Education</h2>
      </div>

      <div class="card">
        <Card />
      </div>
      <div class="mission">
        <Mission />
      </div>
      <div class="slider">
        <Slider />
      </div>

      <div class="story">
        <Story />
      </div>
    </>
  );
};

// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i class="fa-solid fa-heart"></i>
      <a href="https://www.linkedin.com/in/chetannada/" target="_blank">
        Mohit Tiwari
      </a>
      <i class="fa-solid fa-copyright"></i>
      {year}
      <strong>
        Nulife<span>NGO</span>
      </strong>
    </div>
  );
};

// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
