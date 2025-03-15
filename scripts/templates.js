function templateShelfLevel(index) {
  return /*html*/ `
        <div class="shelf-level">
            <h2>${books[index].name}</h2>
            <div class="separator"></div>
            <img src="${books[index].image}" alt="${books[index].name} cover">
            <div class="separator"></div>
            <div class="book-info">
                <div class="book-info-head">
                    <span class="book-price">${books[index].price.toFixed(2)} €</span>
                    <div>
                      <span id="likes${index}"></span>
                      <button id="like-btn-icon${index}" class="like-btn" onclick="toggleLike(${index})">♥️</button>
                    </div>
                </div>
                <div class="book-info-body">
                  <div class="key-column">
                    <span>Author</span>
                    <span>Erscheinungsjahr</span>
                    <span>Genre</span>
                  </div>
                  <div class="value-column">
                    <span>: ${books[index].author}</span>
                    <span>: ${books[index].publishedYear}</span>
                    <span>: ${books[index].genre}</span>
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
                    <button onclick="addComment(${index})" class="comment-btn">📝</button>
                </div>
            </div>
        </div>
    `;
}

function templateBookComments(nameAndComment) {
  return /*html*/ `
        <div class="books-comments-content-row">
        <span>${nameAndComment.name}</span>
        <span>: ${nameAndComment.comment}</span>
        </div>
    `;
}
