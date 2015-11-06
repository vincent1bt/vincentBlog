import React from 'react';

export default class PostFormComponent extends React.Component {
	render() {
		return (
			<form>
				<input type="text" placeholder="Nueva categoria"/>
				<input type="submit"/>
			</form>
		)
	}
}