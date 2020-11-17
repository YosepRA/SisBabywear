import products from '../../fakeProductsData';
import { randomNum, randomArrayItem } from '../../helpers';

function generateCartItems(products) {
  return products.map(({ _id, name, variations }) => ({
    _id,
    name,
    variation: randomArrayItem(variations),
    amount: randomNum(1, 5),
  }));
}

export const sortKeys = [
  {
    key: '-postedDate',
    label: 'Newest',
  },
  {
    key: 'postedDate',
    label: 'Oldest',
  },
  {
    key: 'name',
    label: 'A - Z',
  },
  {
    key: '-name',
    label: 'Z - A',
  },
];

export const pageSizes = ['10', '25', '50', '100'];

export const initialState = {
  searchOpen: false,
  cartOpen: false,
  searchKey: '',
  searchAmount: 0,
  sortKey: sortKeys[0].key,
  pageSize: pageSizes[0],
  cart: generateCartItems(products),
};
