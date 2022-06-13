require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors({
  origin: true,
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    name: 'max',
    store: new FileStore(),
    secret: process.env.SECRET,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
    },
  }),
);
app.use(errorHandler);
app.use((req, res, next) => {
  res.locals.admin = req.session.admin;
  next();
});

app.use('/api', router);

// Обработка ошибок


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
