var _ = require("lodash");

var sortedComments = function(comments) {
  return _.chain(comments)
    .groupBy('username')
    .map(function(groupedComments, name){
      return { username: name, comment_count: _.size(groupedComments) }
    })
    .reverse()
}
module.exports = sortedComments
