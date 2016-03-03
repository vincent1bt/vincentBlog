import React, { Component, PropTypes } from 'react';

class CategoryForm extends Component {
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
			<form onSubmit={this.handleSubmit} className="submit_form">
				<input type="text" placeholder="Nueva categoria" ref="category"/>
				<input type="submit" className="submit_button" />
			</form>
		)
	}
}

CategoryForm.propTypes = {
	addCategory: PropTypes.func.isRequired
}

export default CategoryForm;
