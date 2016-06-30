// Dependencies
// =============================================================
var inquirer = require('inquirer');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// (DATA)
// =============================================================
var friends = require(path.join(__dirname, 'app', 'data', 'friends.js'))

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page

app.get('/', function(req, res){
  //res.send("survey page")
  res.sendFile(path.join(__dirname, 'app', 'public', 'home.html'));
})

app.get('/home', function(req, res){
  //res.send("home page")
  res.sendFile(path.join(__dirname, 'app', 'public', 'home.html'));
})

app.get('/survey', function(req, res){
  //res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, 'app', 'public', 'survey.html'));
})

// Search for Matches - provides JSON
app.get('/api/friends', function(req, res){

	res.json(friends);
  // var chosen = req.params.friends;

  // if(chosen){
  //   console.log(chosen);

  //   for (var i=0; i <friends.length; i++){

  //     if (chosen == friends[i].routeName){
  //       res.json(friends[i]);
  //       return;
  //     }
  //   }

  //   res.json(false);
  // }

  // else{
  //   res.json(friends);
  // }
})

// Create New Characters - takes in JSON input
app.post('/api/new', function(req, res){

  var newcharacter = req.body;
  newcharacter.routeName = newcharacter.name.replace(/\s+/g, '').toLowerCase()

  console.log(newcharacter);

  characters.push(newcharacter);

  res.json(newcharacter);
})

// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function(){
  console.log('App listening on PORT ' + PORT);
})