import React ,{useState} from 'react'
import MenuPage from './pages/MenuPage';
import Header from "./components/Header";
import CartViewOffCanvas from './components/CartViewOffCanvas'
import ProductsOffCanvas from './components/ProductsOffCanvas'
import Footer from './components/Footer';


export default function App() {
  const [cartCounter, setCartCounter] = useState(0);
  const [searchValue , setSearchValue] = useState("");
  const [offcanvasSelectedProduct , setOffCanvasSelectedProduct] = useState({});
  const [orderToCart , setOrderToCart] = useState([])
  const AddToCart = (item)=>{
    setOffCanvasSelectedProduct(item)
  }
const increment = ()=>{
setCartCounter(cartCounter + 1)
}
const decrement = ()=>{
  setCartCounter(cartCounter - 1)
}
  const orderInToCart = (product)=>{
    let checkProductAlReadyExist = orderToCart.filter(item => item.id === product.id);

    if(!checkProductAlReadyExist.length){
      setOrderToCart([...orderToCart,product]);
      increment()
    }else{
      let upDateProducts = orderToCart.map(item => {
        if(item.id === checkProductAlReadyExist[0].id){
          let newProduct = {
            ...item,
            quantity : product.quantity + item.quantity,
            price : product.price + item.price
          }
          return newProduct
        }else{
          return item
        }

      })
      setOrderToCart(upDateProducts)
    }

  };



  return (
    <>
    <div>

     <Header cartCounter={cartCounter} inputValue={searchValue} setSearchValue={setSearchValue} />

    <MenuPage cartCounter={cartCounter} searchValue={searchValue} increment={increment} AddToCart={AddToCart}  orderInToCart={orderInToCart} offcanvasSelectedProduct={offcanvasSelectedProduct}/>
    </div>
    <ProductsOffCanvas
        selectedProduct={offcanvasSelectedProduct}
        orderInToCart={orderInToCart}

        ></ProductsOffCanvas>
    <CartViewOffCanvas orderToCart={orderToCart} cartCounter={cartCounter} setOrderToCart={setOrderToCart} setCartCounter={setCartCounter} decrement={decrement}></CartViewOffCanvas>
        <Footer/>

    </>
  )
}



