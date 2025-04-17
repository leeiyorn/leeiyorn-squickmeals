const Footer = () => {
  return (
  <div>
      <section className="row  mt-4 footer-background-color">
          <div className="col-md-4 text-left text-light">
              <h5 className="p-2 text-center text-info">About Us</h5>
              <p>We are a created Delivery company tasked with ensuring our customers get the best Meals
                from the best 🍽 in town </p>
              <p>We  deliver our meals for free for people within the CBD and charge for deliveries out of town deppending on the distance</p>
              <br/>
          </div>
          <div className="col-md-4 text-light">
              <h5 className="p-2 text-center text-info">Reach Us Out</h5>
              <input className="form-control" type="email" placeholder="Enter your email"/>
              <br/>
              <textarea className="form-control" rows="7" placeholder="Leave a comment"></textarea>
              <br/>
              <input type="submit" value="Send Message" className="btn btn-primary"/>
          </div>
          <div className="col-md-4 ">
              <h4 className="text-center text-info">Connect With Us</h4>
              <br/>
              <a href="https://facebook.com">
              <img src="images/facebook.jpeg" alt="" className="socialspictures"/>
              </a>
              <a href="https://instagram.com">
              <img src="images/gram.jpeg" alt="" className="socialspictures"/>
              </a>
              <p className="text-white"> For more information please fell free to contact us on;</p><br />
              <p className="text-white">+254 721512266 OR +254 726208483</p>
   </div>
      </section>
      <footer className="text-white text-center p-2 mt-2 bootom-footer">
              <h5>Developed by Leeiyorn &copy; 2025.All rights reserved</h5>
      </footer>
  </div>
  );
  }
   
 
  export default Footer;
