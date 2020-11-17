import { createStore } from 'redux';
import { Reducer } from './Reducer';

export const DataStore = createStore(Reducer);
