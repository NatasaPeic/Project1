'use strict';


const api = require ('./auth/api');
const ui = require ('./auth/ui');


          const winner = function () {
            for (let i = 1; i <= 3; i++) {

              //horizontally X
              if($("#R" + i + "C1").text() === "X" && $("#R" + i + "C1").text() === $("#R" + i + "C2").text() &&
              $("#R" + i + "C1").text() === $("#R" + i + "C3").text()){

                $("#message").text("X wins!");
                $("#reset").show();
                $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3").off();

              // horizontally O
              } else if ($("#R" + i + "C1").text() === "O" && $("#R" + i + "C1").text() === $("#R" + i + "C2").text() &&
              $("#R" + i + "C1").text() === $("#R" + i + "C3").text()) {


                $("#message").text("O wins!");
                $("#reset").show();
                $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3").off();


              // vertically X
            } else if ($("#R1" + "C" + i).text() === "X" && $("#R1" + "C" + i).text() === $("#R2" + "C" + i).text() &&
              $("#R1" + "C" + i).text() === $("#R3" + "C" + i).text()) {

                  $("#message").text("X wins!");
                  $("#reset").show();
                  $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3").off();


              } else if ($("#R1" + "C" + i).text() === "O" && $("#R1" + "C" + i).text() === $("#R2" + "C" + i).text() &&
                $("#R1" + "C" + i).text() === $("#R3" + "C" + i).text()) {

                  // console.log("O won!");
                  $("#message").text("O wins!");
                  $("#reset").show();
                  $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3").off();

              }

            }

            // diagonally X left to right
            if($("#R1C1").text() === "X" &&  $("#R1C1").text() === $("#R2C2").text() && $("#R1C1").text() === $("#R3C3").text()){

                $("#message").text("X wins!");
                $("#reset").show();
                $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3").off();


            // diagonally O left to right
            } else if ($("#R1C1").text() === "O" &&  $("#R1C1").text() === $("#R2C2").text() && $("#R1C1").text() === $("#R3C3").text()) {

              $("#message").text("O wins!");
              $("#reset").show();
              $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3").off();
            }


            // diagonally X right to left
            if($("#R1C3").text() === "X" &&  $("#R1C3").text() === $("#R2C2").text() && $("#R1C3").text() === $("#R3C1").text()){

                $("#message").text("X wins!");
                $("#reset").show();
                $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3").off();


            // diagonally X right to left
            } else if ($("#R1C3").text() === "O" &&  $("#R1C3").text() === $("#R2C2").text() && $("#R1C3").text() === $("#R3C1").text()) {
              $("#message").text("O wins!");
              $("#reset").show();
             $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3").off();
            }
          };


        let game = function () {
          let counter = 0;

           let whoWon = function () {

                   if(counter === 9 ){
                      $("#message").text("Let's call it a draw!");
                      $("#reset").show();

                      counter = 0;
                      return counter;
                   }
          };



let gameBoard = ["", "", "", "", "", "", "", "", ""];

    let turn = "O";


    $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3").click(function(){

      let cell = $(this);

      if(turn === "O"){

            turn = "X";

            cell.html("<span class='X'><b>X</b></span>");
            cell.val("X");

        // patch
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


              let index = cell.data("index");
              let value = cell.val();

              api.update(index, value)
              .done(ui.onUpdate)
              .fail(ui.onError);

                 $(this).off();

                 winner();
                 counter++;
                 whoWon();
      } else {

            turn = "O";

            cell.html("<span class='O'><b>O</b></span>");
            cell.val("O");

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

                        let index = cell.data("index");
                        let value = cell.val();

                        api.update(index, value)
                        .done(ui.onUpdate)
                        .fail(ui.onError);

                        $(this).off();

                         winner();
                         counter++;
                         whoWon();
                }

              }
          );
    };


$(document).ready(game());


$("#reset").click(function () {

        $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3").empty();
        $("#message").empty();
        game();
        $("#reset").hide();

  });
