import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Header.css';



const Header = () => {
    const { user, handelLOgOut } = useAuth();
    return (
        <div className='header'>
             <nav className="navbar navbar-expand-lg     navbar-light  NAVIGETION">
        <div className="container-fluid">




          <div className="w-10 image d-flex  imgText" >
<Link className='d-flex ItemLink justify-content-center text-center align-center' to="/home">

<div className='LOGO'><i  class="fas fa-hiking"></i></div>
<div><h3 className='titleh3 p-2'>Travel</h3></div>
</Link>

          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="collapse navbar-collapse  NAVVER navbar" id="navbarResponsive">
            <ul className="navbar-nav ms-auto justify-content-center ">
              <li className="nav-item active">
                <Link className="nav-link NAVHOVER " to="/home" style={{}} href="#">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link NAVHOVER" to="/AllServicesShow" >Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link NAVHOVER" href="#" to="/myOrder">My Order'S</Link>
              </li>

              <li className="nav-item ">
                <Link className="nav-link NAVHOVER" href="#" to="/AddServices">Add Services</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link NAVHOVER" href="" to="/AllOrder">AllOrder'S</Link>
              </li>




              {user?.email ? (<li onClick={handelLOgOut} className="nav-item text-deanger">
                <Link className="nav-link text-danger NAVHOVER" href="#" to="/loging">LogOut</Link>
              </li>)
                :
                (<li className="nav-item">
                  <Link className="nav-link NAVLINK NAVHOVER" href="#" to="/loging">Loging</Link>
                </li>)}





              <li className="nav-item ">
                <Link className="nav-link" href="#" to="/home">     {user?.displayName}</Link>
              </li>



            </ul>

          {/*   <div className='IMGHEADER'><img src={user?.photoURL} alt="" /> </div> */}
          </div>
        </div>
      </nav>
        </div>
    );
};

export default Header;