var _ = require("lodash");

var groupedFreelancers = function(freelancers) {
  var average = _.sumBy(freelancers, 'income')/freelancers.length;

  var underperform = _.filter(freelancers, function(freelancer){
    return freelancer.income <= average });

  var overperform = _.filter(freelancers, function(freelancer){
    return freelancer.income > average
  })

  return {
    "average": average,
    "underperform": _.sortBy(underperform, 'income'),
    "overperform": _.sortBy(overperform, 'income')
  }
}

module.exports = groupedFreelancers
