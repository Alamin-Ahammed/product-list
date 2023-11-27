// ProductTable.jsx
import React, { useEffect, useState } from "react";
import ProductRow from "./ProductRow";
import { useCheckLocalstorage } from "../Context/checkLocalstorage";
import './ProductTable.css'
const ProductTable = () => {
  const { isLocalstorageUpdated, updateLocalstorage } = useCheckLocalstorage();
  const [getProducts, setGetProducts] = useState([]);
  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products"));
    setGetProducts(products);
    updateLocalstorage({islocal:false,isdelete:true});
  }, [isLocalstorageUpdated.islocal]);

  return (
    <div>
      <h1>All Products</h1>
      <div className="Products">
        {getProducts.map((product) => (
          <ProductRow key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductTable;