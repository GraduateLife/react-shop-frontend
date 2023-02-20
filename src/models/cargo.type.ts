export type CartItem = {
  ItemQuantity: number;
} & Cargo;

export type Product = {
  ProdBelongsToCategory: string;
} & Cargo;

type Cargo = {
  ProdId: string;
  ProdName: string;
  ProdPrice: number;
  ProdImageUrl: string;
};
