import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { Carousel } from "bootstrap/dist/js/bootstrap.min";

import ImageCarousel from "./Carousel";
import { FaShoppingCart } from "react-icons/fa";
const Getmeals = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const [proceeding, setProceeding] = useState(false);

  const navigate = useNavigate();
  const img_url = "https://leeiyorn.pythonanywhere.com/static/images/";

  const fetchProducts = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get("https://leeiyorn.pythonanywhere.com/api/getproducts");
      setProducts(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filtered_products = products.filter((item) =>
    item.product_name.toLowerCase().includes(search.toLowerCase()) ||
    item.product_description.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.product_cost * item.quantity), 0);
  };

  const proceedToPayment = () => {
    setProceeding(true);
    setTimeout(() => {
      navigate("/payup", { state: { cart } });
    }, 3000); // 3-second delay
  };

  return (
    <div className="mycontainer2">
      <style>
        {`
          .cart-icon {
            border: 2px solid #0b5ed7;
            border-radius: 50%;
            padding: 10px;
            margin-left: 10px;
            cursor: pointer;
          }
          .cart-icon:hover {
            background-color: #0b5ed7;
            color: white;
          }
          .quantity-control {
            display: flex;
            align-items: center;
            gap: 5px;
          }
          .quantity-btn {
            padding: 2px 8px;
            border-radius: 50%;
            border: 1px solid #ddd;
            background: white;
          }
        `}
      </style>

      {proceeding && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1050 }}>
          <div className="text-center bg-white p-5 rounded shadow-lg">
            <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }}></div>
            <h5 className="mt-3">Preparing Checkout...</h5>
          </div>
        </div>
      )}

      <ImageCarousel />

      {/* Search and Cart */}
      <div className="row p-3 sticky-top bg-white shadow-sm" style={{ zIndex: 1000 }}>
        <div className="col-md-4"></div>
        <div className="col-md-4 d-flex align-items-center">
          <input
            type="search"
            placeholder="Search For products"
            className="form-control"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="cart-icon position-relative" onClick={() => setShowCartModal(true)}>
            <FaShoppingCart size={20} />
            {cart.length > 0 && (
              <span className="badge bg-danger position-absolute top-0 start-100 translate-middle" style={{ fontSize: '0.7rem' }}>
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-muted">Loading delicious meals for you...</p>
        </div>
      )}

      {/* Error */}
      {error && <div className="alert alert-danger text-center">{error}</div>}

      {/* Product Cards */}
      <div className="row p-3">
        {filtered_products.map((product) => (
          <div className="col-md-3 mt-3" key={product.id}>
            <div className="card shadow p-3 h-100 product-card">
              <img
                src={img_url + product.product_photo}
                alt={product.product_name}
                className="card-img-top product-img"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5>{product.product_name}</h5>
                <p className="text-muted">{product.product_description.slice(0, 50)}...</p>
                <div className="mt-auto">
                  <b className="text-danger">
                    <span className="text-dark">Kes </span>
                    {product.product_cost}
                  </b>
                  <button
                    className="btn btn-info w-100 mt-2 buy-btn"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Modal */}
      {showCartModal && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Your Cart ({cart.reduce((total, item) => total + item.quantity, 0)} items)</h5>
                <button type="button" className="btn-close" onClick={() => setShowCartModal(false)}></button>
              </div>
              <div className="modal-body">
                {cart.length === 0 ? (
                  <p className="text-muted text-center">Your cart is empty.</p>
                ) : (
                  <>
                    <ul className="list-group mb-3">
                      {cart.map((item) => (
                        <li className="list-group-item" key={item.id}>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              <img 
                                src={img_url + item.product_photo} 
                                alt={item.product_name}
                                style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }}
                              />
                              <div>
                                <h6>{item.product_name}</h6>
                                <small>Kes {item.product_cost}</small>
                              </div>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="quantity-control">
                                <button 
                                  className="quantity-btn"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >-</button>
                                <span>{item.quantity}</span>
                                <button 
                                  className="quantity-btn"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >+</button>
                              </div>
                              <span className="ms-3 fw-bold">Kes {item.product_cost * item.quantity}</span>
                              <button 
                                className="btn btn-sm btn-danger ms-2"
                                onClick={() => removeFromCart(item.id)}
                              >Remove</button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <div className="mb-4">
                      <h5>Add More Items</h5>
                      <div className="row">
                        {filtered_products.slice(0, 4).map(product => (
                          <div className="col-md-3" key={`modal-${product.id}`}>
                            <div className="card h-100">
                              <img
                                src={img_url + product.product_photo}
                                alt={product.product_name}
                                className="card-img-top"
                                style={{ height: '100px', objectFit: 'cover' }}
                              />
                              <div className="card-body">
                                <h6 className="card-title">{product.product_name}</h6>
                                <button 
                                  className="btn btn-sm btn-primary w-100"
                                  onClick={() => addToCart(product)}
                                >
                                  Add
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 bg-light rounded">
                      <div className="d-flex justify-content-between">
                        <h5>Total:</h5>
                        <h5>Kes {calculateTotal()}</h5>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowCartModal(false)}>
                  Continue Shopping
                </button>
                {cart.length > 0 && (
                  <button className="btn btn-success" onClick={proceedToPayment}>
                    Proceed to Payment
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Getmeals;