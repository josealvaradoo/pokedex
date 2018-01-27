const getPokemon = (state, action) => ({
	...state,
	pokemon: action.pokemon
})

export default getPokemon;