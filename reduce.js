var _ = require("lodash");

var sortedOrders = function(orders) {
  var result = [];
  var ordersByArticle _.groupBy(orders, 'article');

  _.forEach(ordersByArticle, function(item, key) {
    result.push({
      article: parseInt(key),
      total_orders: _.reduce(item, function(sum, item){
      return sum + item.quantity;
      }, 0)
    })
  })

  return _.sortBy(result, 'total_orders');
}
module.exports = sortedOrders
