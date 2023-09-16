import React from "react";

export default function Header({cartCounter ,searchValue,setSearchValue}) {
  return (
    <nav className="navbar navbar-expand-lg px-5 py-3 navbar-dark bg-black sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
        <i className="font-weight-800 h2 text-danger text-uppercase">KFC</i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active border text-deng  border-danger border-3 mx-3" aria-current="page" href="/">
                <h6 className="text-uppercase">Delivery</h6>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <h5 className="text-uppercase mx-3 py-1 text-white">PickUp</h5>
              </a>
            </li>

          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchValue}
              onChange={(e)=> setSearchValue(e.target.value)}
            />
          </form>
          <div className="btn ">
            <button className=" border-0 text-white h6 bg-danger text-uppercase p-2 rounded m-2 pointer">Login</button>
          </div>

            <button className="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#cartviewoffcanvasRight" aria-controls="offcanvasRight"> <i className="fa-solid h3 text-white fa-cart-shopping"><span className="text-white h6">{cartCounter}</span></i></button>
            <div className="btn">

           
            </div>
        </div>
      </div>
    </nav>
  );
}
