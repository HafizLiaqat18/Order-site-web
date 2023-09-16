import React, { useState } from "react";
import CatButtons from "../components/CatButtons";
import Pagination from "../components/Pagination";
import Products from "../components/Products";
import ProductsData from "../data/Products.json";
import Categories from "../data/Categories.json";



export default function MenuPage({cartCounter,searchValue ,setCartCounter,AddToCart,increment}) {

  const [selectedCategories ,setSelectedCategories] = useState([]);



  let filterProducts = searchValue
  ? ProductsData.filter(
      (item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.description.toLowerCase().includes(searchValue.toLowerCase())
    )
  : ProductsData;

  let selectCategory = (selectedCategories.length === 0 ) ? Categories :(selectedCategories[0].title ==="All")? Categories : selectedCategories ;




  return (
    <div>

      <CatButtons Categories={Categories} setSelectedCategories={setSelectedCategories} />
      <Products
        increment={increment}
        Products={filterProducts}
        selectCategory={selectCategory}
        AddToCart={AddToCart}
      />
      <Pagination></Pagination>

    </div>
  );
}
