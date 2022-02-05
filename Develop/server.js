const fs = require('fs');
const path = require('path');
const express = require('express');
// const { notes } = require('./db/db.json');
const res = require('express/lib/response');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes')

// insert routes here

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());
app.use('/notes', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
  