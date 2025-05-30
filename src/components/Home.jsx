import React, { useState } from 'react';
import './styling/Home.css'; // Styling file

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Delivery platforms data
  const deliveryPlatforms = [
    { 
      id: 1, 
      name: 'Uber Eats', 
      logo: '/images/logocompany.webp',
      url: 'https://www.ubereats.com',
      description: 'Fast delivery from your favorite restaurants',
      rating: 4.7
    },
    { 
      id: 2, 
      name: 'DoorDash', 
      logo: '/images/doordash.jpeg',
      url: 'https://www.doordash.com',
      description: 'Delivery from restaurants, grocery stores, and more',
      rating: 4.6
    },
    { 
      id: 3, 
      name: 'Grubhub', 
      logo: '/images/Grubhub-logo.jpg',
      url: 'https://www.grubhub.com.',
      description: 'Order food delivery from local restaurants',
      rating: 4.5
    },
    { 
      id: 4, 
      name: 'Postmates', 
      logo: '/images/postmates-1.svg',
      url: 'https://www.postmates.',
      description: 'Food, groceries, and anything you need delivered',
      rating: 4.4
    },
    { 
      id: 5, 
      name: 'Deliveroo', 
      logo: '/images/delivero.webp',
      url: 'https://deliveroo.co.uk',
      description: 'Restaurant food delivery to your door',
      rating: 4.6
    },
    { 
      id: 6, 
      name: 'Just Eat', 
      logo: '/images/justeat.webp',
      url: 'https://www.just-eat.co.uk',
      description: 'Order takeaway online from local restaurants',
      rating: 4.5
    }
  ];

  const categories = [
    { id: 1, name: 'Fast Food', icon: '🍔' },
    { id: 2, name: 'Asian', icon: '🍜' },
    { id: 3, name: 'Italian', icon: '🍕' },
    { id: 4, name: 'Healthy', icon: '🥗' },
    { id: 5, name: 'Desserts', icon: '🍰' },
    { id: 6, name: 'Beverages', icon: '🥤' },
  ];

  const promotions = [
    { id: 1, title: 'First Order Discount', description: 'Up to 50% off on your first order', platforms: ['Uber Eats', 'DoorDash'] },
    { id: 2, title: 'Free Delivery', description: 'No delivery fee for orders over $15', platforms: ['Grubhub', 'Postmates'] },
    { id: 3, title: 'Weekend Special', description: '20% off all weekend orders', platforms: ['Deliveroo', 'Just Eat'] },
  ];

  const filteredPlatforms = deliveryPlatforms.filter(platform =>
    platform.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home-page">
      {/* Header with Search Bar */}
      <header className="header">
        <h1>Food Delivery Aggregator</h1>
        <p className="subtitle">Compare and order from all major delivery platforms</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for delivery platforms..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </header>

      {/* Categories Section */}
      <section className="categories-section">
        <h2>Food Categories</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Promotions Section */}
      <section className="promotions-section">
        <h2>Current Promotions</h2>
        <div className="promotions-slider">
          {promotions.map((promo) => (
            <div key={promo.id} className="promo-card">
              <h3>{promo.title}</h3>
              <p>{promo.description}</p>
              <div className="platform-tags">
                {promo.platforms.map((platform, index) => (
                  <span key={index} className="platform-tag">{platform}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Delivery Platforms Section */}
      <section className="platforms-section">
        <h2>Delivery Platforms</h2>
        <div className="platforms-grid">
          {filteredPlatforms.map((platform) => (
            <a 
              key={platform.id} 
              href={platform.url} 
              className="platform-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="platform-logo-container">
                <img 
                  src={platform.logo} 
                  alt={platform.name} 
                  className="platform-logo"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = '/images/default-logo.png';
                  }}
                />
              </div>
              <div className="platform-info">
                <h3>{platform.name}</h3>
                <p className="platform-description">{platform.description}</p>
                <div className="platform-rating">
                  <span className="stars">{"★".repeat(Math.floor(platform.rating))}</span>
                  <span className="rating-value">{platform.rating}</span>
                </div>
                <button className="visit-button">
                  Visit Platform <i className="fas fa-external-link-alt"></i>
                </button>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Food Delivery Aggregator. All rights reserved.</p>
        <div className="footer-links">
          <a href="/aboutus">About Us</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/aboutus">Terms of Service</a>
          <a href="/aboutus">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;