import { useLoaderData } from "react-router-dom";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;

  const [layout, setLayout] = useState("grid");

  const setStylesActive = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? "btn-primary text-primary-content"
        : "btn-ghost text-base-content"
    }}`;
  };

  return (
    <>
      {/* HEADER */}
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">
          {totalProducts} Product{totalProducts > 1 && "s"}
        </h4>
        <div className="flex gap-x-2">
          <button
            type="button"
            onClick={() => setLayout("grid")}
            className={setStylesActive("grid")}
          >
            <BsFillGridFill />
          </button>

          <button
            type="button"
            onClick={() => setLayout("list")}
            className={setStylesActive("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      {/* PRODUCTS */}
      <div>
        {
          totalProducts === 0 ? (
            <h5 className="text-2xl mt-16">
              Sorry, no products matched your search...
            </h5>
          ) : layout === "grid" ? (
            <ProductsGrid />
          ) : (
            <ProductsList />
          ) // if totalProducts is 0, show a message, else show the products grid or list depending on the layout state
        }
      </div>
    </>
  );
};

export default ProductsContainer;
