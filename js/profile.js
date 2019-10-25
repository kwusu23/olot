$(document).ready(function() {



  $('#up').attr('disabled','true');


});



    $('#choose').click(function() {

      $('#uploadImage').click();

      $('#uploadImage').change(function() {



        var file_name=$(this).val();
        // alert(file_name);

          if(file_name.length>0){
            // alert("holla")
            $('#up').removeAttr('disabled');

            // $('#tap').hide(0);

          }
          else{

            $('#up').attr('disabled','true');

          }




      });
    });





$('#tap').click(function(){

 window.location.replace("chat_user.html");


});


$('#img_skip').click(function(){

  window.location.replace("chat_user.html");


});

$('#up').click(function() {

  var complete=$('#uploadImage').val();

     $('#tap').show(300);

     $('#up').hide(0);

      $('#choose').hide(0);

     // $('#login_error').hide(0);




  $(document).ready(function (e) {
  $("#form").on('submit',(function(e) {



e.preventDefault();
$.ajax({
       url: "backend/file_upload.php",
 type: "POST",
 data:  new FormData(this),
 contentType: false,
       cache: false,
 processData:false,
 success: function(data)
    {

      // alert(data)
      if(data=="noimage"){



      } else{

          $('.img-circle').attr("src",data);



      }






    },
   error: function(e)
    {
  // $("#err").html(e).fadeIn();
    }
  });
}));
});




});
