var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){ res.sendFile('E:/node-example/home.html');
});

//Whenever someone connects this gets executed
io.on('connection', function(socket){
   console.log('A user connected');
   
   //Whenever someone disconnects this piece of code executed
   socket.on('disconnect', function () {
      console.log('A user disconnected');
   });
});
http.listen(3000, function(){
   console.log('listening on *:3000');
});

var server = app.listen(2000, function () {  
   var host = server.address().address;  
   var port = server.address().port;  
   console.log('Example app listening at http://%s:%s', host, port);  
 });  