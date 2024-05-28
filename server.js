import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import axios from "axios";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "booknotes",
  password: "Saumil@23",
  port: 5432,
});
db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err.stack);
  } else {
    console.log("Connected to the database.");
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Fetch book cover from Open Library API
async function fetchBookCover(title) {
  try {
    const response = await axios.get(
      `https://openlibrary.org/search.json?title=${encodeURIComponent(title)}`
    );
    if (response.data.docs && response.data.docs.length > 0) {
      const coverId = response.data.docs[0].cover_i;
      return coverId
        ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
        : "https://via.placeholder.com/150";
    } else {
      console.error("No book found for title:", title);
      return "https://via.placeholder.com/150";
    }
  } catch (error) {
    console.error("Error fetching book cover:", error);
    return "https://via.placeholder.com/150";
  }
}

app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM books ORDER BY read_date DESC");
    res.render("index", { books: result.rows });
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/new", (req, res) => {
  res.render("new-book");
});

app.post("/new", async (req, res) => {
  const { title, author, notes, rating, read_date } = req.body;
  try {
    const cover_url = await fetchBookCover(title);
    await db.query(
      "INSERT INTO books (title, author, cover_url, notes, rating, read_date) VALUES ($1, $2, $3, $4, $5, $6)",
      [title, author, cover_url, notes, rating, read_date]
    );
    res.redirect("/");
  } catch (error) {
    console.error("Error adding new book:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/edit/:id", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM books WHERE id = $1", [
      req.params.id,
    ]);
    res.render("edit-book", { book: result.rows[0] });
  } catch (error) {
    console.error("Error fetching book for edit:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/edit/:id", async (req, res) => {
  const { title, author, notes, rating, read_date } = req.body;
  try {
    const cover_url = await fetchBookCover(title);
    await db.query(
      "UPDATE books SET title = $1, author = $2, cover_url = $3, notes = $4, rating = $5, read_date = $6 WHERE id = $7",
      [title, author, cover_url, notes, rating, read_date, req.params.id]
    );
    res.redirect("/");
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/delete/:id", async (req, res) => {
  try {
    await db.query("DELETE FROM books WHERE id = $1", [req.params.id]);
    res.redirect("/");
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});




