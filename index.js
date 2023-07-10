const express = require('express');
const path = require('path');
const redditData = require('./data.json');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))


//creating an api for home page//

app.get('/', (req, res)=>{
    res.render('home');
})

//creating an api for random number//

app.get('/random-number', (req, res)=>{
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', {p: num});
})

//creating an api for subreddir//

app.get('/r/:subreddit', (req, res)=>{
    const { subreddit } = req.params;
    const data = redditData[ subreddit ];

    if(data){
        res.render('sbreddit', {...data});
    }else{
        res.render('notFound', {subreddit})
    }
    
})


app.listen(5000, ()=>{
    console.log("SERVER STARTED ON PORT 5000")
})