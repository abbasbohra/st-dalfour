import React from "react";
import "./Contact.css"; // Include the CSS provided below

const ContactSection = () => {
  return (
    <div className="contact-container">
      {/* Live Chat Section */}
      <div className="live-chat">
        <h2>Use Live Chat or Contact Us</h2>
        <div className="chat-box">
          <h3>Hi there 👋</h3>
          <p>Need help? Start a conversation:</p>
          <form>
            <label htmlFor="name">* Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="phone">* Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />

            <button type="submit">Start Chat</button>
          </form>
        </div>
        <p className="live-chat-footer">
          🌱 Add free <a href="#">live chat</a> to your site
        </p>
      </div>

      {/* More Info Section */}
      <div className="more-info">
        <h3>More Info</h3>
        <ul>
          <li>📧 admin@rcream.com</li>
          <li>🌐 stdalfourcream.vercel.app.com</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactSection;
