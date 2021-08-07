import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav class="navbar sticky-top navbar-expand-lg" style={{background:"#03071e",color:"white"}}>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link class="navbar-brand" to="/">Hidden brand</Link>
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        {/* <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li> */}
      </ul>
      <form class="form-inline my-2 my-lg-0">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        {/* <li class="nav-item active">
          <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
        </li> */}
        <li class="nav-item">
          <Link class="nav-link" to="/customers">Customers</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/transactions">Transactions</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/add">New Customer</Link>
        </li>
      </ul>
        {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> */}
        {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
      </form>
    </div>
  </nav>
  );
}
