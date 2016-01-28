var _ = require("lodash");

var hotOrWarm = function(towns) {
  var hash = { "hot": [], "warm": [] };

  function hot(temp){
    return temp > 19;
  };

  _.forEach(towns, function(temps, town) {
    if (_.every(temps, hot)) {
      hash.hot.push(town);
    } else if (_.some(temps, hot)) {
      hash.warm.push(town);
    } else {
    }
  });
  return hash;
};

module.exports = hotOrWarm
