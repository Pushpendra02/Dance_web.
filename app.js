const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

app.use('/static', express.static('static'))// For serving static files
app.use(express.urlencoded())


// Set the template engine as pug
app.set('view engine', 'pug')

// Set the views directory
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    const params = { }
    res.status(200).render('home.pug', params);
})
app.get('/contact', (req, res) => {
    const params = { }
    res.status(200).render('contact.pug', params);
})


app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});