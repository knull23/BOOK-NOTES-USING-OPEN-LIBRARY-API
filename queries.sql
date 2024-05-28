-- Create the booknotes database
CREATE DATABASE booknotes;

-- Connect to the booknotes database
\c booknotes;

-- Create the books table
CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  notes TEXT,
  rating INTEGER,
  read_date DATE,
  cover_url TEXT NOT NULL
);

-- Insert sample data with cover URLs fetched from Open Library API
INSERT INTO books (title, author, cover_url, notes, rating, read_date)
VALUES 
('To Kill a Mockingbird', 'Harper Lee', 'https://covers.openlibrary.org/b/id/8228691-L.jpg', 'Sample notes for To Kill a Mockingbird', 5, '2022-01-01'),
('1984', 'George Orwell', 'https://covers.openlibrary.org/b/id/7222246-L.jpg', 'Sample notes for 1984', 4, '2023-01-01'),
('The Great Gatsby', 'F. Scott Fitzgerald', 'https://covers.openlibrary.org/b/id/7222162-L.jpg', 'Sample notes for The Great Gatsby', 4, '2023-05-01');
('Pride and Prejudice', 'Jane Austen', 'https://covers.openlibrary.org/b/id/8225268-L.jpg', 'Sample notes for Pride and Prejudice', 5, '2023-04-15'),
('Moby-Dick', 'Herman Melville', 'https://covers.openlibrary.org/b/id/8231567-L.jpg', 'Sample notes for Moby-Dick', 4, '2023-03-10'),
('War and Peace', 'Leo Tolstoy', 'https://covers.openlibrary.org/b/id/7233606-L.jpg', 'Sample notes for War and Peace', 5, '2023-02-05'),
('The Catcher in the Rye', 'J.D. Salinger', 'https://covers.openlibrary.org/b/id/8224451-L.jpg', 'Sample notes for The Catcher in the Rye', 4, '2023-01-20'),
('Great Expectations', 'Charles Dickens', 'https://covers.openlibrary.org/b/id/8231857-L.jpg', 'Sample notes for Great Expectations', 5, '2022-12-30'),
('The Hobbit', 'J.R.R. Tolkien', 'https://covers.openlibrary.org/b/id/8232609-L.jpg', 'Sample notes for The Hobbit', 5, '2022-12-15'),
('Crime and Punishment', 'Fyodor Dostoevsky', 'https://covers.openlibrary.org/b/id/8225227-L.jpg', 'Sample notes for Crime and Punishment', 5, '2022-11-01'),
('The Adventures of Huckleberry Finn', 'Mark Twain', 'https://covers.openlibrary.org/b/id/8228414-L.jpg', 'Sample notes for The Adventures of Huckleberry Finn', 4, '2022-10-05'),
('The Odyssey', 'Homer', 'https://covers.openlibrary.org/b/id/8234862-L.jpg', 'Sample notes for The Odyssey', 4, '2022-09-10'),
('The Brothers Karamazov', 'Fyodor Dostoevsky', 'https://covers.openlibrary.org/b/id/8227826-L.jpg', 'Sample notes for The Brothers Karamazov', 5, '2022-05-30'),
('Anna Karenina', 'Leo Tolstoy', 'https://covers.openlibrary.org/b/id/8227785-L.jpg', 'Sample notes for Anna Karenina', 5, '2022-04-15'),
('Brave New World', 'Aldous Huxley', 'https://covers.openlibrary.org/b/id/8229782-L.jpg', 'Sample notes for Brave New World', 4, '2022-03-10')
