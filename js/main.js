$("#sign_up_link").click(function(){

  $("#login").hide(0);

    $('#sign_up').slideDown();



});




$("#sign_up_button").click(function(){

  user_name = $("#sign_up_user").val().trim();

  password = $("#sign_up_pass").val().trim();

  cpass = $("#cpass").val().trim();

  choose = $("#choose").val().trim();


  if(user_name.length < 1 || password.length < 1 || cpass.length < 1){

    $("#sign_up_error").html("Please fill all fields");



    fields_filled = false;



  } else {

      fields_filled = true;

  }



  if(fields_filled){

    if(choose == 1 ){

      $("#sign_up_error").html("Please select country");


        var country_option = false;

    } else if(choose == 2 || choose ==3 ){

        var country_option=true;

    }



  }



  if(country_option){

    if(password.length < 6 || password.length > 30){

      $("#sign_up_error").html("Password should between 6 and 30 characters");

         var pass_length=false;

    } else {

      var pass_length=true;

    }

  }





  if(pass_length){

    var upper = /[A-Z]/,
        lower = /[a-z]/,
        number = /[0-9]/,
        special = /[ !+_]/;


    if (

       upper.test(password) &&
       lower.test(password) &&
       number.test(password) &&
       special.test(password)

     ) {

        var valid_pass=true;


     } else{


       $("#sign_up_error").html("Password should contain at least 1 special character (!,+,_) an Uppercase and a number");

       var valid_pass=false;
     }


  }




  if(valid_pass){

    if(password == cpass){


      pass_match=true;


    } else {

      $("#sign_up_error").html("Passwords do not match");

      pass_match=false;
    }




  }



  if(fields_filled && pass_length && country_option && valid_pass && pass_match){


    if(choose == 2){

        var choose_option="Ghana";

    }


    if(choose == 3){

        var choose_option="Nigeria";

    }


    if(choose == 4){

        var choose_option="South Africa";

    }




    $.ajax({

      url:"../backend/sign_up.php",
      type:"POST",
      data: {"user_name":user_name,"password":password,"choose":choose_option},
      dataType: 'text'

    }).done(function(data) {

      if(data=="successful") {

        // alert(data)
        $("#sign_up_error").hide(0);

        $("#sign_up").hide(0);

        $("#login").hide(0);

        window.location.replace("new_login.html");


        // $("#sign_in").html("Thank for registering with us, you can now sign in to chat with users");


      } else if(data=="user already exist"){

          $("#sign_up_error").html("user already exist. Try another");


      }


    });


  }

  });



$("#login_link").click(function(){


  $('#login').slideDown();

  $("#sign_up").hide(0);



});





$("#login_button").click(function(){

  user_name = $("#login_user").val().trim();

  pass = $("#login_pass").val().trim();


  if(user_name.length < 1 || pass.length < 1){

    fields_filled = false;

    $("#login_error").html("Please fill all fields");

  } else {

      fields_filled = true;


  }


  if(fields_filled){

    $.post("backend/login.php",

    { user_name:user_name,
      pass:pass

    }, function(data,status){

        if(data=="password_valid"){


          $("#login_error").hide(0);

          $.get("backend/status.php",function (data,status) {


          });


          $.ajax({

            url:"backend/user_table.php",
            type:"GET"

          }).done(function(data) {

            // alert(data)

            // window.location.replace("main.html");

          });

          window.location.replace("chat_user.html");




        } else if(data=="password_invalid") {

            $("#login_error").html("Username or password is incorrect");

        }

    });
  }



});
