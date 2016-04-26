import { checkProgress } from "js/siteWide/progress";

function checkpost() {
  const postItem = {
    data: function() {
      const id = document.querySelector(".input-id").value;
      const data = localStorage.getItem(`post(${id})`);
      if(data != null) {
        return JSON.parse(data);
      } else {
        return null
      }
    }(),
    count: function () {
      const numberOfPosts = document.querySelector(".input-posts-categories").value;
      return (numberOfPosts.replace(/\[|\]|"/gi,'')).split(",");
    }(),
    categories: function () {
      const categories = document.querySelector(".input-categories").value;
      return (categories.replace(/\[|\]|"/gi,'')).split(",");
    }(),
    checkboxes: function () {
      return document.getElementsByClassName("section-end");
    }(),
    id: function () {
      return document.querySelector(".input-id").value;
    }()
  };

  checkboxes();

  function checkboxes() {
    if(postItem.checkboxes.length === 0) {
      return;
    }

    if(postItem.data != null) {
      if(postItem.data.checkboxes > 0){
        checkInBoxes(postItem.data.checkboxes);
      }
    } else {
      const newPost = {
        id: postItem.id,
        categories: postItem.categories,
        progress: 0,
        maxCheckboxes: postItem.checkboxes.length,
        checkboxes: 0
      }
      localStorage.setItem(`post(${postItem.id})`, JSON.stringify(newPost));
    }
    addEventsToCheckBoxes();
  }

  function addEventsToCheckBoxes() {
    for(let i = 0; i < postItem.checkboxes.length; i++) {
      postItem.checkboxes[i].addEventListener("change", onCheckIn);
    }
  }

  function checkInBoxes(num) {
    for(var i = 0; i < num; i++){
      postItem.checkboxes[i].checked = true;
    }
  }

  function onCheckIn(e) {
    const checkbox = e.target;

    if(postItem.data === null) {
      return;
    }

    if(checkbox.checked) {
      if(postItem.data.checkboxes < postItem.data.maxCheckboxes) {
        saveEditedPost(1);
      }
    } else {
      if(postItem.data.checkboxes > 0) {
        saveEditedPost(-1)
      }
    }
  }

  function saveEditedPost(num) {
    postItem.data.checkboxes = postItem.data.checkboxes + num;
    postItem.data.progress = checkProgress(postItem.data.maxCheckboxes,
                                            postItem.data.checkboxes,
                                            addEndPostToCategory);
    localStorage.setItem(`post(${postItem.id})`, JSON.stringify(postItem.data));
  }

  function addEndPostToCategory() {
    for(var i = 0; i < postItem.categories.length; i++){
      const data = localStorage.getItem(`category(${postItem.categories[i].trim()})`);
      if(data != null) {
        const category = JSON.parse(data);
        if(category.posts > category.progress) {
          category.progress += 1;
          localStorage.setItem(`category(${postItem.categories[i].trim()})`, JSON.stringify(category));
        }
      } else {
        const newCategory = {
          id: postItem.categories[i],
          progress: 1,
          posts: postItem.count[i]
        }
        localStorage.setItem(`category(${postItem.categories[i].trim()})`, JSON.stringify(newCategory));
      }
    }
  }
}

export default checkpost;
