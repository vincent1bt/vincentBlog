import { getProgress } from "js/siteWide/progress";
import { checkProgress } from "js/siteWide/progress";

function categoriesProgress() {
  if(window.location.pathname != "/posts/categories") {
    return;
  }
  const categoriesIds = document.querySelectorAll('.input-category-id');

  for(var i = 0; i < categoriesIds.length; i++) {
    const id = categoriesIds[i].value;
    const data = localStorage.getItem(`${id}`);
    if (data != null) {
      const category = JSON.parse(data);
      const progress = checkProgress(category.posts, category.progress);
      const className = `progress-bar-${id}`;
      getProgress(progress, className);
    }
  }
}

export default categoriesProgress;
