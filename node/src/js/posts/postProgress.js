import { checkProgress } from "js/siteWide/progress";

class PostProgress {
  constructor() {
    this.id = this.getId();
    this.post = this.getData();
    this.checkboxes = this.getInputCheckboxes();
    this.categories = this.getCategories();
    this.numberOfPosts = this.getnumberOfPosts();
  }

  static get sharedInstance() {
    return new PostProgress();
  }

  getnumberOfPosts() {
    const numberOfPosts = document.querySelector(".input-posts-categories").value;
    return (numberOfPosts.replace(/\[|\]|"/gi,'')).split(",");
  }

  getCategories() {
    const categories = document.querySelector(".input-categories").value;
    return (categories.replace(/\[|\]|"/gi,'')).split(",");
  }

  getInputCheckboxes() {
    return document.getElementsByClassName("section-end");
  }

  getId() {
    return document.querySelector(".input-id").value;
  }

  getData() {
    const data = localStorage.getItem(`post(${this.id})`);
    if(data != null) {
      return JSON.parse(data);
    } else {
      return null
    }
  }
}

function checkboxes() {
  const locationPath = window.location.pathname.split("/")[2];
  if(locationPath === undefined || locationPath === "categories") {
    return;
  }
  const checkboxes = PostProgress.sharedInstance.checkboxes;

  if(checkboxes.length === 0) {
    return;
  }

  const postId = PostProgress.sharedInstance.id;
  const categories = PostProgress.sharedInstance.categories;
  const post = PostProgress.sharedInstance.post;

  if(post != null) {
    if(post.checkboxes > 0){
      checkInBoxes(post.checkboxes);
    }
  } else {
    const newPost = {
      id: postId,
      categories: categories,
      progress: 0,
      maxCheckboxes: checkboxes.length,
      checkboxes: 0
    }
    localStorage.setItem(`post(${postId})`, JSON.stringify(newPost));
  }

  for(let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", onCheckIn);
  }
}

function checkInBoxes(num) {
  const checkboxes = PostProgress.sharedInstance.checkboxes;
  for(var i = 0; i < num; i++){
    checkboxes[i].checked = true;
  }
}

function onCheckIn(e) {
  const checkbox = e.target;
  const post = PostProgress.sharedInstance.post;

  if(post === null) {
    return;
  }

  if(checkbox.checked) {
    if(post.checkboxes < post.maxCheckboxes) {
      saveEditedPost(post, 1);
    }
  } else {
    if(post.checkboxes > 0) {
      saveEditedPost(post, -1)
    }
  }
}

function saveEditedPost(post, num) {
  const id = PostProgress.sharedInstance.id;
  post.checkboxes = post.checkboxes + num;
  post.progress = checkProgress(post.maxCheckboxes, post.checkboxes, addEndPostToCategory);
  localStorage.setItem(`post(${id})`, JSON.stringify(post));
}

function addEndPostToCategory() {
  const categories = PostProgress.sharedInstance.categories;
  const numberOfPosts = PostProgress.sharedInstance.numberOfPosts;

  for(var i = 0; i < categories.length; i++){
    const data = localStorage.getItem(`category(${categories[i].trim()})`);
    if(data != null) {
      const category = JSON.parse(data);
      if(category.posts > category.progress) {
        category.progress += 1;
        localStorage.setItem(`category(${categories[i].trim()})`, JSON.stringify(category));
      }
    } else {
      const newCategory = {
        id: categories[i],
        progress: 1,
        posts: numberOfPosts[i]
      }
      localStorage.setItem(`category(${categories[i].trim()})`, JSON.stringify(newCategory));
    }
  }
}

export default checkboxes;
