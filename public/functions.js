
var formatAsTable = function (allItems) {
  //console.log(allNames); 
  var itemRow = "";
  allItems.forEach((item) => {
    itemRow += "<tr>" + '<td><i class="fa fa-trash" aria-hidden="true"></i>' + "</td><td>" + item.type + "</td><td>" + item.model +  "</td></tr>";
  }); 
  return itemRow;
};
 