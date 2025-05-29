import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const Signup = () => {
  // State hooks for form fields
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");

  // State hooks for application status
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const submit = async (e) => {
    e.preventDefault();
    setLoading("Please wait as we submit your form...");

    try {
      const data = new FormData();
      data.append("username", username);
      data.append("email", email);
      data.append("password", password);
      data.append("phone", number);

      const response = await axios.post("https://leeiyorn.pythonanywhere.com/api/signup", data);
      setLoading("");
      setSuccess(response.data.message);
      setUsername("");
      setEmail("");
      setPassword("");
      setNumber("");
    } catch (error) {
      setLoading("");
      setError("Something went wrong. Please try again later");
    }
  };

  return (
    <div className="light-theme-wrapper" style={{
      minHeight: '100vh',
      background: '#f8f9fa',
      padding: '2rem 0'
    }}>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm" style={{
            border: 'none',
            borderRadius: '12px',
            overflow: 'hidden',
            background: 'white',
            color: '#495057'
          }}>
            <div className="card-header" style={{
              background: 'linear-gradient(90deg, #4e73df 0%, #6a8ee8 100%)',
              padding: '1.5rem',
              textAlign: 'center'
            }}>
              <h3 style={{
                margin: 0,
                color: 'white',
                fontWeight: '600',
                fontSize: '1.6rem'
              }}>Create Your Account</h3>
            </div>
            
            <div className="card-body" style={{ padding: '2rem' }}>
              {/* Status Messages */}
              {loading && (
                <div className="alert alert-info" style={{
                  background: 'rgba(23, 162, 184, 0.1)',
                  borderColor: '#17a2b8',
                  color: '#0c5460'
                }}>
                  <i className="fas fa-spinner fa-spin me-2"></i>
                  {loading}
                </div>
              )}
              
              {success && (
                <div className="alert alert-success" style={{
                  background: 'rgba(40, 167, 69, 0.1)',
                  borderColor: '#28a745',
                  color: '#155724'
                }}>
                  <i className="fas fa-check-circle me-2"></i>
                  {success}
                </div>
              )}
              
              {error && (
                <div className="alert alert-danger" style={{
                  background: 'rgba(220, 53, 69, 0.1)',
                  borderColor: '#dc3545',
                  color: '#721c24'
                }}>
                  <i className="fas fa-exclamation-circle me-2"></i>
                  {error}
                </div>
              )}

              <form onSubmit={submit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label" style={{
                    color: '#495057',
                    fontWeight: '500'
                  }}>Username</label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control"
                    style={{
                      background: '#fff',
                      border: '1px solid #ced4da',
                      color: '#495057',
                      borderRadius: '6px',
                      padding: '10px 15px'
                    }}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label" style={{
                    color: '#495057',
                    fontWeight: '500'
                  }}>Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    style={{
                      background: '#fff',
                      border: '1px solid #ced4da',
                      color: '#495057',
                      borderRadius: '6px',
                      padding: '10px 15px'
                    }}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label" style={{
                    color: '#495057',
                    fontWeight: '500'
                  }}>Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    style={{
                      background: '#fff',
                      border: '1px solid #ced4da',
                      color: '#495057',
                      borderRadius: '6px',
                      padding: '10px 15px'
                    }}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="form-label" style={{
                    color: '#495057',
                    fontWeight: '500'
                  }}>Phone Number</label>
                  <input
                    type="number"
                    id="phone"
                    placeholder="Enter your phone number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="form-control"
                    style={{
                      background: '#fff',
                      border: '1px solid #ced4da',
                      color: '#495057',
                      borderRadius: '6px',
                      padding: '10px 15px'
                    }}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  style={{
                    background: 'linear-gradient(90deg, #4e73df 0%, #6a8ee8 100%)',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '10px',
                    fontWeight: '500',
                    fontSize: '1rem',
                    marginBottom: '1rem',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)'}
                  onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)'}
                >
                  Sign Up
                </button>

                <div className="text-center" style={{ color: '#6c757d' }}>
                  Already have an account?{' '}
                  <Link to="/login" style={{
                    color: '#4e73df',
                    textDecoration: 'none',
                    fontWeight: '500',
                    ':hover': {
                      textDecoration: 'underline'
                    }
                  }}>
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
