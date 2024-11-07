const express = require('express');
const morgan = require('morgan');

const app = express();

app.listen(3000);

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(morgan('dev'));

app.get('/', (request, response) => {
    const blogs = [
        {title: 'THIS IS  A TITLE', snnipet: 'THIS IS A SNIPPETTTT'},
        {title: 'THIS IS  A TITLE', snnipet: 'THIS IS A SNIPPETTTT'},
        {title: 'THIS IS  A TITLE', snnipet: 'THIS IS A SNIPPETTTT'},
        {title: 'THIS IS  A TITLE', snnipet: 'THIS IS A SNIPPETTTT'},
        {title: 'THIS IS  A TITLE', snnipet: 'THIS IS A SNIPPETTTT'},
    ];
    response.render('index', { title: 'HOMEPAGE', blogs});
});

app.get('/about', (request, response) => {
    response.render('about', { title: 'ABOUT PAGE'});
});

app.get('/create', (request, response) => {
    response.render('create', { title: 'CREATE new blogs'});
});

app.use((request, response) => {
    response.status(404).render('404', { title: 'ERROR Page'});
});