import React from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  const { query: { productId } } = useRouter();
  return (
    <div>
      <h1>Esta es la pagina Product {productId}</h1>
    </div>
  )
}

export default ProductItem;