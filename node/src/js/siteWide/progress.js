export function getProgress(progress, className) {
  if(progress > 0) {
    const progressBar = document.getElementsByClassName(className)[0];
    if(progress === 25) {
      addClassTo(progressBar, "elementary");
    } else if(progress === 50) {
      addClassTo(progressBar, "intermediate");
    } else if(progress === 75) {
      addClassTo(progressBar, "advanced");
    } else if(progress === 100) {
      addClassTo(progressBar, "master");
    }
  }
}

export function checkProgress(max, checked, callback = null) {
  if(checked === 0) {
    return 0
  } else if (checked < (max / 2)) {
    return 25
  } else if (checked === Math.round(max / 2)) {
    return 50
  } else if (checked > (max / 2) && checked < max) {
    return 75
  } else if (checked === max) {
    if(callback != null) {
      callback();
    }
    return 100
  }
}

function addClassTo(item, name){
  item.className += " " + name;
}
