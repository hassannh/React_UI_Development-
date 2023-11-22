import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getCategories } from "../api/api";

export const Categories = () => {
  const [activeButton, setActiveButton] = useState(null);
  const data = getCategories();

  const handleButtonClick = (category) => {
    setActiveButton(category.id);
  };

  return (
    <>
      <div>
        <h1>Session Categories</h1>
        <section className="FlexContainer">
          {data ? (
            data.map((category) => (
              <Link
                key={category.id}
                className={category.id === activeButton ? "link active-button" : "link"}
                onClick={() => handleButtonClick(category)}
                to={{ pathname: `/categories/${category.id}` }}
              >
                {category.name}
              </Link>
            ))
          ) : (
            <p>Loading or no data available...</p>
          )}
        </section>
        <Outlet />
      </div>
    </>
  );
};
