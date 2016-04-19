import { getProgress } from "js/siteWide/progress";

function postsProgress() {
  const postsIds = document.querySelectorAll('.input-posts-id');
  if(postsIds.length === 0) {
    return;
  }

  for(var i = 0; i < postsIds.length; i++) {
    const postId = postsIds[i];
    const data = localStorage.getItem(postId.value);

    if(data != null) {
      const post = JSON.parse(data);
      const progress = post.progress;
      const className = `progress-bar-${postId.value}`;
      getProgress(progress, className);
    }
  }
}
export default postsProgress;
