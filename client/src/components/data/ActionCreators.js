import { ActionTypes } from './ActionTypes';

export const toggleSearch = state => ({
  type: ActionTypes.TOGGLE_SEARCH,
  payload: state,
});

export const toggleCart = state => ({
  type: ActionTypes.TOGGLE_CART,
  payload: state,
});

export const setSearchKey = searchKey => ({
  type: ActionTypes.SET_SEARCH_KEY,
  payload: searchKey,
});

export const setSortKey = sortKey => ({
  type: ActionTypes.SET_SORT_KEY,
  payload: sortKey,
});

export const setPageSize = pageSize => ({
  type: ActionTypes.SET_PAGE_SIZE,
  payload: pageSize,
});

export const closeWidgets = () => ({ type: ActionTypes.CLOSE_WIDGETS });

export const changeCartAmount = (productID, variationID, amount) => ({
  type: ActionTypes.CHANGE_CART_AMOUNT,
  payload: {
    productID,
    variationID,
    amount,
  },
});

export const deleteCartItem = (productID, variationID) => ({
  type: ActionTypes.DELETE_CART_ITEM,
  payload: {
    productID,
    variationID,
  },
});

export const clearCart = () => ({ type: ActionTypes.CLEAR_CART });
