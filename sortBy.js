var _ = require("lodash");

var sorted = function(collection){
  return _.sortBy(collection, 'quantity').reverse();
}
module.exports = sorted
