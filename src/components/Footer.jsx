import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaUtensils, FaMotorcycle } from 'react-icons/fa';
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
          <h5 className="footer-title">About Leeiyorn's Quick Meals</h5>
          <p>
            Leeiyorn's Quick Meals is your go-to solution for fast, reliable, and delicious meal delivery. 
            Whether you're working late, studying, or just relaxing at home, we ensure your favorite 
            meals arrive at your door hot and fresh. With a curated selection of top-rated restaurants, 
            we bring a gourmet experience right to your table — no hassle, just flavor!
          </p>
          <div className="animated-icon">
            <FaUtensils size={24} />
          </div>
          <p>
            <Link to="/aboutus" className="footer-link">
              Discover Our Story...
            </Link>
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="col-md-4 footer-contact">
          <h5 className="footer-title">We'd Love to Hear from You</h5>
          <p>
            Got a question, suggestion, or craving a partnership? Drop us a message and we'll get back to 
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
              placeholder="Tell us what's on your mind..."
              className="form-textarea"
            ></textarea>
            <button type="submit" className="submit-btn">
              Send Message <FaEnvelope className="send-icon" />
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
            <a 
              href="https://facebook.com" 
              className="social-icon facebook" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaFacebook size={20} className="icon" />
              <span>Facebook</span>
            </a>
            <a 
              href="https://instagram.com" 
              className="social-icon instagram" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} className="icon" />
              <span>Instagram</span>
            </a>
          </div>
          <div className="contact-info mt-3">
            <strong>Call or WhatsApp Us:</strong>
            <div className="phone-item">
              <FaPhone className="phone-icon" />
              <span>+254 721 512 266</span>
            </div>
            <div className="phone-item">
              <FaPhone className="phone-icon" />
              <span>+254 726 208 483</span>
            </div>
          </div>
          <div className="animated-icon">
            <FaMotorcycle size={24} />
          </div>
        </div>
      </section>

      {/* Bottom Footer Note */}
      <footer className="footer-bottom text-center mt-4">
        <h5>
          Designed & Developed with <span className="heart">❤️</span> by <strong>Leeiyorn</strong> &copy; {new Date().getFullYear()}. All rights reserved.
        </h5>
        <p>
          SquickMeals — Satisfying your cravings, one quick delivery at a time.
        </p>
      </footer>
    </div>
  );
};

export default Footer;