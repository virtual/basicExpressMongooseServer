$(function () {
  $.get('/chairs', function (chairList) {
    //console.log(chairList);
    $('#chairTable').append(formatAsTable(chairList));

    $('.delete').on("click", function () {
      var deleteId = $(this).children(".hideid").text();
      console.log(deleteId);

      $.ajax({
        type: 'DELETE',
        url: '/chairs',
        data: "id=" + deleteId,
        success: function(data) {
          console.log(data);
          // use jquery to delete the table row only
          //$("#chairTable").empty();
          //$('#chairTable').append(formatAsTable(chairList));
        }
      });

      // '/chairs/', deleteId, function(chair){
      //  console.log("it worked", chair);
      // })
    });

  });
});