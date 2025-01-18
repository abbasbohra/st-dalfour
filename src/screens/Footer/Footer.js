// Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faDribbble,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.icons}>
        <FontAwesomeIcon icon={faTwitter} style={styles.icon} />
        <FontAwesomeIcon icon={faFacebook} style={styles.icon} />
        <FontAwesomeIcon icon={faInstagram} style={styles.icon} />
        <FontAwesomeIcon icon={faDribbble} style={styles.icon} />
        <FontAwesomeIcon icon={faYoutube} style={styles.icon} />
      </div>
      <p style={styles.copyright}>
        Copyright 2024 St. Dalfour. All Rights Reserved.
      </p>
      <div style={styles.chat}>
        <div style={styles.chatButton}>
          LET'S CHAT!
          <span style={styles.notification}>1</span>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
    position: "relative",
    minHeight: 150,
    bottom: 0,
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "10px",
  },
  icon: {
    fontSize: "30px",
    cursor: "pointer",
    margin: "10px",
    color: "#808080",
  },
  copyright: {
    fontSize: "16px",
    margin: "10px",
    marginTop: "20px",
    color: "#808080",
  },
  chat: {
    position: "absolute",
    right: "20px",
    bottom: "20px",
  },
  chatButton: {
    backgroundColor: "#002b77",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "14px",
    padding: "10px 20px",
    borderRadius: "50px",
    position: "relative",
    cursor: "pointer",
  },
  notification: {
    backgroundColor: "red",
    color: "white",
    fontSize: "12px",
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "-5px",
    right: "-10px",
  },
};

export default Footer;
