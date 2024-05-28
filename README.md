# Book Notes Web Application

Welcome to the Book Notes Web Application repository! This project allows users to manage their book collection by adding, editing, and deleting books, along with adding notes, ratings, and read dates.

## Overview

This web application is built using Node.js, Express.js, PostgreSQL, and EJS. It allows users to perform the following actions:

- View a list of all books with their details (title, author, notes, rating, read date, and cover image).
- Add a new book to the collection, which includes fetching book cover images using the Open Library API.
- Edit existing book details.
- Delete books from the collection.

The application also uses a CSS file for styling, located in the `public/styles.css` directory.

## Setup

To run the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Go to https://openlibrary.org/dev/docs/api/covers where you will obtain the Cover API Key
5. Start the server using `npm start`.
6. Access the application in your web browser at `http://localhost:3000`.

## Dependencies

To run this project locally, you need to have the following dependencies installed:

- Node.js
- npm (Node Package Manager)
- PostgreSQL

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/knull23/BOOK-NOTES.git
   cd book-notes-web-app
   ```
2. **Install dependencies:**
  ```bash
   install npm init -y
   install express ejs axios
   nodemon index.js
  ```

## Configuration

1.**Database Setup:**

  -Ensure PostgreSQL is installed and running on your system.
  -Create a PostgreSQL database named booknotes.
  -Update the database connection details in app.js if needed (username, password, host, port).

2.**Environment Variables:**

  -Create a .env file in the root directory and add the following environment variables

  DATABASE_URL=postgres://<username>:<password>@localhost:5432/booknotes
  Replace <username> and <password> with your PostgreSQL credentials.

## Usage

 -Navigate to http://localhost:3000 in your web browser to view the list of books.
 -Click on Add New Book to add a new book to the collection.
 -Click on Edit to edit the details of a book.
 -Click on Delete to delete a book from the collection.

## Folder Structure
book-notes-web-app/
├── public/
│   └── styles.css
├── views/
│   ├── index.ejs
│   ├── new-book.ejs
│   └── edit-book.ejs
├── app.js
├── package.json
├── package-lock.json
├── .env
└── README.md

 -public/: Contains static assets (CSS, images).
 -views/: Contains EJS templates for rendering HTML.
 -app.js: Node.js application entry point.
 -.env: Environment variable file (not included in the repository).
 
## Dependencies

 -express: Fast, unopinionated, minimalist web framework for Node.js.
 -pg: Non-blocking PostgreSQL client for Node.js.
 -axios: Promise-based HTTP client for the browser and Node.js.
 -body-parser: Node.js body parsing middleware.

## Credits
 -The book cover images are fetched from the Open Library API.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or create a pull request.



   
