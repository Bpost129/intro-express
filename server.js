// import modules

import express from 'express'
import { todos } from './data/todo-data.js'

// create Express app

const app = express()

// configure the app (app.set)
app.set('view engine', 'ejs')


// mount Middleware (app.use)



// mount routes

app.get('/', (req, res) => {
  res.redirect('/home')
})

app.get('/home', (req, res) => {
  res.render('home')
})

app.get('/todos', (req, res) => {
  res.render('todos/index', {
    todos: todos
  })
})


// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})