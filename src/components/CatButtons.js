import React, { useState } from "react";

export default function CatButtons({ Categories, setSelectedCategories }) {
  const [selectedButton, setSelectedButton] = useState("");

  const getButtonClass = (item, selectedButton) => {
    if (item.title==="All" && selectedButton.length - 1) {
      return "btn border-0 btn-secondary bg-danger fw-bold";
    } else {
      return item.id === selectedButton.id
        ? "btn border-0 btn-secondary bg-danger fw-bold "
        : "btn border-0 btn-secondary bg-dark fw-bold ";
    }
  };
  const buttonHandle = (item) => {
    setSelectedCategories([item]);
    setSelectedButton(item);
  };

  return (
    <>
      <div className="catButton  bg-black container">
        <div className=" py-3  d-flex  justify-content-between ">
          {Categories.map((item) => (
            <button
              key={item.id}
              onClick={() => buttonHandle(item)}
              type="button"
              className={getButtonClass(item, selectedButton)}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
