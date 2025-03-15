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
  }
}

// console.log(
//   books.filter((element) => {return element["name"] == "Die Geheimnisse des Ozeans"})
// );

function templateShelfLevel(index) {
  return /*html*/ `
          <div class="shelf-level">
              <h2>${books[index].name}</h2>
              <div class="separator"></div>
              <img src="./assets/img/book-dummy.png" alt="">
              <div class="separator"></div>
              <div class="book-info">
                  <div class="book-info-head">
                      <span class="book-price">${books[index].price} €</span>
                      <span class="like-btn">${books[index].likes} ♥️</span>
                  </div>
                  <div class="book-info-body">
                  <table>
                      <tr>
                          <td>Author:</td>
                          <td>${books[index].author}</td>
                      </tr>
                      <tr>
                          <td>Erscheinungsjahr:</td>
                          <td>${books[index].publishedYear}</td>
                      </tr>
                      <tr>
                          <td>Genre</td>
                          <td>${books[index].genre}</td>
                      </tr>
                  </table>
                  </div>
                  <div class="separator"></div>
              </div>
              <div class="book-comments">
                  <h3>Kommentare:</h3>   
                  <div class="book-comments-wrapper">
                    <div id="book-comments-content${index}"></div>
                  </div>
                  <div class="book-add-comment">
                      <input type="text" name="" id="" placeholder="Schreibe dein Kommentar...">
                      <button>📝</button>
                  </div>
              </div>
          </div>
      `;
}

console.log(books[0].comments.length);

function renderComments(index) {
  let arrComments = books[index].comments;
  let commentsContentRef = document.getElementById("book-comments-content" + index);
  commentsContentRef.innerHTML = "";

switch (arrComments.length) {
  case 0:
    commentsContentRef.innerHTML = "keine Kommentare, schreibe du das erste"
    break;

  default:
    break;
}

  for (let indexComments = 0; indexComments < arrComments.length; indexComments++) {
    let nameAndComment = arrComments[indexComments];
    commentsContentRef.innerHTML += /*html*/ `
      <table>
          <tr>
              <td>${nameAndComment.name}</td>
              <td>:${nameAndComment.comment}</td>
          </tr>
      </table>
    `;
  }
}

{
  /* <table>
<tr>
    <td>Leser123</td>
    <td>:Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.</td>
</tr>
<tr>
    <td>Leser123</td>
    <td>:Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.</td>
</tr>
<tr>
    <td>Leser123</td>
    <td>:Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.</td>
</tr>
</table> */
}
