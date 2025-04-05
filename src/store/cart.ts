import { atom } from "recoil";
import { CART_ITEM } from "../constants/category";

export interface ICartInfo {
  readonly id: number;
  readonly count: number;
}

export interface ICartItems {
  readonly id: string;
  readonly title: string;
  readonly price: number;
  readonly count: number;
  readonly image: string;
}

export interface ICartState {
  readonly items?: Record<string | number, ICartInfo>;
}

export const cartState = atom<ICartState>({
  key: "cart",
  default: {},
  effects: [
    ({ setSelf, onSet }) => {
      localStorage.getItem(CART_ITEM) && setSelf(JSON.parse(localStorage.getItem(CART_ITEM) as string));
      onSet((value) => localStorage.setItem(CART_ITEM, JSON.stringify(value)));
    },
  ],
});

export const addToCart = (cart: ICartState, id: string) => {
  const tempCart = { ...cart };
  if (tempCart[id]) {
    return {
      ...tempCart,
      [id]: {
        id: id,
        count: cart[id].count + 1,
      },
    };
  } else {
    return {
      ...tempCart,
      [id]: {
        id: id,
        count: 1,
      },
    };
  }
};

export const removeFromCart = (cart: ICartState, id: string) => {
  const tempCart = { ...cart };
  if (tempCart[id].count === 1) {
    delete tempCart[id];
    return tempCart;
  } else {
    return { ...tempCart, [id]: { id: id, count: cart[id].count - 1 } };
  }
};
