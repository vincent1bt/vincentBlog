import flux from 'control';
import PostsActions from 'actions/postsActions';

class PostsStore {
	constructor() {
		this.bindListeners({
			update: PostsActions.updatePosts
			create: PostsActions.addCategory
		});

		this.state = {
			posts: []
		};
	}

	create(cat) {
		console.log(cat);
		this.setState({posts: this.state.posts.concat(cat)});
	}

	update(cat) {
		this.setState({posts: this.state.posts.concat(cat.posts)});
	}
}

export default flux.createStore(PostsStore, "PostsStore");
