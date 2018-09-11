const express = require('express');

const app = express();

const users = {
  1: {
    id: 1,
    name: 'user1',
    books: [100]
  }
}

const books = {
  100: {
    id: 100,
    userId: 1,
    title: 'book1',
  }
}

app.get('/books', (req, res) => {
  const book = books[req.query.id]
  res.send({
    id: book.id,
    title: book.title,
    userId: book.userId,
  })
})

app.get('/users', (req, res) => {
  const user = users[req.query.id]
  res.send({
    id: user.id,
    name: user.name,
    books: user.books
  })
})

app.listen(3001)