const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3500);

app.get('/', async (req, res) => {
  try {
    res.send(`${req.method}: ${req.path}`);
  } catch (err) {
    console.err(err);
  }
});

app.listen(app.get('port'), () =>
  console.log(`Server is listening on port ${app.get('port')}...`)
);
