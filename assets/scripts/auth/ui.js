'use strict';

const app = require('../app');
// const api = require('./api');
// const ui = require('./ui');



const onSuccess = function (data) {

  app.game = data.game;

  // let games = data.game.id;

console.log(app.game.length);
console.log('Game is created!');

};


const success = (data) => {
  console.log(data);

};


const signInSuccess = (data) => {

  app.user = data.user;
  console.log(data);
  console.log(data.user);
    $("p, .board, #button_1").hide();
    $("#play").show();



};


const signOutSuccess = () => {
  console.log('You sign out succesfully!');
  delete app.user;

};



//create a new game
  const getSuccess = (data) => {

 if (data.game) {

 } else {
   console.log(data.games);
 }



  $("#message3").text("You have played " + data.games.length + " games!");

  $("#reset-button").on("click", function () {
  $(" #game-request").hide();
  $("#game-create").show();


  });





  $("#button3").on("click", function () {
    $("#message3").hide();
    $("#change-password").hide();
    $("#game-request").hide();

  });



  $("#reset-button").on("click", function () {
    // $("#message1").hide();
    $("#change-password").show();

    // $("#game-request").hide();

  });

// $("#game-create").on("click", function () {
//   $("#game-request").hide();
// })




  $("#sign-out").on("click", function () {
    $("#message3").hide();
  });




};


const failureSignIn = () => {

    //  $("body.container-fluid").css("background-image" , "url(http://i.imgur.com/Q7WjLwN.png");
     $("#change-password, #sign-out, #game-create, #game-request, .container, footer, nav, #message1").hide();
     $("#sign-in, #sign-up").show();

    //  alert("Hey");



     $("#message3").html("<span><b>PLEASE ENTER VALID USER INFORMATION!</b></span>");


     $("#button2").on("click", function () {
     $("#message3").hide();

     });



};

const failure = (error) => {
  console.error(error);

  // $("body.container-fluid").css("background-image" , "url(http://i.imgur.com/Q7WjLwN.png");
  $("#change-password, #sign-out, #game-create, #game-request, .container, footer, nav, #message1").hide();
  $("#sign-in, #sign-up").show();

 //  alert("Hey");



  $("#message3").html("<span><b>PLEASE ENTER VALID USER INFORMATION!</b></span>");
  $("#sign-up").hide();

  $("#button2").on("click", function () {
  $("#message3").hide();

  });
};


const onUpdate = function (data) {
  if (data.game) {
    console.log(data.game);
  } else {
    console.log(data.games);
  }


};


module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  onSuccess,
  onUpdate,
  getSuccess,
  failureSignIn
};
