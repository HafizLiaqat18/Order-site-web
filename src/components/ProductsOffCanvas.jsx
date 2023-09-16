import React, { useState } from "react";
import swal from "sweetalert";
export default function ProductsOffCanvas({ selectedProduct, orderInToCart }) {
  const [quantity, setQuantity] = useState(1);
  const product = {
    ...selectedProduct,
    quantity: quantity,
    price: selectedProduct.price * quantity


  }

  const quantityIncrement = () => {
    setQuantity(quantity + 1);
  }
  const quantityDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const sweetAlert = () => {
    swal({
      title: "Order Placed to Cart!",
      text: "If you want more then select more products!",
      icon: "success",

    }

    );
    setQuantity(1)

  }
  return (
    <>
      <div className="container p-3">

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="productoffcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header bg-danger text-white">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">
              Add To Cart
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body bg-dark">
            <div className="image w-100 text-center"><img className="w-50" src={product.image} alt="" /></div>
            <div className="detail text-white ">
              <div className="title d-flex justify-content-between my-4">
                <h2 className="text-center f-bold h3">{product.title}</h2>
                <p className="text-white h5 bg-danger d-inline p-1 rounded">{`Rs. ${product.price}`}</p>
              </div>
              <p className="text-start fs-6">{product.description}</p>
            </div>
            <div className="qty m-auto w-50 text-white d-flex justify-content-between ">
              <button className="btn btn-danger h1" onClick={quantityDecrement}>-</button>
              <p className="h3">{product.quantity}</p>
              <button className="btn btn-danger h1" onClick={quantityIncrement}>+</button>
            </div>
            <div className="w-100 text-center mt-5"><button className="btn w-75 btn-danger text-white d-inline" onClick={() => {
              orderInToCart(product);

              sweetAlert();

            }}>Add To Cart</button></div>
          </div>
        </div>
      </div>
    </>
  );
}
