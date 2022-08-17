import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = {
	quotes: [],
	hiddenItems: {},
};

export const store = createStore(reducer, initialState);
