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

function addComment(index){
  inputCommentRef = document.getElementById("comment-input" + index);
  let commentObj = {
    "name":`Giuli`,
    "comment":`${inputCommentRef.value}`
  }
  books[index].comments.unshift(commentObj);
  renderComments(index);
  inputCommentRef.value = "";
}

console.log(books[0].comments);


// console.log(books[0].comments.length);
