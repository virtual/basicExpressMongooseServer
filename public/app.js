$(function(){
  $.get('/chairs', function(chairList) {
    console.log(chairList);
  });
});