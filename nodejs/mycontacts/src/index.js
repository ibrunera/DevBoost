const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('Hello worlds');
});

app.listen(3000, () => console.log('Server start at http://localhost:3000'));
