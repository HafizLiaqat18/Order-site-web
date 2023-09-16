import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import EmptyCart from "./EmptyCart";

export default function CartViewOffCanvas({ orderToCart, cartCounter, decrement, setOrderToCart , setCartCounter }) {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showEmpty, setShowEmpty] = useState(true)

  useEffect(() => {
    setProducts(orderToCart);

    let initialPrice = orderToCart.reduce((total, product) => total + product.quantity * (product.price / product.quantity), 0);
    setTotalPrice(initialPrice)
    if (orderToCart.length > 0) {
      setShowEmpty(false)
    }
  }, [orderToCart]);
  const deleteItem = (item) => {
    const updatedProducts = products.filter((product) => product.id !== item.id);
    setProducts(updatedProducts);
    decrement();
    if (updatedProducts.length < 1) {
      setShowEmpty(true);
      setOrderToCart([])

    } else {
      setShowEmpty(false)
    }
    let initialPrice = updatedProducts.reduce((total, product) => total + product.quantity * (product.price / product.quantity), 0);
    setTotalPrice(initialPrice)
  };

  const increaseQuantity = (item) => {
    const updatedProducts = products.map((product) => {
      if (product.id === item.id) {
        // Increase the quantity of the selected product
        let newQty = product.quantity + 1
        let newPrice = (product.price / product.quantity) * newQty
        return { ...product, quantity: newQty, price: newPrice };
      }
      return product;
    });
    let initialPrice = updatedProducts.reduce((total, product) => total + product.quantity * (product.price / product.quantity), 0);
    setTotalPrice(initialPrice)
    setProducts(updatedProducts);
  };
  const decreaseQuantity = (item) => {
    const updatedProducts = products.map(product => {
      if (product.id === item.id) {
        if(product.quantity > 1){
          let newQty = product.quantity - 1
          let newPrice = (product.price / product.quantity) * newQty
          return { ...product, quantity: newQty, price: newPrice };
        }
      }
      return product;
    })
    setProducts(updatedProducts);
    let initialPrice = updatedProducts.reduce((total, product) => total + product.quantity * (product.price / product.quantity), 0);
    setTotalPrice(initialPrice)
  }

  const confirmOrder = () => {
    swal({
      title: "Thanks for Order :)",
      text: "If you want more, then select more products!",
      icon: "success",
    });
    setOrderToCart([]);
    setShowEmpty(true);
    setCartCounter(0)

  };

  return (
    <>
      <div className="container p-3">
        <div
          className="offcanvas offcanvas-end "
          tabIndex="-1"
          id="cartviewoffcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header bg-danger text-white ">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">
              Items Added {cartCounter}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body bg-dark text-white">
            <div className="d-flex flex-column justify-content-between h-100">
              <div className="overflow-auto h-100">
                {showEmpty ? (
                  <EmptyCart />
                ) : (
                  products.map((product, i) => (
                    <div
                      key={i}
                      className="w-100 h-25 d-flex align-items-center justify-content-between"
                    >
                      <img
                        className="w-25 btn h-auto rounded-circle"
                        src={product.image}
                        alt=""
                      />
                      <h6 className="mt-3">{product.title}</h6>
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-danger"
                          onClick={() => decreaseQuantity(product)}
                        >
                          -
                        </button>
                        <p className="mx-2 h6 mt-2">{product.quantity}</p>
                        <button
                          className="btn btn-success"
                          onClick={() => increaseQuantity(product)}
                        >
                          +
                        </button>
                      </div>
                      <i
                        className="fa-solid fa-trash text-danger fs-5 mx-2 btn cursor-pointer"
                        onClick={() => deleteItem(product)}
                      ></i>
                    </div>
                  ))
                )}
              </div>
              {products.length !== 0 && (
                <div className="d-flex h-50 w-100 justify-content-between flex-column fw-bold">
                  <div className="h-75 w-100 bg-danger mb-2">
                    <div className="d-flex justify-content-between p-2 rounded">
                      <p>SubTotal</p>
                      <p>Rs.{totalPrice}</p>
                    </div>
                    <div className="d-flex justify-content-between p-2 rounded">
                      <p>Tax (17%)</p>
                      <p>{parseInt((totalPrice * (1 / 100)) * 17)}</p>
                    </div>
                    <div className="d-flex justify-content-between p-2 rounded">
                      <p>Delivery fee</p>
                      <p>to be calculated</p>
                    </div>
                    <div className="d-flex justify-content-between p-2 h3 rounded">
                      <p>Total</p>
                      <p>Rs.{parseInt(totalPrice + (totalPrice * (1 / 100)) * 17)}</p>
                    </div>
                  </div>
                  <button
                    className="btn bg-success mb-5 text-light"
                    onClick={confirmOrder}
                  >
                    Confirm Order
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}











