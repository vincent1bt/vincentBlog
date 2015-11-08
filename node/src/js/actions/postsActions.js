import flux from 'control';
import request from 'superagent';

class PostsActions {
	loadAllposts() {
		Promise.resolve(request.get("/categories.json"))
		 .then((data) => {
		 	this.actions.updatePosts(data.body);
		 })
		 .catch((error) => {
		 	console.log(error);
		 });
	}

	addCategory(cat) {
		return { cat }
	}

	updatePosts(posts) {
		return { posts }
	}
}

export default flux.createActions(PostsActions);