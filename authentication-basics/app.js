/////// app.js
const dotenv = require('dotenv');
dotenv.config();

const { Pool } = require('pg');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const path = require('path');
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({ secret: 'cats', resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

/* set cookie */
app.use(cookieParser());
app.use((req, res, next) => {
  console.log('cookies:', req.cookies);
  res.cookie('tphamdoCookie', 69, { maxAge: 90000 });
  next();
});

app.get('/', (req, res) => {
  console.log(req.session);
  req.session.messages = undefined;
  res.render('index', { user: req.user });
});
app.get('/sign-up', (req, res) => res.render('sign-up-form'));
app.post('/sign-up', async (req, res, next) => {
  try {
    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
      if (!err) {
        await pool.query(
          'INSERT INTO users (username, password) VALUES ($1, $2)',
          [req.body.username, hashedPassword],
        );
      }
      res.redirect('/');
    });
  } catch (err) {
    return next(err);
  }
});

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const { rows } = await pool.query(
        'SELECT * FROM users WHERE username = $1',
        [username],
      );
      const user = rows[0];

      if (!user) {
        return done(null, false, { message: 'Incorrect username' });
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return done(null, false, { message: 'Incorrect password' });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }),
);
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [
      id,
    ]);
    const user = rows[0];

    done(null, user);
  } catch (err) {
    done(err);
  }
});

app.post(
  '/log-in',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/',
    failureMessage: true,
  }),
);

app.get('/log-out', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

app.listen(3000, () => console.log('app listening on port 3000!'));
