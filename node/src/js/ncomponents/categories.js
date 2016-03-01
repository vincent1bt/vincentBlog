import React from 'react';
import request from 'superagent';
require('superagent-rails-csrf')(request);
import FormCategories from 'js/ncomponents/formCategories';

export default class CategoryComponent extends React.Component {
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
		  	this.setState({categories: this.state.categories.concat(data.body)});
		});
	}

	deleteCategory(e) {
		e.preventDefault();
		var id = this.refs.category_id.value.trim();
		var index = this.refs.category_index.value;
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
				this.setState({categories: this.state.categories.concat(data.body)})
			});
	}

	render() {
		return (
			<div>
				<FormCategories addCategory={this.addCategory} />
				<ul className="dashboard-container-form-list">
					{
						this.state.categories.map((category, i) => {
							return (
								<li key={category.id} className="dashboard-container-form-list-item">
									<p className="dashboard-container-form-list-item-parr"> {category.name} </p>
									<form onSubmit={this.deleteCategory}>
									  <input data-confirm="yes?" className="dashboard-container-list-item-link dashboard-container-list-item-link--delete" type="submit" value="Eliminar"/>
									  <input type="hidden" value={category.id} ref="category_id" />
									  <input type="hidden" value={i} ref="category_index" />
									</form>
								</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
}
