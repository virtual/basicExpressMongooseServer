
var formatAsTable = function (allItems) {
  //console.log(allNames); 
  var itemRow = "";
  allItems.forEach((item) => {
    console.log(item);
    itemRow += "<tr>" + '<td><button class="delete" data-id="'+ item._id + '"><i class="fa fa-trash" aria-hidden="true"></i> Delete</button>' + "</td><td>" + item.type + "</td><td>" + item.model +  "</td></tr>";
  }); 
  return itemRow;
};
