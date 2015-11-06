import React from 'react';
import connectToStores from 'alt/utils/connectToStores'
import PostsActions from 'actions/postsActions';
import PostStore from 'stores/postStore';
import PostFormComponent from 'components/postFormComponent';

@connectToStores
export default class PostsComponent extends React.Component {
	constructor(props) {
		super(props);
		PostsActions.loadAllposts()
	}

	static getStores() {
		return [PostStore];
	}

	addCategory() {
		PostsActions.addCategory()
	}

	static getPropsFromStores() {
		return PostStore.getState();
	}
	render() {
		//console.log(this.props.posts);
		return (
			<PostFormComponent/>
			<ul className="dashboard-container-form-list">
				{
					this.props.posts.map((post) => {
						return (
							<li key={post.id} className="dashboard-container-form-list-item">
								<p className="dashboard-container-form-list-item-parr">{post.name}</p>
							</li>
						)
					})
				}
			</ul>
		)
	}
}