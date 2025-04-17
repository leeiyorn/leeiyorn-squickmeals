import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";


const Signup = () => {
//create hooks that will enable you to store the different information by the user on the form
const [username, setUsername]=useState("");
const [email ,setEmail]=useState("");
const [password,setPassword]=useState("");
const [number,setNumber]=useState("");

// intialize three additional hooks to store the state of you application when the sign up button is clicked
const[loading,setLoading]=useState("");
const[success,setSuccess]=useState("");
const[error,setError]=useState("");
// create a function to handle the submit logic
const submit =async(e)=>{
  //prevent site from reloading
  e.preventDefault(); 
  // update the loading hook with a message 
  setLoading("Please wait as we submit you form");

  try{
// create a form data 0object that will hold the sign up details
     const data=new FormData();
    //  add/append e~ different info onto the form dara
    data.append("username",username);
    data.append("email",email);
    data.append("password",password);
    data.append("phone",number);

    // post you data through you end point
    // here we shall use axios which is library that enables user to interact with http request
    const response = await axios.post("https://leeiyorn.pythonanywhere.com/api/signup",data)
    // update the loading back to defult
    setLoading("");
    // update the success hook with the rsponse message
    setSuccess(response.data.messsage);
    // clear the hooks for the form input field
    setUsername("");
    setEmail("");
    setPassword("");
    setNumber("");


  }
  catch(error){
    //  catch any error if there is 
    setLoading("");
    // setError(error.message)
    setError("Something went wrong.Please try again later")
  }
}


  return (
    <div className="row justify-content-center mt-3 mycontainer">
      <div className="col-md-6 card shadow p-2 mt-3 ">
        <h3>Sign Up</h3>
        {loading}
        <b className="text-success">{loading}</b>
        <b className="text-success">{success}</b>
        <b className="text-danger">{error}</b>


        <form onSubmit={submit}>
          <input type="text" 
           placeholder="Enter the  Username"
           value={username}
          //  
           onChange={(e) =>setUsername(e.target.value)}
           className="form-control"required/><br />

           {/* {username} */}

          <input type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          className="form-control"required/><br />
          
          {/* {email} */}

          <input type="password"
          placeholder="Enter Password" 
          value={password}
          onChange={(e) =>setPassword(e.target.value)}
          className="form-control"required/><br />

          {/* {password} */}

          <input type="number"
          placeholder="Enter Phone"
          value={number}
          onChange={(e) =>setNumber(e.target.value)}
          className="form-control"required/><br /><br />

          {/* {number} */}

          <button className="btn btn-outline-success">Sign in</button>
          <p>Already have an account? <Link to={'/login'} className="text-info">Login</Link></p>
          
          
        </form>
      </div>
<Footer/>
    </div>
    
  )
}

export default Signup



