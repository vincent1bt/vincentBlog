import React from 'react';
import request from 'superagent';
require('superagent-rails-csrf')(request);
import FormCategories from 'ncomponents/formCategories';

export default class CategoryComponent extends React.Component {
	constructor(props) {
		super(props);
		this.getCategories();

		this.state = {
			categories: []
		}
		this.getCategories = this.getCategories.bind(this);
		this.addCategory = this.addCategory.bind(this);
	}

	getCategories() {
		Promise.resolve(request.get("/categories.json"))
		  .then((data) => {
		  	this.setState({categories: this.state.categories.concat(data.body)});
		});
	}

	addCategory(cat) {
		Promise.resolve(request
							.post('/categories')
							.setCsrfToken()
							.send({category: cat}))
							.then((data) => {
								console.log(data)
								this.setState({categories: this.state.categories.concat(cat)})
							});
	}

	render() {
		return (
			<div>
				<FormCategories addCategory={this.addCategory} />
				<ul className="dashboard-container-form-list">
					{
						this.state.categories.map((category) => {
							return (
								<li key={category.id} className="dashboard-container-form-list-item">
									<p className="dashboard-container-form-list-item-parr"> {category.name} </p>
									<a data-confirm="yes?" className="dashboard-container-list-item-link dashboard-container-list-item-link--delete" 
										rel="nofollow"
										data-method="delete"
										href={`/categories/${category.id}`}
									>
										Eliminar
									</a>
								</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
}