function init(id) {
  renderShelfLevels(id);
}

function renderShelfLevels(id) {
  let contentRef = document.getElementById(id);
  contentRef.innerHTML = "";
  let arr = books;

  for (let indexBook = 0; indexBook < arr.length; indexBook++) {
    contentRef.innerHTML += templateShelfLevel();
  }
}
