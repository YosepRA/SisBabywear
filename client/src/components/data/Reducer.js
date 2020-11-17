/* eslint-disable indent */
import { initialState } from './initialState';
import { ActionTypes } from './ActionTypes';

export const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.TOGGLE_SEARCH:
      return {
        ...state,
        searchOpen: payload,
      };

    case ActionTypes.TOGGLE_CART:
      return {
        ...state,
        cartOpen: payload,
      };

    case ActionTypes.SET_SEARCH_KEY:
      return {
        ...state,
        searchKey: payload,
        searchOpen: false,
      };

    case ActionTypes.SET_SORT_KEY:
      return {
        ...state,
        sortKey: payload,
      };

    case ActionTypes.SET_PAGE_SIZE:
      return {
        ...state,
        pageSize: payload,
      };

    case ActionTypes.CLOSE_WIDGETS:
      return {
        ...state,
        searchOpen: false,
        cartOpen: false,
      };

    case ActionTypes.CHANGE_CART_AMOUNT:
      let item = state.cart.find(
        i =>
          Number(i._id) === Number(payload.productID) &&
          Number(i.variation.id) === Number(payload.variationID)
      );
      item.amount = payload.amount;

      return {
        ...state,
      };

    case ActionTypes.DELETE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.filter(
          i =>
            Number(i._id) !== Number(payload.productID) &&
            Number(i.variation.id) !== Number(payload.variationID)
        ),
      };

    case ActionTypes.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};
