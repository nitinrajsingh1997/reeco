import React, { useEffect } from "react";
import products from "../products.json";
import { useAppDispatch } from "../store/hooks";
import { setProduct } from "../slices/productSlice";

export default function useProducts() {
  const [isLoading, setIsLoading] = React.useState(false);

  const dispatch = useAppDispatch();

  function fetchProduct() {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(setProduct(products));
      setIsLoading(false);
    }, 2000);
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return { isLoading, products };
}
