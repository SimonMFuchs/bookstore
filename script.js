function init(id) {
  loadBooksLocal();
  renderShelfLevels(id);
}

function renderShelfLevels(id) {
  let contentRef = document.getElementById(id);
  contentRef.innerHTML = "";
  let arr = books;

  for (let indexBook = 0; indexBook < arr.length; indexBook++) {
    contentRef.innerHTML += templateShelfLevel(indexBook);
    renderComments(indexBook);
    setLikeIcon(indexBook);
  }
}

function renderComments(index) {
  let arrComments = books[index].comments;
  let commentsContentRef = document.getElementById("book-comments-content" + index);
  commentsContentRef.innerHTML = "";
  commentsTemplateSwitch(arrComments, commentsContentRef);
  saveBooksLocal();
}

function commentsTemplateSwitch(arrComments, commentsContentRef) {
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

function toggleLike(index) {

  if (books[index].liked == true) {
    books[index].liked = false;    
  } else {
    books[index].liked = true;    
  }

  setLikeIcon(index);
  saveBooksLocal();
}

function setLikeIcon(index) {
  let likesRef = document.getElementById(`likes${index}`);

  if (books[index].liked == true) {
    likesRef.innerHTML = books[index].likes + 1;
    document.getElementById(`like-btn-icon${index}`).classList.add('like-btn-liked');
    document.getElementById(`like-btn-icon${index}`).classList.remove('like-btn-not-liked');
  } else {
    likesRef.innerHTML = books[index].likes;
    document.getElementById(`like-btn-icon${index}`).classList.add('like-btn-not-liked');
    document.getElementById(`like-btn-icon${index}`).classList.remove('like-btn-liked');
  }
}

function addComment(index) {
  inputCommentRef = document.getElementById("comment-input" + index);
  let commentObj = {
    name: `Me`,
    comment: `${inputCommentRef.value}`,
  };
  books[index].comments.unshift(commentObj);
  renderComments(index);
  inputCommentRef.value = "";
}

function saveBooksLocal() {
  localStorage.setItem("books", JSON.stringify(books));
}

function loadBooksLocal() {
  let booksLocal = JSON.parse(localStorage.getItem("books"));

  if (!booksLocal == "") {
    books = booksLocal;
  }
}

function permitComment(index){
  let commented = books[index].comments.find((element) => element['name'] == "Me");
  let inputRef = document.getElementById(`comment-input${index}`).value;
  if (commented)  {
    alert("Du hast dieses Buch bereits kommentiert.");
  } else if(inputRef.length < 3) {
    alert("Dein Kommentar ist zu kurz.")
  } else {
    addComment(index);
  } 
}