import React from "react";
import KfcCard from "./KfcCard";
export default function Products({
  Products,
  selectCategory,
  AddToCart
}) {

  return (
    <div className="container">
      {selectCategory.map((category) => (
        category.title !=="All"&&
        <div key={category.id}>
          <h3 className="text-light fw-bolder text-uppercase my-3">
            {category.title}
          </h3>
          <div className="row  row-cols-1 row-cols-md-4 g-4">
            {Products.map((item) =>
              item.categoryId === category.id ? (
                <KfcCard key={item.id} item={item} AddToCart={AddToCart} />
              ) : (
                ""
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
