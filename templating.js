var _ = require("lodash");

var template = function(login) {
  return _.template('Hello <%= name %> (logins: <%= login.length %>)')(login);
}

module.exports = template
