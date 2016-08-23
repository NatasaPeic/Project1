'use strict';


const api = require ('./auth/api');
const ui = require ('./auth/ui');



          const winner = function () {
            for (let i = 1; i <= 3; i++) {

              // let domId = '#R' + i + 'C1';
              // console.log(domId);



              //horizontally X
              if($("#R" + i + "C1").text() === "X" && $("#R" + i + "C1").text() === $("#R" + i + "C2").text() &&
              $("#R" + i + "C1").text() === $("#R" + i + "C3").text()){

                $("#message").text("X wins!");

                $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3").off();


                // $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3,fieldset, input, footer, nav").hide();

                // $("body.container-fluid").css("background-image" , "url(http://i.imgur.com/yuj3hc1.png)");

                // alert("X won!");


              // horizontally O
              } else if ($("#R" + i + "C1").text() === "O" && $("#R" + i + "C1").text() === $("#R" + i + "C2").text() &&
              $("#R" + i + "C1").text() === $("#R" + i + "C3").text()) {

                // console.log("O won!");
                $("#message").text("O wins!");

                $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3").off();


              // vertically X
            } else if ($("#R1" + "C" + i).text() === "X" && $("#R1" + "C" + i).text() === $("#R2" + "C" + i).text() &&
              $("#R1" + "C" + i).text() === $("#R3" + "C" + i).text()) {

                  $("#message").text("X wins!");

                  $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3").off();

                // $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3, fieldset, input, footer, nav").hide();

              // $("body.container-fluid").css("background-image" , "url(http://i.imgur.com/IUPrz7E.png)");

                // console.log("X won!");

              } else if ($("#R1" + "C" + i).text() === "O" && $("#R1" + "C" + i).text() === $("#R2" + "C" + i).text() &&
                $("#R1" + "C" + i).text() === $("#R3" + "C" + i).text()) {

                  // console.log("O won!");
                  $("#message").text("O wins!");

                  $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3").off();

              }

            }

            // diagonally X left to right
            if($("#R1C1").text() === "X" &&  $("#R1C1").text() === $("#R2C2").text() && $("#R1C1").text() === $("#R3C3").text()){


              // $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3, fieldset, input, footer, nav").hide();

            // $("body.container-fluid").css("background-image" , "url(http://i.imgur.com/IUPrz7E.png)");

              // console.log("X won!");

                $("#message").text("X wins!");

                $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3").off();


            // diagonally O left to right
            } else if ($("#R1C1").text() === "O" &&  $("#R1C1").text() === $("#R2C2").text() && $("#R1C1").text() === $("#R3C3").text()) {

              // console.log("O won!");
              $("#message").text("O wins!");

              $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3").off();
            }


            // diagonally X right to left
            if($("#R1C3").text() === "X" &&  $("#R1C3").text() === $("#R2C2").text() && $("#R1C3").text() === $("#R3C1").text()){

              // $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3, fieldset, input, footer, nav").hide();

            // $("body.container-fluid").css("background-image" , "url(http://i.imgur.com/IUPrz7E.png)");


              // console.log("X won!");
                $("#message").text("X wins!");

                $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3").off();



            // diagonally X right to left
            } else if ($("#R1C3").text() === "O" &&  $("#R1C3").text() === $("#R2C2").text() && $("#R1C3").text() === $("#R3C1").text()) {

              // console.log("O won!");

            // $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3, fieldset, input, footer, nav").hide();
            //
            // $("body.container-fluid").css("background-image" , "url(http://i.imgur.com/IUPrz7E.png)");
              $("#message").text("O wins!");

              $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3").off();


            }


            // $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3").data("value", "1");

            // let cell = $(this);
            //
            // console.log(cell.data("value"));
            //
            // if(cell.data("value") === "1"){
            //
            //   $(".board").off();
            //  //  console.log("Done");
            //
            // }


          };


        let game = function () {
          let counter = 0;

           let whoWon = function () {

                   if(counter === 9 ){
                      $("#message").text("Let's call it a draw!");

                      counter = 0;

                      return counter;



                   }

          };







  // $("#message").show();

let gameBoard = ["", "", "", "", "", "", "", "", ""];

    // let checkWinner = 0;


//data in win condition is 1


//data = 0, if turn later data=1




    let turn = "O";


    $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3").click(function(){

      let cell = $(this);

      if(turn === "O"){

        // && cell.data("value") === 0

            turn = "X";

            // debugger;
            // console.log(cell.data("value"));

            // Value of each cell is 0
            // Once it is clicked it gets value of 1

            // let newVar = cell.data("value");
            //
            // console.log(newVar);

            cell.html("<span class='X'><b>X</b></span>");
            cell.val("X");



            // cell.data("value", "1");


            // debugger;
            //
            // cell.data("value", "1");
            // console.log(cell.data("value"));

            // if($("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3").data("value") === 1){
            //
            //   alert("0");
            //
            // }


        // 1 element
              if ($("#R1C1").text() === "X"){

                gameBoard[0] = $("#R1C1").text();

                gameBoard[0] = "X";


              } else if ($("#R1C1").text() === "O") {
                gameBoard[0] = "O";

              } else {
                gameBoard[0] = "";
              }



        // 2 element
              if ($("#R1C2").text() === "X"){

                gameBoard[1] = "X";

              } else if ($("#R1C2").text() === "O") {
                gameBoard[1] = "O";

              }else {
                gameBoard[1] = "";
              }



        // 3 element
              if ($("#R1C3").text() === "X"){

                gameBoard[2] = $("#R1C3").text();


              } else if ($("#R1C3").text() === "O") {
                gameBoard[2] = $("#R1C3").text();


              }else {
                gameBoard[2] = "";
              }


      // 4 element
            if ($("#R2C1").text() === "X"){

              gameBoard[3] = $("#R2C1").text();

            } else if ($("#R2C1").text() === "O") {
              gameBoard[3] = $("#R2C1").text();


            }else {
              gameBoard[3] = "";
            }


      // 5 element
            if ($("#R2C2").text() === "X"){

              gameBoard[4] = $("#R2C2").text();

            } else if ($("#R2C2").text() === "O") {
              gameBoard[4] = $("#R2C2").text();

            }else {
              gameBoard[4] = "";
            }


      // 6 element
            if ($("#R2C3").text() === "X"){

              gameBoard[5] = $("#R2C3").text();

            } else if ($("#R2C2").text() === "O") {
              gameBoard[5] = $("#R2C3").text();

            }else {
              gameBoard[5] = "";
            }


      // 7 element
            if ($("#R3C1").text() === "X"){

              gameBoard[6] = $("#R3C1").text();

            } else if ($("#R3C1").text() === "O") {
              gameBoard[6] = $("#R3C1").text();

            }else {
              gameBoard[6] = "";
            }


      // 8 element
            if ($("#R3C2").text() === "X"){

              gameBoard[7] = $("#R3C2").text();

            } else if ($("#R3C2").text() === "O") {
              gameBoard[7] = $("#R3C2").text();

            }else {
              gameBoard[7] = "";
            }


      // 8 element
            if ($("#R3C3").text() === "X"){

              gameBoard[8] = $("#R3C3").text();

            } else if ($("#R3C3").text() === "O") {
              gameBoard[8] = $("#R3C3").text();

            }else {
              gameBoard[8] = "";
            }


              // console.log(gameBoard);


              let index = cell.data("index");
              let value = cell.val();

              api.update(index, value)
              .done(ui.onUpdate)
              .fail(ui.onError);

              // console.log(index);
              // console.log(value);


                 $(this).off();

                 winner();
                 counter++;
                 whoWon();

                //  alert(counter);

      } else {

            turn = "O";

            cell.html("<span class='O'><b>O</b></span>");
            cell.val("O");



            // debugger;
            //
            // console.log(cell.data("value"));

            // cell.data("value", "1");

            // console.log(cell.data("value"));



            // 1 element
                  if ($("#R1C1").text() === "X"){

                    gameBoard[0] = $("#R1C1").text();

                  } else if ($("#R1C1").text() === "O") {
                    gameBoard[0] = $("#R1C1").text();

                  }else {
                    gameBoard[0] = "";
                  }

                  // 2 element
                        if ($("#R1C2").text() === "X"){

                          gameBoard[1] = "X";

                        } else if ($("#R1C2").text() === "O") {
                          gameBoard[1] = "O";

                        }else {
                          gameBoard[1] = "";
                        }




                  // 3 element
                        if ($("#R1C3").text() === "X"){

                          gameBoard[2] = $("#R1C3").text();

                        } else if ($("#R1C3").text() === "O") {
                          gameBoard[2] = $("#R1C3").text();

                        }else {
                          gameBoard[2] = "";
                        }


                // 4 element
                      if ($("#R2C1").text() === "X"){

                        gameBoard[3] = $("#R2C1").text();

                      } else if ($("#R2C1").text() === "O") {
                        gameBoard[3] = $("#R2C1").text();

                      }else {
                        gameBoard[3] = "";
                      }


                // 5 element
                      if ($("#R2C2").text() === "X"){

                        gameBoard[4] = $("#R2C2").text();

                      } else if ($("#R2C2").text() === "O") {
                        gameBoard[4] = $("#R2C2").text();

                      }else {
                        gameBoard[4] = "";
                      }


                // 6 element
                      if ($("#R2C3").text() === "X"){

                        gameBoard[5] = $("#R2C3").text();

                      } else if ($("#R2C2").text() === "O") {
                        gameBoard[5] = $("#R2C3").text();

                      }else {
                        gameBoard[5] = "";
                      }


                // 7 element
                      if ($("#R3C1").text() === "X"){

                        gameBoard[6] = $("#R3C1").text();

                      } else if ($("#R3C1").text() === "O") {
                        gameBoard[6] = $("#R3C1").text();

                      }else {
                        gameBoard[6] = "";
                      }


                // 8 element
                      if ($("#R3C2").text() === "X"){

                        gameBoard[7] = $("#R3C2").text();

                      } else if ($("#R3C2").text() === "O") {
                        gameBoard[7] = $("#R3C2").text();

                      }else {
                        gameBoard[7] = "";
                      }


                // 8 element
                      if ($("#R3C3").text() === "X"){

                        gameBoard[8] = $("#R3C3").text();

                      } else if ($("#R3C3").text() === "O") {
                        gameBoard[8] = $("#R3C3").text();

                      }else {
                        gameBoard[8] = "";
                      }


                        // console.log(gameBoard);


                        let index = cell.data("index");
                        let value = cell.val();

                        api.update(index, value)
                        .done(ui.onUpdate)
                        .fail(ui.onError);

                        $(this).off();


                         winner();
                         counter++;
                         whoWon();




                      //  alert(counter);
                }

              }
          );


    };




$(document).ready(game());




$("#change-password, #sign-out,  #game-create, #game-request, #game-update, .container, footer, nav, #message1").hide();


$("body.container-fluid").css("background-image" , "url(http://i.imgur.com/Q7WjLwN.png");

$("#button1, #button2").on("click", function () {




  $(".container, footer, nav, #game-create,  #button2").show();
  $("body.container-fluid").css("background-image" , "url(http://i.imgur.com/OQW1MIf.png");
  $("#sign-in, #sign-up").hide();
  $("#change-password, #sign-out").show();

  $("#sign-up").on("click", function () {
    $("body.container-fluid").css("background-image" , "url(http://i.imgur.com/Q7WjLwN.png");
    $("#sign-in").show();
    $("#change-password, nav, #sign-out, #game-create").hide();
  });




  $("#button2").on("click", function () {
    $("body.container-fluid").css("background-image" , "url(http://i.imgur.com/Q7WjLwN.png");
    $("#change-password, #sign-out").show();
    $("nav").hide();
  });
  //
  // $("#game-create").on("click", function () {
  //   $("nav, footer").hide();
  // });


  $(".container, footer").hide();


  $("#game-create").on("click", function () {
    $(".container, footer, #game-request, #reset-button").show();

  });

  $("#sign-in").on("click", function () {
    $("body.container-fluid").css("background-image" , "url(http://i.imgur.com/Q7WjLwN.png");
    $("nav").hide();
  });

  $("#button3").on("click", function () {

    $("#change-password").hide();
    $("#message1").show();
    $(".container, #reset-button").hide();
    $("#sign-in").show();


  });

    $("#sign-in").on("click", function () {
        $("#message1").hide();
    });


  $("#game-create, #R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3, #reset-button").on("click", function () {
    $("#message1").hide();
    $("#game-create").show();
    $("#change-password").show();


  });

  $("#sign-out").on("click", function () {
    $("#sign-in, #sign-up").show();
    $("#change-password, #sign-out, #game-create, #game-request, #game-update, .container, footer, nav, #message1").hide();
    $("body.container-fluid").css("background-image" , "url(http://i.imgur.com/Q7WjLwN.png");

  });



} );
$("#reset-button").on("click", function () {
  $(".container").hide();




});




$("#reset-button").click(function () {

        $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3").empty();
        $("#message").empty();

        // $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3").val("");
        game();

  });
