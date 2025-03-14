function init(id) {
  renderBooks(id);
}

function renderBooks(id) {
  let contentRef = document.getElementById(id);
  contentRef.innerHTML = "";
  let arr = books;

  for (let indexBook = 0; indexBook < arr.length; indexBook++) {
    contentRef.innerHTML += /*html*/ `
            <div class="shelf-level">
                <h2>Die Geheimnisse des Ozeans</h2>
                <div class="separator"></div>
                <img src="./assets/img/book-dummy.png" alt="">
                <div class="separator"></div>
                <div class="book-info">
                    <div class="book-info-head">
                        <span class="book-price">19,99</span>
                        <span class="like-btn">♥️</span>
                    </div>
                    <div class="book-info-body">
                    <table>
                        <tr>
                            <td>Author:</td>
                            <td>Clara Meer</td>
                        </tr>
                        <tr>
                            <td>Erscheinungsjahr:</td>
                            <td>2018</td>
                        </tr>
                        <tr>
                            <td>Genre</td>
                            <td>Fantasy</td>
                        </tr>
                    </table>
                    </div>
                    <div class="separator"></div>
                </div>
                <div class="book-comments">
                    <div class="book-comments-content">
                        <span>Leser123</span>
                        <span>Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.</span>
                    </div>
                    <div class="book-add-comment">
                        <input type="text" name="" id="" placeholder="Schreibe dein Kommentar...">
                        <button>📝</button>
                    </div>
                </div>
            </div>            
        `;
  }
}
