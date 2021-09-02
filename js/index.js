const getBooks = () => {
    const searchText = document.getElementById('input-field').value;
    fetch(`https://openlibrary.org/search.json?q=${searchText}`)
        .then(res => res.json())
        .then(data => haveBooks(data));
};
const haveBooks = books => {
    console.log(books);
    const results = document.getElementById('results');
    results.innerText = `${books.docs.length}`
    const container = document.getElementById('book-container');
    const booksSelf = books.docs;
    booksSelf.forEach(book => {
        // console.log(book);
        const div = document.createElement('div');
        div.classList.add('border');
        div.classList.add('border-black');
        div.classList.add('rounded');
        div.classList.add('p-3');
        div.innerHTML = `
        <img src="" alt="">
            <h3>Book name:${book.title}</h3>
            <h3>Author:${book.author_name}</h3>
            <h3>Publisher:${book.publisher}</h3>
            <h3>First published:${book.first_publish_year}</h3>
        `;
        container.appendChild(div);
    });
}