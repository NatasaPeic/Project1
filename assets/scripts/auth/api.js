'use strict';

const app = require('../app');

// const main = require('../main');



const signIn = (data) => $.ajax({
  url: app.api + '/sign-in',
  method: 'POST',
  data,
});


const changePassword = (data) => $.ajax({

  url: app.api + '/change-password/' + app.user.id,
  method: 'PATCH',
  data,
  headers: {
    Authorization: 'Token token=' + app.user.token,
  }
});


const signUp = (data) => $.ajax({

    url: app.api + '/sign-up',
    method: 'POST',
    data,

   });


const signOut = () => $.ajax({


  url: app.api + '/sign-out/' + app.user.id,
  method: 'DELETE',
  headers: {
    Authorization: 'Token token=' + app.user.token,
  }
});

// no data passed
const create = () => $.ajax({

    url: app.api + '/games/',
    method: 'POST',

    //added headers
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
     data: app.user,
    //  data: '{}',

});


const show = (data) => $.ajax({

      method: 'GET',
      url: app.api + '/games/',
      data,
      headers: {
        Authorization: 'Token token=' + app.user.token,
      }

});



const update = (index, value) => $.ajax({


  method: 'PATCH',
  // got a game.id from show a game success message
  url: app.api + '/games/' + app.game.id,

  headers: {
    Authorization: 'Token token=' + app.user.token,
  },
   data: {
           "game": {
            "cell": {
           "index": index,
           "value": value,
                        },

  }
}


});



module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  create,
  show,
  update

};
