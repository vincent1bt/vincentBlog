import React, { Component } from 'react';
import request from 'superagent';
import Immutable from 'immutable';
require('superagent-rails-csrf')(request);

import CategoriesList from 'js/ncomponents/categoriesList';

class CategoryComponent extends Component {
	constructor(props) {
		super(props);
		this.getCategories();

		this.state = {
			categories: []
		}

		this.getCategories = this.getCategories.bind(this);
		this.addCategory = this.addCategory.bind(this);
		this.deleteCategory = this.deleteCategory.bind(this);
	}

	getCategories() {
		Promise.resolve(request.get("/posts/categories.json"))
		  .then((data) => {
				let categories = data.body.map(category => {
					return Immutable.fromJS(category);
				});
		  	this.setState({ categories: categories });
		});
	}

	deleteCategory(index, id) {
		var id = id;
		var index = index;

		Promise.resolve(request
			.del(`/posts/categories/${id}`)
			.setCsrfToken())
		  .then((err, res) => {
		  	this.setState( state => {
		  		state.categories.splice(index, 1);
		  		return { categories: state.categories }
		  	});
		  })
	}

	addCategory(cat) {
		Promise.resolve(request
			.post('/posts/categories')
			.setCsrfToken()
			.send({category: cat}))
			.then((data) => {
				let dataImmutable = Immutable.fromJS(data.body);
				this.setState({categories: this.state.categories.concat(dataImmutable)})
			});
	}

	render() {
		return (
			<div>
				<CategoriesList
					categories={this.state.categories}
					deleteCategory={this.deleteCategory}
					addCategory={this.addCategory}
				/>
			</div>
		)
	}
}

export default CategoryComponent;
