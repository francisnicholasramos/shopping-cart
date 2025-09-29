export type LocalStorageType = {
  id: string;
  urls: { raw: string };
  alt_description: string;
  cart: number;
  price: number;
};

const userCart = (): LocalStorageType[] => {
  if (localStorage.getItem("yourCart") === null) {
    localStorage.setItem("yourCart", JSON.stringify([]));
  }

  const addedCarts: LocalStorageType[] = JSON.parse(
    localStorage.getItem("yourCart") || "[]"
  );

  return addedCarts;
};

export default userCart;
