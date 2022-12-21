import { useEffect, useState } from "react";
import { usePagination } from "../hooks/usePagination";
import { PaginationRow } from "../PaginationRow/PaginationRow";
import { ProductCard } from "../ProductCard/ProductCard";
import { Product } from "../services/product.service";
import { ProductType } from "../types";

export const Products = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const pagination = usePagination();
  const { userQuery, actions } = pagination;

  useEffect(() => {
    (async function () {
      const data = await Product.getProducts({
        limit: userQuery.limit,
        page: userQuery.page,
      });
      if (data.length) {
        setProducts(data);
        actions.clearParams();
        actions.setMaxItems(20);
      } else {
        actions.default();
      }
    })();
  }, [userQuery]);

  return (
    <>
      {products.map((product, idx) => (
        <ProductCard {...product} key={`card_${idx}`} />
      ))}
      <PaginationRow {...pagination} />
    </>
  );
};
