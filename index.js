const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const users = require("./state");
const products = require("./state");

app.get('/users', (request,response,next) => {
    response.json(users)
   });   
app.get('/users/:userId', (request,response,next) => {
    //request.params is built into express
    const userId =  request.params.userId;
    response.json(users[request.params.userId - 1])
   });
   app.post('/users', (request,response,next) => {
       let user = request.body;
       users.push(user);
       response.json(user)
   });   
app.post('/users/:id', (request,response,next) => {
    response.json({theidfromthepath:request.params.id})
   });   

app.put('/users/:id', (request,response,next) => {
    response.json({theidfromthepath:request.params.id})
   });    
app.delete('/users/:id', (request,response,next) => {
    response.json({theidfromthepath:request.params.id})
   }); 

app.listen(3002, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages", err);
});

