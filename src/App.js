import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react"; // Import the QR code component
import "./App.css";
import Navbar from "./component/Navbar";
import ProductList from "./screens/ProductList/ProductList";
import ContactSection from "./screens/Contact/Contact";
import Footer from "./screens/Footer/Footer";
import VerifyProduct from "./screens/VerifyProduct/VerifyProduct";

const Home = () => (
  <div className="hero">
    <div className="overlay">
      <h2 style={{ fontSize: 60, color: "white", fontFamily: "revert-layer" }}>
        ST. DALFOUR CREAM
      </h2>
      <Link to="/verify" className="verify-btn">
        VERIFY PRODUCT
      </Link>
      {/* <div className="qr-section">
        <h3>Scan the QR Code to visit our website:</h3>
        <QRCodeSVG value="https://st-dalfour-virid.vercel.app/" />,
      </div> */}
    </div>
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
     <Navbar/>
      {/* Main Content Section */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verify" element={<VerifyProduct />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/ar" element={<Arabic />} />
      </Routes>
      <Footer/>
    </div>
  </Router>
);

export default App;
