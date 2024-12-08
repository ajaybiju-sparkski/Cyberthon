import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer-title">Our Sponsors</h2>

      <div className="sponsors">
        <img src="image 1.png" alt="Polygon" className="sponsor-logo" />
        <img src="image 2.png" alt="ETHIndia" className="sponsor-logo" />
        <img src="image 3.png" alt="Fold" className="sponsor-logo" />
      </div>

      <div className="contact">
        <p>
          <span>Gokul: </span>
          <a href="tel:+919384918930" className="contact-link">
            +91 93849 18930
          </a>
        </p>
        <p>
          <span>Vignesh: </span>
          <a href="tel:+919822128899" className="contact-link">
            +91 98221 28899
          </a>
        </p>
      </div>

      <div className="social-media">
        <a href="#" className="social-link">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="social-link">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="social-link">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="social-link">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
