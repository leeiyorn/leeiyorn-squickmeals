import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { Carousel } from "bootstrap/dist/js/bootstrap.min";
import ImageCarousel from "./Carousel";

const Getmeals = () => {

  // craete hooks that will help you manage different different states
const[loading,setLoading]=useState("");
const[error,setError]=useState("");

const navigate = useNavigate();

// create a hook that will hold all the products fecthed from API.
const[products,setproducts]=useState([]);

console.log(products)

// specify the image URL
const img_url="https://leeiyorn.pythonanywhere.com/static/images/" 

// create a function that will help fetch the different products
const fetchProducts = async ()=>{
  // udate the looading hook with a message
  setLoading("Please Wait as We retrive The Products ...")

  try{
// access thg API using the axios library
const response = await axios.get("https://leeiyorn.pythonanywhere.com/api/getproducts")

// Update the product hook with the different products fetched from the API
setproducts(response.data)

// set the loading hook back to default

setLoading("");

  }
  catch(error){
    
    // set the loading hook back to default
    setLoading("");

    setError(error.message);

  }
}

// Below we shall use the (useEffect)hook that will call the fetch products function every time a person accessthe get products component
useEffect(()=>{fetchProducts()}, [])

// we create a hook that will hold those products that will macth what the user is typing
const[search , setSearch]=useState("")

const filtered_products =products.filter((item) =>
   item.product_name.toLowerCase().includes(search.toLowerCase()) ||
   item.product_description.toLowerCase().includes(search.toLowerCase())
   
);




  return (

    <div className="mycontainer2">
      <ImageCarousel/>
      <div className="row p-3">
        <div className="col-md-4"></div>
        <div className="col-md-4">
        <h3 className="text-info mt-2">Available products</h3>


  {/* below is the input for the search functionality */}
  <input
   type="search"
   placeholder="Search For products" 
   className="form-control"
   value={search}
   onChange={(e)=>setSearch(e.target.value)}/>


        </div>
        <div className="col-md-4"></div>
      </div>
       
 <div className="row p-3">

  <b className="text-success">{loading}</b>
  <b className="text-danger">{error}</b>

  {filtered_products .map((product)=>(

  <div className="col-md-3 justify-content-center mt-3">
    <div className="car shadow p-1">
      <img src={img_url + product.product_photo} alt="" className="product_img"/>

      {/* product details */}
      <div className="card-body">
        <h5 className="text-primary">{product.product_name}</h5>
        <p className="text-muted">{product.product_description.slice (0,20)}...</p>
        <b className="text-warning"><span className="text-dark">Kes</span>{product.product_cost}</b> <br />
         <button className="btn btn-info"onClick={()=>navigate("/payup",{state:{product}})}>Buy Now</button>
      </div>
    </div>
  </div>
  ))}
 </div>

 <Footer/>

    </div>
   
  )
}

export default Getmeals
