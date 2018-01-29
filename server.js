const express = require('express');
const path = require('path');

//init app
const app = express();

//load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//home route
app.get('/', function(req,res){
  let time = [
    { id:1,
      record: 'bustin',
      rapper: 'bleep',
      tracks: 4
    }
    { id:2,
      record: 'reppin',
      rapper: 'bleek',
      tracks: 6
    }
    { id:3,
      record: 'stealin',
      rapper: 'bonkers b',
      tracks: 27
    }
  ]
  res.render('index', {
    title: 'time',
    time: 'title'
  });
});

//add route
app.get('/time/add', function(req,res){
  res.render('add_time', {
    title: 'add some time'
  });
})

//start server
app.listen(3000, function(){
  console.log('server started on 3000');
});
