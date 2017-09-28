
var formatAsTable = function (allItems) {
  //console.log(allNames);
  var tableHeader = "<table class='table table-striped table-bordered table-hover table-sm'><thead class='thead-inverse'><tr> <th>Type</th> <th>Model</th>  </tr></thead>";
  var itemRow = "";
  allItems.forEach((item) => {
    itemRow += "<tr><td>" + item.type + "</td><td>" + item.model + "</td></tr>";
  });
  var tableFooter = "</table>";
  return tableHeader + itemRow + tableFooter;
};
 