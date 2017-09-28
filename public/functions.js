
var formatAsTable = function (allItems) {
  //console.log(allNames); 
  var itemRow = "";
  allItems.forEach((item) => {
    console.log(item);
    itemRow += "<tr>" + '<td><button class="delete"><i class="fa fa-trash" aria-hidden="true"></i> Delete <span class="hideid">' + item._id + "</span></button>" + "</td><td>" + item.type + "</td><td>" + item.model +  "</td></tr>";
  }); 
  return itemRow;
};
