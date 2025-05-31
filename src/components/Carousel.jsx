//carousel
import { Link } from "react-router-dom";
const ImageCarousel = () => {
    return (
      <section className="row my-4">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div 
            className="carousel slide shadow-lg rounded-4 overflow-hidden" 
            data-bs-ride="carousel" 
            id="mycarousel"
            style={{ 
              border: '3px solid #f8f9fa',
              boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
            }}
          >
            {/* Carousel Indicators */}
            <div className="carousel-indicators">
              <button 
                type="button" 
                data-bs-target="#mycarousel" 
                data-bs-slide-to="0" 
                className="active"
                aria-current="true" 
                aria-label="Slide 1"
              ></button>
              <button 
                type="button" 
                data-bs-target="#mycarousel" 
                data-bs-slide-to="1" 
                aria-label="Slide 2"
              ></button>
              <button 
                type="button" 
                data-bs-target="#mycarousel" 
                data-bs-slide-to="2" 
                aria-label="Slide 3"
              ></button>
              <button 
                type="button" 
                data-bs-target="#mycarousel" 
                data-bs-slide-to="3" 
                aria-label="Slide 4"
              ></button>
            </div>
  
            {/* Carousel Inner */}
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="3000">
                <img 
                  src="images/ca1.jpg" 
                  alt="First slide" 
                  className="d-block w-100 img-fluid" 
                  style={{ 
                    height: '400px', 
                    objectFit: 'cover',
                    filter: 'brightness(0.9)'
                  }}
                />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-3">
                  <h5>Delicious Dish</h5>
                  <p>Experience the finest flavors</p>
                </div>
              </div>
  
              <div className="carousel-item" data-bs-interval="3000">
                <img 
                  src="images/cupcake1.jpg" 
                  alt="Second slide" 
                  className="d-block w-100 img-fluid" 
                  style={{ 
                    height: '400px', 
                    objectFit: 'cover',
                    filter: 'brightness(0.9)'
                  }}
                />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-3">
                  <h5>Sweet Treats</h5>
                  <p>Indulge in our desserts</p>
                </div>
              </div>
  
              <div className="carousel-item" data-bs-interval="3000">
                <img 
                  src="images/steak1.jpg" 
                  alt="Third slide" 
                  className="d-block w-100 img-fluid" 
                  style={{ 
                    height: '400px', 
                    objectFit: 'cover',
                    filter: 'brightness(0.9)'
                  }}
                />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-3">
                  <h5>Premium Cuts</h5>
                  <p>Perfectly cooked every time</p>
                </div>
              </div>
  
              <div className="carousel-item" data-bs-interval="3000">
                <img 
                  src="images/pizza1.jpg" 
                  alt="Fourth slide" 
                  className="d-block w-100 img-fluid" 
                  style={{ 
                    height: '400px', 
                    objectFit: 'cover',
                    filter: 'brightness(0.9)'
                  }}
                />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-3">
                  <h5>Artisan Pizza</h5>
                  <p>Handcrafted with love</p>
                </div>
              </div>
            </div>
  
            {/* Navigation Controls */}
            <Link to="#mycarousel" className="carousel-control-prev" data-bs-slide="prev" role="button">
              <span 
                className="carousel-control-prev-icon bg-dark bg-opacity-50 rounded-circle p-3" 
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </Link>
  
            <Link to="#mycarousel" className="carousel-control-next" data-bs-slide="next" role="button">
              <span 
                className="carousel-control-next-icon bg-dark bg-opacity-50 rounded-circle p-3" 
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </Link>
          </div>
        </div>
        <div className="col-md-1"></div>
      </section>
    );
  }
  
  export default ImageCarousel;