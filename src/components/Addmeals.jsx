import React from 'react'
import { useState } from "react"
import Footer from './Footer';
import axios from 'axios';


const Addmeals = () => {

  // intialize the use state
  const[productName,setproductName]=useState("");
  const[productDescription,setproductDescription]=useState("");
  const[productCost,setproductCost]=useState("");
  const[productPhoto,setproductPhoto]=useState("");

  // intialize three additional hooks to store the state of you application when the sign up button is clicked
  const[loading,setLoading]=useState("");
  const[success,setSuccess]=useState("");
  const[error,setError]=useState("");

// create a function that wil handle the submit action
 const uploadProduct = async (e) =>{
  // prevent site from reloading
e.preventDefault();

// update the loading hook with a message
setLoading("Please wait as your product is being uploaded....")
try{
  // create a form data object
  const data=new FormData();

  // append the different details onto the form data

  data.append("product_name",productName);
  data.append("product_description",productDescription);
  data.append("product_cost",productCost);
  data.append("product_photo",productPhoto);

  // post you data through you end point
    // here we shall use axios which is library that enables user to interact with http request
    const response = await axios.post("https://leeiyorn.pythonanywhere.com/api/addproduct",data)
      // update the loading back to defult
      setLoading("");
      // update the success hook with the rsponse message
      setSuccess(response.data.messsage);
      // clear the hooks for the form input field
      setproductName("");
      setproductDescription("");
      setproductCost("");
      setproductPhoto("");
  
}
catch(error){
 //  catch any error if there is 
 setLoading("");
 setError(error.message)
 

}


 }


  return (
    <div className="row justify-content-center mt-3 mycontainer">
    <div className="col-md-6 card shadow p-3 mt-3 ">
      <h3>Please Place You Meals Here</h3>
      
      <b className="text-success">{loading}</b>
      <b className="text-success">{success}</b>
      <b className="text-danger">{error}</b>

       <form onSubmit={uploadProduct} >
        <input type="text"
        placeholder="Enter meal Name"
        value={productName}
        onChange={(e) =>setproductName(e.target.value)}
        required
        className="form-control"/> <br /><br />
        {/* {productName} */}

        <textarea required
        placeholder="Please enter meal description"
        value={productDescription}
        onChange={(e) =>setproductDescription(e.target.value)}
        className="form-control"></textarea><br /><br />
        {/* {productDescription} */}

        <input type="number"
        required
        placeholder="Enter Your  price"
        value={productCost}
        onChange={(e) =>setproductCost(e.target.value)}
        className="form-control" /> <br /><br />
        {/* {productCost} */}

        <label className="text-success ">Choose An Image For Your Product</label><br />
        <input type="file"
        className="form-control" 
        accept="/*"
        onChange={(e)=> setproductPhoto(e.target.files[0])}
        /> <br /> <br />

        <input type="submit"  value="Add product" className="btn btn-info"/>

       </form>
       

    </div>
    <Footer/>
    </div>
    
  )
}

export default Addmeals
