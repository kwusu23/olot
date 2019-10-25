$('#back').click(function () {

  window.location.replace("chat_user.html");

});
  $('#user').attr('disabled',true);
  $('#pass').attr('disabled',true);

  $.ajax({
    url:"backend/edit_profile.php",
    type:"GET",
    // timeout:

}).done(function(data){

  var jsonData = JSON.parse( data );

  var user =jsonData[0].username;
  var user_img =jsonData[0].profile_img;


  $('.set_pic').attr('src',user_img);

  $('#user').val(user);


});



$('#select_img').click(function() {

  $('#uploadImage').click();

  $('#uploadImage').change(function() {

    $('#save_img').show(0);

    $('#select_img').hide(0);



  });

  });


  $('#save_img').click(function () {


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


                if(data=="noimage"){


                } else{
                    $('.img-circle').attr("src",data);


                            $('#save_img').hide(0);

                            $('#select_img').show(0);


                }

              },
             error: function(e)
              {

              }
            });
          }));
          });

  });








$('#edit_user').click(function() {

  $('#user').removeAttr('disabled');

        $('#edit_user').hide(0);

        $('#save_user').show(0);

});

$('#edit_pass').click(function() {


  $('#edit_pass').hide(0);
  $('#pass').hide(0);
  $('.old_pass').show(0);
  $('.new_pass').hide(0);
  $('.confirm').hide(0);


});


$('#save_user').click(function() {


  var username=$('#user').val();


  if(username.length>0){

    $.ajax({
          url:"backend/update_username.php",
          type:"POST",
          dataType:"text",
          data:{"user":username}

    }).done(function(data) {


      if(data=="hala"){

        $('#save_user').hide(0);
        $('#edit_user').show(0);
        $('#user').attr('disabled',true);

      }else if (data=="exist") {
        $(".login_error").show(0);

        $(".login_error").html("Username already exist");

      }

    });

  }



});




$('#pass_sub').click(function() {

  var pass=$('#pass1').val();
  if(pass.length<1){
    $(".login_error").show(0);
    $('.login_error').html("field cannot be empty");

    var len=false;

  }else{
    $(".login_error").hide(0);
    var len=true;
  }




  if(len){




    $(".login_error").hide(0);

    $.ajax({

      url:"backend/verify_pass.php",
      type:"POST",
      data:{"user_pass":pass},
      dataType: 'text'
  }).done(function (data) {

      // alert(data)
      if(data=="password_valid"){

        $('#edit_pass').hide(0);
        $('#pass').hide(0);
        $('.old_pass').hide(0);
        $('.new_pass').show(0);
        $('.confirm').hide(0);
        $(".login_error").hide(0);

      } else{
        $(".login_error").show(0);
        $(".login_error").html("Password is incorrect");
      }

  });

    }


});





$('#pass_sub1').click(function() {


  var pass=$('#pass2').val();


  if(pass.length<1){


    $(".login_error").show(0);
    $(".login_error").html("Password is incorrect");
    var len=false;
  }else{
    $(".login_error").hide(0);
    var len=true;

  }

  if(len){

    if(pass.length < 6 || pass.length > 30){

      $(".login_error").show(0);

      $('.login_error').html("Password should between 6 and 30 characters");

         var pass_length=false;

    } else {
      $(".login_error").hide(0);
      var pass_length=true;

    }

  }


  if(pass_length){

    var upper = /[A-Z]/,
        lower = /[a-z]/,
        number = /[0-9]/,
        special = /[ !+_]/;


    if (

       upper.test(pass) &&
       lower.test(pass) &&
       number.test(pass) &&
       special.test(pass)

     ) {

        var valid_pass=true;
        $(".login_error").hide(0);

     } else{

       $(".login_error").show(0);
       $('.login_error').html("Invalid password!!");

       var valid_pass=false;
     }


  }

  if(len && pass_length && valid_pass){


    $('#edit_pass').hide(0);
    $('#pass').hide(0);
    $('.old_pass').hide(0);
    $('.new_pass').hide(0);
    $('.confirm').show(0);
  }




});



$('#pass_sub2').click(function() {

  var pass=$('#pass3').val();

  if(pass==$('#pass2').val()){


    $.ajax({

      url:"backend/update_pass.php",
      type:"POST",
      data:{"pass":pass},
      dataType: 'text'

    }).done(function(data) {
      $('#edit_pass').show(0);
      $('#pass').show(0);
      $('.old_pass').hide(0);
      $('.new_pass').hide(0);
      $('.confirm').hide(0);

    });


  }else{
    $(".login_error").show(0);
    $('.login_error').html("Invalid password!!");
  }

});
