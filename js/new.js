$("#login_butt").click(function(){


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
            window.location.replace("profile.html");

          });






        } else if(data=="password_invalid") {

            $("#login_error").html("Username or password is incorrect");

        }

    });
  }



});
