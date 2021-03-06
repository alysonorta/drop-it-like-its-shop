// install dependencies; express, sequelize, dotenv
// require routes, sessions (for authentication)
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
console.log('loading routes');
const routes = require('./controllers');
const sequelize = require('./config/configuration');
const path = require('path');
// double check this plz
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
console.log('loading port');

// need middleware 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const sess = {
    secret: 'International super spy.....SUPER SPYYYY',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(routes);

sequelize.sync({force:false}).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
})