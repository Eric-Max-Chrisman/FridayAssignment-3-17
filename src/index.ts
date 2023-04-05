//notest
//res.redirect(`/users/${user.userId}`);
//firefox developer edition

import './config';
import 'express-async-errors';
import express, { Express } from 'express';

import session from 'express-session';
import connectSqlite3 from 'connect-sqlite3';
import {
  registerUser,
  logIn,
  getUserProfileData,
  getAllUserProfiles,
  resetProfileViews,
  updateUserEmail,
  setNewName,
} from './controllers/UserController';

const app: Express = express();
app.use(express.static('public', {extensions: ['html']}));

const { PORT, COOKIE_SECRET } = process.env;

const SQLiteStore = connectSqlite3(session);

app.use(
  session({
    store: new SQLiteStore({ db: 'sessions.sqlite' }),
    secret: COOKIE_SECRET,
    cookie: { maxAge: 8 * 60 * 60 * 1000 }, // 8 hours
    name: 'session',
    resave: false,
    saveUninitialized: false,
  })
);

app.set('view engine', 'ejs'); // html ss rendering
/*
app.set('/homePage', (res, req) => {
  const struct: number = 3;
  res.render(struct);
})
*/
//check the slides
//
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static('public'));

app.get('/', (req, res) => {
    const struct: number = 3;
    console.log("eafew");
    res.render('homePage', {struct});
});

app.post('/api/users', registerUser); // Create an account
app.post('/api/login', logIn); // Log in to an account
app.post('/api/users/profileViews/reset', resetProfileViews); // Log in to an account

app.get('/api/users', getAllUserProfiles);
app.get('/api/users/:targetUserId', getUserProfileData);
app.post('/api/users/:targetUserId/email', updateUserEmail);

app.get('/users/:targetUserId', getUserProfileData);

app.post('/api/users/:userId/name', setNewName);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});


