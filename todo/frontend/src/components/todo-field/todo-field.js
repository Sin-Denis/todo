import React from 'react';

import './todo-field.css';

export default function TodoField(props) {
	return (
		<li className="list-group-item d-flex justify-content-between align-items-center">
			{ props.name }
			<div className="custom-control custom-switch">
				<input type="checkbox" className="custom-control-input" id="customCheck1" disabled=""></input>
				<label className="custom-control-label" htmlFor="customCheck1"></label>
			</div>
		</li>
	)
}
