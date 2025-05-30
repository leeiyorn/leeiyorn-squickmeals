import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { Carousel } from "bootstrap/dist/js/bootstrap.min";
import { FaShoppingCart, FaComments, FaTrash } from 'react-icons/fa';





import ImageCarousel from "./Carousel";

import Chatbot from "./Chatbot"

const Getmeals = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [proceeding, setProceeding] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");

  const navigate = useNavigate();
  const img_url = "https://leeiyorn.pythonanywhere.com/static/images/";

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://leeiyorn.pythonanywhere.com/api/getproducts");
        setProducts(response.data);
      } catch (error) {
        setError("Failed to load meals.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filtered_products = products.filter((item) =>
    item.product_name.toLowerCase().includes(search.toLowerCase()) ||
    item.product_description.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return removeFromCart(id);
    setCart(cart.map(item => item.id === id ? { ...item, quantity: newQty } : item));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.product_cost * item.quantity, 0);
  };

  const proceedToPayment = () => {
    setProceeding(true);
    setTimeout(() => {
      navigate("/payup", { state: { cart } });
    }, 1000);
  };

  const handleChatSubmit = () => {
    if (!chatInput.trim()) return;
    const userMessage = { sender: "user", text: chatInput };
    const botMessage = { sender: "bot", text: generateBotResponse(chatInput) };
    setChatMessages([...chatMessages, userMessage, botMessage]);
    setChatInput("");
  };

  const generateBotResponse = (input) => {
    const text = input.toLowerCase();
    if (text.includes("delivery")) return "We offer quick deliveries within your area.";
    if (text.includes("payment")) return "We accept M-PESA for all orders.";
    if (text.includes("menu") || text.includes("meals")) return "Browse our meal options above.";
    return "I'm here to help with meals, delivery, or payments!";
  };

  return (
    <div className="mycontainer2" style={{ position: 'relative' }}>
      {/* Inline styles */}
      <style>
        {`
        .cart-icon {
          border: 2px solid #0b5ed7;
          border-radius: 50%;
          padding: 10px;
          margin-left: 10px;
          cursor: pointer;
          position: relative;
        }
        .chat-toggle {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: #0b5ed7;
          color: white;
          border: none;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          z-index: 1100;
        }
        .chat-box {
          position: fixed;
          bottom: 90px;
          right: 20px;
          width: 300px;
          max-height: 400px;
          background: white;
          border: 1px solid #ccc;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index: 1100;
        }
        .chat-messages {
          flex: 1;
          padding: 10px;
          overflow-y: auto;
        }
        .chat-input {
          display: flex;
          border-top: 1px solid #ccc;
        }
        .chat-input input {
          flex: 1;
          border: none;
          padding: 10px;
        }
        .chat-input button {
          background: #0b5ed7;
          color: white;
          border: none;
          padding: 10px 15px;
        }
        .message.user { text-align: right; margin: 5px 0; }
        .message.bot { text-align: left; margin: 5px 0; color: #0b5ed7; }
        .cart-overlay {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          max-width: 800px;
          max-height: 80vh;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
          z-index: 1050;
          overflow-y: auto;
          padding: 20px;
        }
        .cart-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          z-index: 1040;
        }
        .products-scroll-container {
          overflow-x: auto;
          white-space: nowrap;
          padding-bottom: 15px;
          margin-bottom: 15px;
        }
        .product-card-scroll {
          display: inline-block;
          width: 300px;
          margin-right: 15px;
          vertical-align: top;
          white-space: normal;
        }
        .loading-spinner {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 200px;
        }
        .spinner {
          width: 50px;
          height: 50px;
          border: 5px solid #f3f3f3;
          border-top: 5px solid #0b5ed7;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        `}
      </style>

      <ImageCarousel />

      {/* Search and cart icon */}
      <div className="row p-3 sticky-top bg-white shadow-sm" style={{ zIndex: 1000 }}>
        <div className="col-md-4" />
        <div className="col-md-4 d-flex align-items-center">
          <input
            type="search"
            placeholder="Search For products"
            className="form-control"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="cart-icon" onClick={() => setShowCart(!showCart)}>
            <FaShoppingCart size={20} />
            {cart.length > 0 && (
              <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </div>
        </div>
        <div className="col-md-4" />
      </div>

      {loading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      )}
      
      {error && <div className="alert alert-danger">{error}</div>}

      {!loading && !error && (
        <div className="products-scroll-container p-3" style={{ overflowX: showCart ? 'auto' : 'visible', whiteSpace: showCart ? 'nowrap' : 'normal' }}>
          <div className={showCart ? "d-inline-flex" : "row"}>
            {filtered_products.map(product => (
              <div className={showCart ? "product-card-scroll" : "col-md-3 mt-3"} key={product.id}>
                <div className="card shadow p-3 h-100">
                  <img
                    src={img_url + product.product_photo}
                    alt={product.product_name}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5>{product.product_name}</h5>
                    <p className="text-muted">{product.product_description.slice(0, 50)}...</p>
                    <div className="mt-auto">
                      <b>Kes {product.product_cost}</b>
                      <button className="btn btn-info w-100 mt-2" onClick={() => addToCart(product)}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Cart Overlay */}
      {showCart && (
        <>
          <div className="cart-backdrop" onClick={() => setShowCart(false)} />
          <div className="cart-overlay">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3>Your Cart</h3>
              <button className="btn-close" onClick={() => setShowCart(false)}></button>
            </div>
            
            {cart.length === 0 ? (
              <p>No items in your cart.</p>
            ) : (
              <>
                <div style={{ maxHeight: '50vh', overflowY: 'auto' }}>
                  {cart.map(item => (
                    <div className="d-flex align-items-center border-bottom py-2" key={item.id}>
                      <img
                        src={img_url + item.product_photo}
                        alt={item.product_name}
                        style={{ width: "60px", height: "60px", objectFit: "cover", marginRight: "10px" }}
                      />
                      <div className="flex-grow-1">
                        <strong>{item.product_name}</strong><br />
                        <small className="text-muted">{item.quantity} x KES {item.product_cost}</small>
                      </div>
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                        className="form-control form-control-sm w-25 me-2"
                      />
                      <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item.id)}>
                        <FaTrash />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="text-end mt-3">
                  <h5>Total: KES {calculateTotal()}</h5>
                </div>
                <div className="d-flex justify-content-end mt-3">
                  <button className="btn btn-secondary me-2" onClick={() => setShowCart(false)}>
                    Continue Shopping
                  </button>
                  <button className="btn btn-success" onClick={proceedToPayment}>
                    Proceed to Payment
                  </button>
                </div>
              </>
            )}
          </div>
        </>
      )}

      <Footer />

      {/* Chatbot */}
      <button className="chat-toggle" onClick={() => setShowChat(!showChat)}>
        <FaComments />
      </button>
      {showChat && (
        <div className="chat-box">
          <div className="chat-messages">
            {chatMessages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.sender}`}>{msg.text}</div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={chatInput}
              placeholder="Ask me something..."
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleChatSubmit()}
            />
            <button onClick={handleChatSubmit}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Getmeals;