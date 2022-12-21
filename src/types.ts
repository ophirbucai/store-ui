export type PaginationType = {
  limit: number;
  page: number;
};

export type ProductType = {
  _id: string;
  title: string;
  price: number;
  description: string | null;
  category: CategoryType;
  createdAt: string;
  updatedAt: string;
  createdBy: CustomerType;
  image?: string;
  slug: string;
};

export type CustomerType = {
  _id: string;
  name: string;
  role: string;
};

export type CategoryType = {
  _id: string;
  name: string;
  slug: string;
};

export interface UserQuery {
  limit: number;
  page: number;
}

export interface Pagination {
  userQuery: UserQuery;
  actions: ActionsType;
  lastPage: number;
  limits: number[];
}

export type ActionsType = {
  next: () => void;
  prev: () => void;
  page: (val: number | string) => void;
  limit: (val: number | string) => void;
  default: () => void;
  clearParams: () => void;
  setMaxItems: (val: number) => void;
};
