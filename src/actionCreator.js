export const getPokemon = pokemon => ({
	type: 'GET_POKEMON',
	pokemon
})

export const looking = value => ({
	type: 'LOOKING',
	search: value
})