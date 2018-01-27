const looking = (state, action) => ({
	...state,
	pokemon: {},
	search: action.search
})

export default looking;