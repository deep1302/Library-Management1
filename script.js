// Book Constructor
function Book(title, author, pages, genre) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
}

// UI Constructor
function UI() {}

// Add Book To List
UI.prototype.addBookToList = function(book) {
    const list = document.getElementById('book-list');
    // Create div element
    const row = document.createElement('div');
    // Insert cols
    row.innerHTML = `
        <div class="book">
            <h2>${book.title}</h2>
            <p>${book.author}</p>
            <p>${book.pages} pages</p>
            <p>Genre: ${book.genre}</p>
        </div>
    `;
    list.appendChild(row);
}

// Clear Fields
UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('genre').value = '';
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
    // Get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          pages = document.getElementById('pages').value,
          genre = document.getElementById('genre').value

    // Instantiate book
    const book = new Book(title, author, pages, genre);

    // Instantiate UI
    const ui = new UI();

    // Add book to list
    ui.addBookToList(book);

    // Clear fields
    ui.clearFields();

    e.preventDefault();
});

document.getElementById('search').addEventListener('keyup', function(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.book').forEach(function(book){
        const item = book.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
});
