import { Link } from "react-router-dom";
import './styling/Footer.css'; // Make sure to create this CSS file

const Footer = () => {
  return (
    <div className="footer-container">
      {/* Floating Food Animations */}
      <div className="floating-foods">
        <div className="food-item pizza">🍕</div>
        <div className="food-item burger">🍔</div>
        <div className="food-item soda">🥤</div>
        <div className="food-item icecream">🍦</div>
      </div>

      <section className="row footer-background">
        {/* About Us Section */}
        <div className="col-md-4 footer-about">
          <h5 className="footer-title">About SquickMeals</h5>
          <p>
            SquickMeals is your go-to solution for fast, reliable, and delicious meal delivery. 
            Whether you're working late, studying, or just relaxing at home, we ensure your favorite 
            meals arrive at your door hot and fresh. With a curated selection of top-rated restaurants, 
            we bring a gourmet experience right to your table — no hassle, just flavor!
          </p>
          <div className="animated-plate">🍽️</div>
          <p>
            <Link to="/aboutus" className="footer-link">
              Discover Our Story...
            </Link>
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="col-md-4 footer-contact">
          <h5 className="footer-title">We’d Love to Hear from You</h5>
          <p>
            Got a question, suggestion, or craving a partnership? Drop us a message and we’ll get back to 
            you faster than your next order arrives. Your feedback helps us improve every bite of your experience.
          </p>
          <form className="footer-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="form-input"
            />
            <textarea
              rows="4"
              placeholder="Tell us what’s on your mind..."
              className="form-textarea"
            ></textarea>
            <button type="submit" className="submit-btn">
              Send Message <span className="send-icon">✉️</span>
            </button>
          </form>
        </div>

        {/* Social & Contact Info Section */}
        <div className="col-md-4 footer-social">
          <h5 className="footer-title">Stay Connected</h5>
          <p>
            Follow us on social media and be the first to know about special deals, new 
            restaurant partners, and exciting updates from the SquickMeals community.
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <span className="icon-facebook">📘 Facebook</span>
            </a>
            <br />
            <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <span className="icon-instagram">📷 Instagram</span>
            </a>
          </div>
          <p className="contact-info mt-3">
            <strong>Call or WhatsApp Us:</strong><br />
            <span className="phone-icon">📞</span> +254 721 512 266<br />
            <span className="phone-icon">📞</span> +254 726 208 483
          </p>
          <div className="animated-delivery">🚚</div>
        </div>
      </section>

      {/* Bottom Footer Note */}
      <footer className="footer-bottom text-center mt-4">
        <h5>
          Designed & Developed with ❤️ by <strong>Leeiyorn</strong> &copy; {new Date().getFullYear()}. All rights reserved.
        </h5>
        <p>
          SquickMeals — Satisfying your cravings, one quick delivery at a time.
        </p>
      </footer>
    </div>
  );
};

export default Footer;