var _ = require("lodash");

var sizes = function(towns){
  return _.forEach(towns, function(town) {
    if (town.population > 1) {
      town.size = 'big'
    } else if (town.population < 0.5) {
      town.size = 'small'
    } else {
      town.size = 'med'
    }
  });
}

module.exports = sizes
