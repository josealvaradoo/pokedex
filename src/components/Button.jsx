import React from 'react'

function Button(props) {
	return (
		<button type={ props.type } className="button--emphasis">{ props.title }</button>
	)
}

export default Button
