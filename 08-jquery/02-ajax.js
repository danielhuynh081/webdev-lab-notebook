$(document).ready(() => {
  const url = "https://anapioficeandfire.com/api/books/";
  const app = document.querySelector("#books");
  const loading = document.querySelector("#loading");

  // Show loading indicator
  if (loading) loading.style.display = "block";

  // Function to add a book to the DOM
  const addBookToDOM = (item) => {
    console.log(item.name);

    $("#books").append(
      $("<div>")
        .css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        })
        .append($("<h3>").text(item.name))
        .append($("<p>").text(`by ${item.authors[0]}`))
        .append($("<p>").text(item.released.substr(0, 4)))
        .append($("<p>").text(`${item.numberOfPages} pages`))
    );
  };

  // Function to fetch data from the API
  const fetchData = (url) => {
    $.ajax({
      url: url,
      method: "GET",
      success: (data) => {
        console.log("API Response:", data);

        data.forEach((item) => {
          addBookToDOM(item);
        });

        // Hide loading indicator
        if (loading) loading.style.display = "none";
      },
      error: (error) => {
        console.log("Error fetching data:", error);
        if (loading) loading.textContent = "Failed to load books.";
      },
    });
  };

  // Start fetching data
  fetchData(url);
});
