//javascript class example

function player(xStart, yStart, socketId){

  if(xStart){
   this.x=xStart;
  }
  else{
    this.x=width/2;
  }
  if(yStart){
    this.y=yStart;
  }
  else{
    this.y=height/2;
  }
  this.xOld=this.x;
  this.color= getRandomColor();
  this.socketId=socketId;//guid();
  this.speed=1;

  this.yOld=this.y;
  this.keys=[];
}

player.prototype.update = function(){
  // w = 38
  // a = 65
  // s = 83
  // d = 68
  if('87' in this.keys){  //w up
      this.y-=this.speed;
  }
  if('83' in this.keys){  //s down
      this.y+=this.speed;
  }
  if('65' in this.keys){  //a left
      this.x-=this.speed;
  }
  if('68' in this.keys){  //d right
      this.x+=this.speed;
  }

  // if(this.keys.length>0){
  //   io.emit('player position', this);
  // }
}

function playerList(){
  this.players=new Array;
}
playerList.prototype.add = function(socketId){
  this.players.push(new player(200,200, socketId));
}

playerList.prototype.removeBySocketId = function(socketId){
  for(var i = 0; i<this.players.length;i++){

    if (this.players[i].socketId==socketId){
      this.players.splice(i,1);
      break
    }
  }
}

playerList.prototype.changeKeysBySocketId = function(socketId, keys){
  for(var i = 0; i<this.players.length;i++){
    if (this.players[i].socketId==socketId){
      this.players[i].keys=keys;
    }
  }
}

playerList.prototype.update = function(){
  for(var i = 0; i<this.players.length;i++){
    this.players[i].update();
  }
}
var players= new playerList();


// //load schemas
// var message = require('./models/message.js');
// //creating a message
// var messageToSave = new message({
//   user:'dan',
//   message:'whats up?'
// });
// //saving a message
// messageToSave.save(function(err, doc){
//   if(err){
//     console.log(error);
//   }
//   else{
//     console.log("message saved sucessfully");
//   }
// });

// //twillio
// var client = require('twilio')(config.accountSid, config.authToken);

// //twilio requires bodyParser to view and send text messages
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended: false}));

// //creating a text message
// client.messages.create({    //send text message code
//     to: "+16107419998",
//     from: "+18148063881",
//     body: "app has been started ",
// }, function(err, message) {
//     console.log(message.sid);
// });
