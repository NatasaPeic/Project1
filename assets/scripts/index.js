'use strict';


const authEvents = require('./auth/events.js');


// on document ready
$(  () => {
  authEvents.addHandlers();
  // debugger;

 $('#change-password-modal-link, #change-password-modal-link, #sign-out-modal-link, #sign-in-modal-link, #game-create, .board, #play, #reset, #show, #message-show').hide();
 $('#sign-in-modal-link').show();
 $("body.container-fluid").css("background-image" , "url(http://i.imgur.com/pMYsKxC.jpg");
  $("body.container-fluid").css("background-image" , "repeat: no repeat;");


});
