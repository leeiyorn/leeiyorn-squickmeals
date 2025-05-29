// UPDATED Payup.jsx to support multiple products
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";


const Payup = () => {
  const { cart = [] } = useLocation().state || {};
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [showReceipt, setShowReceipt] = useState(false);
  const [paidItems, setPaidItems] = useState([]);

  const img_url = "https://leeiyorn.pythonanywhere.com/static/images/";

  const totalAmount = cart.reduce(
    (sum, item) => sum + Number(item.product_cost) * Number(item.quantity || 1),
    0
  );

  const payNow = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    setShowReceipt(false);

    try {
      const data = new FormData();
      data.append("amount", totalAmount);
      data.append("phone", phone);

      const response = await axios.post(
        "https://leeiyorn.pythonanywhere.com/api/mpesa_payment",
        data
      );

      setSuccess(response.data.message);
      setPaidItems(cart);
      setPhone("");
      setShowReceipt(true);

      setTimeout(() => {
        navigate("/getmeals");
      }, 5000);
    } catch (error) {
      setError(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      {loading && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 9999, backdropFilter: "blur(3px)" }}
        >
          <div className="text-center p-5 bg-white rounded-3 shadow-lg">
            <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }}></div>
            <h3 className="mt-3">Processing Payment...</h3>
          </div>
        </div>
      )}

      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card border-0 shadow-lg">
            <div className="card-body p-5">
              <h3 className="mb-4">Payment Summary</h3>

              {showReceipt ? (
                <>
                  <div className="alert alert-success">
                    <h5>Payment Successful!</h5>
                    <p>{success}</p>
                    <p className="text-muted">Redirecting you back to meals...</p>
                  </div>
                  {paidItems.map((product) => (
                    <div key={product.id} className="card mb-3 shadow-sm">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            src={img_url + product.product_photo}
                            alt={product.product_name}
                            className="img-fluid rounded-start"
                            style={{ objectFit: "cover", height: "100%" }}
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">{product.product_name}</h5>
                            <p className="card-text text-muted">{product.product_description}</p>
                            <p className="card-text">
                              <span className="badge bg-success fs-6">
                                {product.quantity} x KES {product.product_cost} = KES{" "}
                                {product.product_cost * (product.quantity || 1)}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="text-end fw-bold fs-5">
                    Total Paid: <span className="text-success">KES {totalAmount}</span>
                  </div>
                </>
              ) : (
                <>
                  {cart.length === 0 ? (
                    <p className="text-muted">No items in cart.</p>
                  ) : (
                    <div className="mb-4">
                      {cart.map((product) => (
                        <div key={product.id} className="card mb-3 shadow-sm">
                          <div className="row g-0">
                            <div className="col-md-4">
                              <img
                                src={img_url + product.product_photo}
                                alt={product.product_name}
                                className="img-fluid rounded-start"
                                style={{ objectFit: "cover", height: "100%" }}
                              />
                            </div>
                            <div className="col-md-8">
                              <div className="card-body">
                                <h5 className="card-title">{product.product_name}</h5>
                                <p className="card-text text-muted">{product.product_description}</p>
                                <p className="card-text">
                                  <span className="badge bg-success fs-6">
                                    {product.quantity} x KES {product.product_cost} = KES{" "}
                                    {product.product_cost * (product.quantity || 1)}
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="text-end fw-bold fs-5">
                        Total Amount: <span className="text-success">KES {totalAmount}</span>
                      </div>
                    </div>
                  )}

                  <form onSubmit={payNow}>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="mb-3">
                      <label>M-PESA Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="2547XXXXXXXX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        pattern="[0-9]{9,12}"
                      />
                    </div>

                    <button className="btn btn-success w-100 py-2" type="submit" disabled={loading}>
                      Pay KES {totalAmount}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payup;