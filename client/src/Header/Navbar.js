import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import React from "react";
import "./NavbarStyle.css";
import logo from "../Images/logo.jpg";


//Style
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import BackpackIcon from '@mui/icons-material/Backpack';



const MainBar = () =>{
  const admin = JSON.parse(localStorage.getItem("admin"));
  const student = localStorage.getItem('student')

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

return( <header id='navtop' 
//  style={{position:'fixed', width:'100%', zIndex:'2'}}
 >


  {admin ? (
    <p>
      <a href="/admin">
        {" "}
        <img
          src={logo}
          alt="Concept2Education"
          style={{
            width: "70px",
          }}
        />{" "}
      </a>
    </p>
  ) : (
    <h3>
      <a href="/">
        {" "}
        <img
          src={logo}
          alt="Concept2Education"
          style={{
            width: "75px",
            marginTop:'-20%'
          }}
        />{" "}
      </a>
    </h3>
  )}
  <nav
    ref={navRef}
    id="nav-styles"
    style={{ float: "right", marginRight: "-33%" }}
  >
     <a href="/" id="navbar-item">
    <HomeIcon style={{verticalAlign:'-6px'}} />  Home
    </a>

    <a href="/about" id="navbar-item">
    <PersonIcon style={{verticalAlign:'-6px'}} />   About Us
    </a>
   
  
    <a href="/contact" id="navbar-item">
    <PermContactCalendarIcon style={{verticalAlign:'-6px'}} />  Contact Us
    </a>

    <a href="/results" id="navbar-item">
    <AutoGraphIcon style={{verticalAlign:'-6px'}} />   Results
    </a>


    <a href="/login" id="navbar-item">
    <BackpackIcon style={{verticalAlign:'-6px'}} />  Student Portal
    </a>

    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
      <FaTimes />
    </button>
  </nav>
  <button className="nav-btn" onClick={showNavbar}>
    <FaBars style={{color:'#03045e'}} />
  </button>
</header>)
}

function Navbar() {
  const admin = JSON.parse(localStorage.getItem("admin"));
  const student = localStorage.getItem('student')


  return (
   <>
  
 
   <MainBar/>
   </>
  );
}

export default Navbar;