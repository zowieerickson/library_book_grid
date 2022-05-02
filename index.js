async function getBooks() {
    const response = await fetch(`books.json`);
    const data = await response.json();
    return data;
}

function displayBooksHtml(book) {
    return `
    <div class="book">
        <div class="book-spine"></div>
        <div class="book-cover">${book.title}</div>
        <div class="book-footer"></div>
    </div>

    `
}

getBooks().then(books => {
    console.log(books)
    document.body.innerHTML = `
    <div class="books-container">
    ${books.map(book => displayBooksHtml(book)).join('')}
    </div>
    `;
})