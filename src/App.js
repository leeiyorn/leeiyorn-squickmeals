import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Getmeals from './components/Getmeals';
import Addmeals from './components/Addmeals';
import Signup from './components/Signup';
import Login from './components/Login';
import Payup from './components/Payup';
import Navbar from './components/Navbar';
import Notfound from './components/Notfound';
import AboutUs from './components/Aboutus';




function App() {
  return (
    <Router>
    <div className='App'>
      {/* <header className='App-header'> */}


        {/* <h1>Leeiyorn's Quick Meals</h1> */}

      {/* </header> */}
       <Navbar/>  
      
    {/* {Below are diff paths/url} */}

      <Routes>
        <Route path='/'element={<Getmeals/>}/>
        <Route path='/addmeals'element={<Addmeals/>}/>
        <Route  path='/signup'element ={<Signup/>}/>
        <Route path='/Login'element={<Login/>}/>
        <Route path='/payup'element={<Payup/>}/>
        <Route path='/*'element={<Notfound/>}/>
        <Route path='/aboutus'element={<AboutUs/>}/>
      </Routes>
    </div>
  </Router>
  ); 
    
}

export default App;
                                                  