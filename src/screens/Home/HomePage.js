import React from "react";
import { Link } from "react-router-dom";
import "../Css/HomePage.css";

const categories = [
  { title: "Face Care", image: require(".././../assets/images/img-1.png") },
  // { title: "Face & Body", image: "face-body.jpg" },
  // { title: "Sun Care", image: "sun-care.jpg" },
  // { title: "Under Arms Care", image: "under-arms-care.jpg" },
  // { title: "Body Care", image: "body-care.jpg" },
  // { title: "Instant White", image: "instant-white.jpg" },
];

const HomePage = () => (
  <div>
    {/* Hero Section */}
    <div className="hero">
      <div className="overlay">
        <h2
          style={{ fontSize: 60, color: "white", fontFamily: "revert-layer" }}
        >
          ST. DALFOUR CREAM
        </h2>
        <Link to="/verify" className="verify-btn">
          VERIFY PRODUCT
        </Link>
      </div>
    </div>

    {/* Categories Section */}
    <div className="categories-container">
      {categories.map((category, index) => (
        <div className="category-card" key={index}>
          <img
            src={category.image}
            alt={category.title}
            className="category-image"
          />
          <div className="category-overlay">
            <h3>{category.title}</h3>
            <span className="category-icon">→</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default HomePage;
