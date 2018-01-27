import React from 'react'
import Input from './Input';
import Button from './Button';
import { connect } from 'react-redux';
import clean from '../util/form/clean';
import { getPokemon, looking } from '../actionCreator';

const submit = (e, props) => {
	e.preventDefault();
	props.looking(true);
	const form = e.target;
	const pokemon = form.pokemon.value.toLowerCase();
	clean(form);
	fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
		.then(response => {
			if(response.status === 404) throw new("Error");
			props.looking(false);
			return response.json()
		})
		.then(pokemon => {
			if(pokemon) {
				props.looking(false);
				props.getPokemon(pokemon);
				document.getElementById('push').play();
			}
		})
		.catch(err => console.log(err))
	return false;
}

function PokeForm(props) {
	return (
		<form className="pokeform" onSubmit={ (e) => submit(e, props) }>
			<Input />
			<Button type="submit" title="Buscar Pokemón"/>
		</form>
	)
}

const mapStateToProps = state => ({
	pokemon: state.pokemon
})

const mapDispatchToProps = dispatch => ({
	getPokemon(pokemon) {
		dispatch(getPokemon(pokemon));
	},
	looking(value) {
		dispatch(looking(value))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(PokeForm)
