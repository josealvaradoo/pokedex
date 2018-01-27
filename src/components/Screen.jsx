import React from 'react'
import { connect } from 'react-redux';
import isEmpty from '../util/object/isEmpty';

function Screen(props) {
	return (
		<div className={`screen cross-center ${!isEmpty(props.pokemon) ? 'push' : ''}`}>
		{
			(isEmpty(props.pokemon)) ? 
				(props.search)
				? (
					<div className="ed-container">
						<div className="ed-item">
							<h4 className="pokemon-name">Buscando...</h4>
						</div>
					</div>
				)
				: false
			: (
				<div className="ed-container">
					<div className="ed-item s-20"></div>
					<div className="ed-item s-20">
						<img
							src={ props.pokemon.sprites.front_default.replace('https', 'http') }
							alt={ props.pokemon.name }
							className="pokemon-picture" />
					</div>
					<div className="ed-item s-50">
						<h4 className="pokemon-name">{ props.pokemon.name }</h4>
						<p className="pokemon-type">{ props.pokemon.types[0].type.name }</p>
					</div>
					<div className="ed-item s-30"></div>
				</div>
			)
		}
		</div>
	)
}

const mapStateToProps = state => ({
	pokemon: state.pokemon,
	search: state.search
})

export default connect(mapStateToProps)(Screen)
