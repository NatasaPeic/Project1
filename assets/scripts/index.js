'use strict';

// const events = require('./games/events');
//
// $(() => {
//   $('#sign-up').on('submit', events.onCreateGame);
// });


const authEvents = require('./auth/events.js');

$(() => {
  authEvents.addHandlers();

});

// 
// const gameEvents = require('./games/events');
//
// $(() => {
//   gameEvents.addHandlers();
//
// });
