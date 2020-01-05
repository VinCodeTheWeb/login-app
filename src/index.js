const express = require('express');
require('./db/db');

const app = express();

const userRoutes = require('./routes/user');

app.use(express.json());
app.use(userRoutes);

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
