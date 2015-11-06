import React from 'react';

export default class CategoryForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		let name = this.refs.category.value.trim();
		this.props.addCategory({name: name})
		this.refs.category.value = '';
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" placeholder="Nueva categoria" ref="category"/>
				<input type="submit"/>
			</form>
		)
	}
}