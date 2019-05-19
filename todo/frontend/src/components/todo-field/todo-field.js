import React from 'react';

import './todo-field.css';

export default function TodoField(props) {
	return (
		<li id={`child-${props.num}`} className="list-group-item d-flex justify-content-between align-items-center">
			{ props.name }
			<div className="custom-control custom-switch d-flex align-itmes-center">
				<input
					type="checkbox"
					className="custom-control-input"
					id={ `customCheck${props.num}` }
					disabled=""
				></input>
				<label className="custom-control-label" htmlFor={ `customCheck${props.num}` }></label>
				<button type="button" className="btn btn-outline-danger" onClick={ () => {props.onDelete(props.num)} } id={`button-${props.num}`}>del</button>
				<label htmlFor={ `button-${props.num}` }></label>
			</div>
		</li>
	)
}
