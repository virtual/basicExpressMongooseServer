$(function(){
  $.get('/chairs', function(chairList) {
    //console.log(chairList);
    $('#chairTable').append(formatAsTable(chairList));
  });
});