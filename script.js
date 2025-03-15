function init(id) {
  renderShelfLevels(id);
}

function renderShelfLevels(id) {
  let contentRef = document.getElementById(id);
  contentRef.innerHTML = "";
  let arr = books;

  for (let indexBook = 0; indexBook < arr.length; indexBook++) {
    contentRef.innerHTML += templateShelfLevel(indexBook);
    renderComments(indexBook);
    toggleLike(indexBook);
  }
}

function templateShelfLevel(index) {
  return /*html*/ `
      <div class="shelf-level">
          <h2>${books[index].name}</h2>
          <div class="separator"></div>
          <img src="./assets/img/book-dummy.png" alt="${books[index].name} cover">
          <div class="separator"></div>
          <div class="book-info">
              <div class="book-info-head">
                  <span class="book-price">${books[index].price} €</span>
                  <div>
                    <span id="likes${index}"></span>
                    <button id="like-btn-icon${index}" class="like-btn" onclick="toggleLike(${index})">♥️</button>
                  </div>
              </div>
              <div class="book-info-body">
                <div class="key-column">
                  <span>Author:</span>
                  <span>Erscheinungsjahr:</span>
                  <span>Genre</span>
                </div>
                <div class="value-column">
                  <span>${books[index].author}</span>
                  <span>${books[index].publishedYear}</span>
                  <span>${books[index].genre}</span>
                </div>
              </div>
              <div class="separator"></div>
          </div>
          <div class="book-comments">
              <h3>Kommentare:</h3>   
              <div class="book-comments-wrapper">
                <div id="book-comments-content${index}" class="books-comments-content-table">
                </div>
              </div>
              <div class="book-add-comment">
                  <input type="text" id="comment-input${index}" class="comment-input-style" placeholder="Schreibe deinen Kommentar...">
                  <button onclick="addComment(${index})">📝</button>
              </div>
          </div>
      </div>
  `;
}

// console.log(books[0].comments.length);

function renderComments(index) {
  let arrComments = books[index].comments;
  let commentsContentRef = document.getElementById("book-comments-content" + index);
  commentsContentRef.innerHTML = "";

  switch (arrComments.length) {
    case 0:
      commentsContentRef.innerHTML = "keine Kommentare, schreibe du das erste";
      break;

    default:
      for (let indexComments = 0; indexComments < arrComments.length; indexComments++) {
        let nameAndComment = arrComments[indexComments];
        commentsContentRef.innerHTML += templateBookComments(nameAndComment);
      }
      break;
  }
}

function templateBookComments(nameAndComment) {
  return /*html*/ `
    <div class="books-comments-content-row">
      <span>${nameAndComment.name}</span>
      <span>: ${nameAndComment.comment}</span>
    </div>
  `;
}

function addComment(index){
  inputCommentRef = document.getElementById("comment-input" + index);
}

function toggleLike(index){
  let likesRef = document.getElementById(`likes${index}`);

  if (books[index].liked == true) {
    likesRef.innerHTML = books[index].likes + 1;
    books[index].liked = false;
    document.getElementById(`like-btn-icon${index}`).innerHTML = '♥️';

  } else {
    likesRef.innerHTML = books[index].likes;
    books[index].liked = true;
    document.getElementById(`like-btn-icon${index}`).innerHTML = '🖤';
  }
}