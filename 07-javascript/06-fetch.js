const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const addBookToDOM = (book) => {
  let element = document.createElement("div");
  let title = document.createElement("h3");
  let author = document.createElement("p");
  let released = document.createElement("p");
  let pages = document.createElement("p");

  title.textContent = book.name;
  author.textContent = book.authors[0];
  released.textContent = book.released.substr(0, 4);
  pages.textContent = `${book.numberOfPages} pages`;

  element.appendChild(title);
  element.appendChild(author);
  element.appendChild(released);
  element.appendChild(pages);

  element.style.display = "flex";
  element.style.flexDirection = "column";
  element.style.alignItems = "center";
  element.style.marginTop = "20px";

  app.appendChild(element);
};

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((book) => {
        addBookToDOM(book);
      });
    })
    .catch((error) => {
      let element = document.createElement("div");
      element.textContent = "An error occurred";
      app.append(element);
    })
    .finally(() => {
      let loader = document.querySelector("#loading");
      app.removeChild(loader);
    });
};

fetchData(url);
