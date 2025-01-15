import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";// Import the QR code component
import "./App.css";

const Home = () => (
  <div className="hero">
    <div className="overlay">
      <h2 style={{ fontSize: 60, color: "white", fontFamily: "revert-layer" }}>
        ST. DALFOUR CREAM
      </h2>
      <Link to="/verify" className="verify-btn">
        VERIFY PRODUCT
      </Link>
      <div className="qr-section">
        <h3>Scan the QR Code to visit our website:</h3>
      <QRCodeSVG value="https://reactjs.org/" />,
      </div>
    </div>
  </div>
);

const VerifyProduct = () => (
  <div className="page-content">
    <h2 className="page-name">Verify Product</h2>
    <h1>Under Maintenance</h1>
  </div>
);

const Products = () => (
  <div className="page-content">
    <h2 className="page-name">Products</h2>
    <h1>Under Maintenance</h1>
  </div>
);

const Contact = () => (
  <div className="page-content">
    <h2 className="page-name">Contact</h2>
    <h1>Under Maintenance</h1>
  </div>
);

const Arabic = () => (
  <div className="page-content">
    <h2 className="page-name">العربية</h2>
    <h1>Under Maintenance</h1>
  </div>
);


const App = () => (
  <Router>
    <div>
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="brand">
          <img
            src={require("./assets/images/logo.png")}
            alt="Logo"
            className="logo"
          />
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/verify">Verify Product</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/ar">العربية</Link>
          </li>
        </ul>
      </nav>

      {/* Main Content Section */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verify" element={<VerifyProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ar" element={<Arabic />} />
      </Routes>
    </div>
  </Router>
);

export default App;
