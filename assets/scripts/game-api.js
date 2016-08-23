'use strict';

const app = require('./app');

const getFormFields = require('../../lib/get-form-fields');

const create = function (form) {
  return $.ajax({
    url: app.host + '/games/',
    method: 'POST',

    data: getFormFields(form)
  });
};

module.exports = {
  create
};
