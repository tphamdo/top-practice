const express = require('express');
const app = express();

// Middleware 1
app.use((req, res, next) => {
  res.locals.message = 'Hello from Middleware 1';
  next();
});

// Middleware 2
app.use((req, res, next) => {
  console.log(res.locals.message); // Logs: Hello from Middleware 1
  res.locals.message += ' and Middleware 2';
  next();
});

// Route handler
app.get('/', (req, res) => {
  res.send(res.locals.message); // Sends: Hello from Middleware 1 and Middleware 2
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
