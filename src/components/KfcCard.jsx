import React from "react";


export default function KfcCard({ item ,AddToCart }) {
  let desc =
    item.description.length > 40
      ? item.description.slice(0, 40) + "......"
      : item.description;

  return (
    <div className="col">
      <div className="card bg-dark text-white " style={{ width: "15rem", height: "25rem" }}>
        <img
          style={{ width: "80%", margin:"auto", height: "80%", objectFit: "contain", objectPosition: "50% 50%" , cursor:"pointer" }}
          src={item.image}
          className="card-img-top  "
          alt="kfc card"
        />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text ">
            {desc}
            <span className="badge d-block w-25 px-1 my-1 text-bg-danger = mx-2">Rs. {item.price}</span>
          </p>

          <button className="btn btn-danger" onClick={()=> { AddToCart(item)}} type="button" data-bs-toggle="offcanvas" data-bs-target="#productoffcanvasRight" aria-controls="offcanvasRight">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
