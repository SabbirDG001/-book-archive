document.getElementById('error').style.display = 'none';
document.getElementById('not-found').style.display = 'none';
const getBooks = () => {
    const searchField = document.getElementById('input-field');
    const searchText = searchField.value;
    if (searchText === '') {
        document.getElementById('error').style.display = 'block';
    }
    fetch(`https://openlibrary.org/search.json?q=${searchText}`)
        .then(res => res.json())
        .then(data => haveBooks(data));
    //clear data
    searchField.value = '';
};
const haveBooks = books => {
    console.log(books);
    const results = document.getElementById('results');
    results.innerText = `${books.docs.length}`
    const container = document.getElementById('book-container');
    const booksSelf = books.docs;
    container.textContent = '';
    if (books.docs == 0) {
        document.getElementById('not-found').style.display = 'block';
    }
    booksSelf.forEach(book => {
        // console.log(book);
        const div = document.createElement('div');
        div.classList.add('border', 'border-black', 'rounded', 'p-3', 'block');
        div.innerHTML = `
        <img class="w-1/4" src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="">
            <div>
                <h3 class="text-1xl font-semibold">${book.title}</h3>
            </div>
            <div>
                <h3>Author:${book.author_name}</h3>
                <h3>Publisher:${book.publisher}</h3>
                <h3>First published:${book.first_publish_year}</h3>
            </div>
        `;
        container.appendChild(div);
    });
}