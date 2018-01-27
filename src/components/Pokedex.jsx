import React from 'react'
import Screen from './Screen';
import PokeForm from './PokeForm';
import Notification from './Notification';

function Pokedex() {
	return (
		<div className="pokedex">
			<Screen />
			<PokeForm />
			<Notification />
		</div>
	)
}

export default Pokedex
