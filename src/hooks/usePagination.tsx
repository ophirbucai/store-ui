import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ActionsType, Pagination, UserQuery } from "../types";

export const usePagination = (page = 1, limit = 5): Pagination => {
  const [params, setParams] = useSearchParams();
  const [maxItems, setMaxItems] = useState<number | null>(null);
  const [userQuery, setUserQuery] = useState<UserQuery>({
    page: Number(params.get("page")) || page,
    limit: Number(params.get("limit")) || limit,
  });

  const lastPage: Pagination["lastPage"] = useMemo(() => {
    return Math.ceil(
      maxItems
        ? maxItems / userQuery.limit - page + 1
        : userQuery.limit - page + 1
    );
  }, [userQuery, maxItems]);

  const limits: Pagination["limits"] = useMemo(() => {
    return Array.from({ length: maxItems || 0 }).map((_, idx) =>
      Number(idx + 1)
    );
  }, [userQuery, maxItems]);

  const actions: ActionsType = {
    next: () => {
      if (lastPage < userQuery.page + 1) return;
      setUserQuery((prev) => ({ ...prev, page: prev.page + 1 }));
    },
    prev: () => {
      if (userQuery.page <= 1) return;
      setUserQuery((prev) => ({ ...prev, page: prev.page - 1 }));
    },
    page: (val) => setUserQuery((prev) => ({ ...prev, page: Number(val) })),
    limit: (val) => {
      const limit = Number(val);
      setUserQuery(() => ({ page: 1, limit }));
    },
    default: () => setUserQuery({ page, limit }),
    clearParams: () =>
      setParams((prev: URLSearchParams) => {
        prev.forEach((v, key) => prev.delete(key));
        return prev;
      }),
    setMaxItems: (val) => (typeof val === "number" ? setMaxItems(val) : null),
  };

  return {
    userQuery,
    actions,
    lastPage,
    limits,
  };
};
