import { createStore } from 'redux';
import getPokemon from './reducers/getPokemon';
import looking from './reducers/looking';

const reducer = (state, action) => {
	switch(action.type) {
		case 'GET_POKEMON':
			return getPokemon(state, action);
		case 'LOOKING':
			return looking(state, action);
		default:
			return state;
	}
}

const initialState = {
	pokemon: {},
	search: false
}

export default createStore(reducer, initialState);