'use strict';

const app = require('../app');


const onSuccess = function (data) {
  // if (data.game) {
  //   console.log(data.game);
  // } else {
  //   console.log(data.games);
  // }
// debugger;
// console.log(data.game.id);


  app.game = data.game;

  // let games = data.game.id;
  // debugger;

  // let obj = data.game;
  // let player = JSON.stringify(obj);
  // console.log(player);

console.log(app.game.length);



// $("#game-request").on("click", function () {
//   $("#change-password, #sign-out, #game-create, #game-request").hide();
  // $("#message3").text(games);

  // let obj = data.game.player_x;
  // let player = JSON.stringify(obj, null, 2);







  // debugger;




  // let objNew = JSON.parse(player);

  //  alert(newObj);
  //
  // $("#message3").text(player);


  // $("#message3").text("You have finished" + data.game.player_x);
  // console.log(games);
  // debugger;
  // console.log(data.game.player_x);
// });



};


const success = (data) => {
  console.log(data);

};


const signInSuccess = (data) => {

  app.user = data.user;
  console.log(data);



};


const signOutSuccess = () => {
  console.log('You sign out succesfully!');
  delete app.user;

};



//create a new game



  const getSuccess = (data) => {

 if (data.game) {

  //  console.log(data.game);

 } else {
   console.log(data.games);

   // number of games per user
  //  alert(data.games.length);
 }

//   if (data.game) {
//     console.log(data.game);
//   } else {
//     console.log(data.games);
//   }
//
// app.game = data.game;
// console.log(data.game.cells);

  // app.game = data.game;
  // // app.user = data.user
  // console.log(data.game);



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

     $("body.container-fluid").css("background-image" , "url(http://i.imgur.com/Q7WjLwN.png");
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

  $("body.container-fluid").css("background-image" , "url(http://i.imgur.com/Q7WjLwN.png");
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
