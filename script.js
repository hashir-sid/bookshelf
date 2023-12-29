function addBook() {
    var bookName = document.getElementById("bookName").value;
    var authorName = document.getElementById("authorName").value;

    if (bookName && authorName) {
        var bookshelf = document.getElementById("bookshelf");

        // Create a new book element
        var bookElement = document.createElement("div");
        bookElement.className = "book";
        bookElement.innerHTML = "<strong>" + bookName + "</strong><br>By: " + authorName;

        // Append the new book to the bookshelf
        bookshelf.appendChild(bookElement);

        // Clear the input fields
        document.getElementById("bookName").value = "";
        document.getElementById("authorName").value = "";
    } else {
        alert("Please enter both book name and author name.");
    }
}
