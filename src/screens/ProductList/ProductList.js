import React from "react";
import "./ProductList.css";

const products = [
  {
    id: 1,
    name: "ST DALFOUR FILIPINA BEAUTY NIGHT CREAM",
    image: require("../../assets/images/1717686099_PR.png"),
  },
  {
    id: 2,
    name: "ST. DALFOUR ORANGE VITAMIN C & E SKIN WHITENING SOAP FOR FACE AND BODY",
    image: require("../../assets/images/1717252016_PR.png"),
  },
  {
    id: 3,
    name: "ST. DALFOUR GLUTATHIONE WITH PAPAYA EXTRACTS FACE AND BODY WHITENING SOAP",
    image: require("../../assets/images/1717686434_PR.png"),
  },
  {
    id: 4,
    name: "ST DALFOUR FILIPINA BEAUTY NIGHT CREAM",
    image: require("../../assets/images/1717686099_PR.png"),
  },
  {
    id: 5,
    name: "ST. DALFOUR ORANGE VITAMIN C & E SKIN WHITENING SOAP FOR FACE AND BODY",
    image: require("../../assets/images/1717252016_PR.png"),
  },
  {
    id: 6,
    name: "ST. DALFOUR GLUTATHIONE WITH PAPAYA EXTRACTS FACE AND BODY WHITENING SOAP",
    image: require("../../assets/images/1717686434_PR.png"),
  },
  {
    id: 7,
    name: "ST DALFOUR FILIPINA BEAUTY NIGHT CREAM",
    image: require("../../assets/images/1717686099_PR.png"),
  },
  {
    id: 8,
    name: "ST. DALFOUR ORANGE VITAMIN C & E SKIN WHITENING SOAP FOR FACE AND BODY",
    image: require("../../assets/images/1717252016_PR.png"),
  },
  {
    id: 9,
    name: "ST. DALFOUR GLUTATHIONE WITH PAPAYA EXTRACTS FACE AND BODY WHITENING SOAP",
    image: require("../../assets/images/1717686434_PR.png"),
  },
];

const ProductList = () => {
  return (
    <div className="product-list">
      <h1 className="product-list-title">Product List</h1>
      <div className="product-list-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <button className="product-button">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
