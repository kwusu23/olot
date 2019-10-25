


            function sendMessage(){


              $('.chat_body').animate({
                scrollTop:10000},"slow");


              var sent=$('.user-text').attr('id');

              var message=$('#comment').val();



              $.ajax({

                    url:"backend/message.php",
                    type:"POST",
                    data: {"sent_to":sent , "message":message},
                    dataType: 'text'

              }).done(function(data) {


                  if(data.length>0){

                    message=$('#comment').text();
                    message=$('#comment').val('');
                    $('#note1').hide(0);

                    $('.btn1').attr('disabled','true');

                  }else{
                    // alert(data)
                  }


              });


            }



var wi=$('.user-table').width();

$('.user-table-header').width(wi);

var wa=$('.qw').width();
$('.user-head').width(wa);

$('.dot').click(function() {

    $('.wrap').toggle(0);

});

$('#profile').click(function() {

  window.location.replace("edit_profile.html")

});

$('#logout').click(function() {

  $.ajax({

    url:"backend/logout.php",
    type:"GET",

  }).done(function(data) {

    window.location.replace("main.html");

  });

});





    $.ajax({

      url:"backend/profilepic.php",
      type:"GET",

    }).done(function(data) {

      $('.pp').attr('src',data);

    });



    $.ajax({
      url:"backend/display_friends.php",
      type:"GET",
      // timeout:

  }).done(function(data){


    // alert(data);
    var jsonData = JSON.parse( data );

    var jsonLength = jsonData.length;

    if(jsonLength<1){

      $('.check').show(0);
      $('.note').hide(0);

    } else {

          $('.check').hide(0);
          for(var i=0;i<jsonLength;i++){



            var auto_div="";

            auto_div += "<div class='row roll'>";

            auto_div+="<div class='col-xs-2' auto_div' id='"+jsonData[i].id+"'><img src="+jsonData[i].profile_img+" class='img-circle' id='haha'></div>";

            auto_div+="<div class='col-xs-10 auto_div' id='"+jsonData[i].id+"'><p>"+jsonData[i].username+"</p></div>";

            auto_div += "</div>";

            $('.users').append(auto_div);


          }



             $('.roll').mousedown(function(){


             var image=$("img",this).attr('src');

             $('.head-icon').attr('src',image);



           });






            $('.auto_div').click(function(){


              var sth=$(this).attr('id');


              if($(window).width()<=768){

                // alert("lol")

                $('.user-table').hide(0);
                $('.interface').attr("style","display:block !important");
              }



              $('.typein').show(0);

              $('.note').hide(0);

              $('.img-circle').show(0);

              $('#im').show(0);

              $('.btn1').attr('disabled','true');

              var message=$('#comment').val();







              $('#comment').keyup(function() {

                // alert($(this).length)
                  if($(this).val()[0]!=" " &&  $(this).val().length!=0){


                   $('.btn1').removeAttr('disabled');
                }


                else{
                   $('.btn1').attr('disabled','true');
                   // $('.btn1').removeAttr('disabled');
                }

              });



              var st=$(this).text();

              $('.user-text').text(st);



              var sth=$('.user-text').attr('id',sth);

              var sent=$('.user-text').attr('id');


              // alert(sent)

              $.ajax({

                    url:"backend/login_status.php",
                    type:"POST",
                    data: {"sent_to":sent},
                    dataType: 'text'
                  }).done(function(data,status) {

                    // alert(data)
                    if(data==1){

                      $('.online').show(0);
                      $('.online').text("online");

                    }else{

                      $('.online').hide(0);

                    }


                  });




                      $.ajax({

                            url:"backend/load_chat.php",
                            type:"POST",
                            data: {"sent_to":sent},
                            dataType: 'text'

                      }).done(function(data,status) {


                        $.ajax({

                              url:"backend/convo.php",
                              type:"GET"
                            }).done(function(data,status) {

                              // alert(data.length)

                              if(data.length==2){

                                // alert(st)

                                    $('.note').show(0);


                                    $('#note1').html("You have no chat with this user");


                                    // $('.note').load("../backend/convo.php");


                                  } else{


                                        $('.note').hide(0);
                                        // $('#note1').html("You have no chat with this user");
                                      setInterval(function(){
                                      $('.chat_body').load("backend/convo.php");
                                    },10);

                                }

                            });






                      });


            });





            $('.btn1').click(function() {

              sendMessage();


          });





    }



});




$(document).ready(function() {



  $('#btt').attr('disabled','true');


  $.ajax({

    url:"backend/notify.php",
    type:"GET",
    dataType: 'text'
  }).done(function(data) {


    if(data=="string"){

      // alert("lol")

    } else{

              // alert("lo")
              $('.ppp').addClass('rrr');

              var jsonData = JSON.parse(data);


              var jsonLength = jsonData.length;


              for(var i=0;i<jsonLength;i++){


                  var auto_div="";

                  auto_div += "<div class='row rolls'>";

                  auto_div+="<div class='col-xs-2' auto_div' id='"+jsonData[i].id+"'><img src="+jsonData[i].profile_img+" class='img-circle' id='haha'></div>";

                  auto_div+="<div class='col-xs-7 auto_div' id='"+jsonData[i].id+"'><p class='ster'>"+jsonData[i].username+ " wants to be your friend</p></div>";

                  auto_div+="<div class='col-xs-3 auto_div' id='"+jsonData[i].id+"'><button class='ttr btn btn-default' id='"+jsonData[i].id+"'>accept</button></div>";

                  auto_div += "</div>";

                  $('.list_person').append(auto_div);


                  }



                  $('.ttr').click(function (){

                    var user_id=$(this).attr('id');
                    $('.ttr').attr('disabled','true');
                    // var use=$(this).val();
                    // var est=$(this).attr('id');
                    // alert(user_id)


                   $.ajax({

                      url:"backend/add_friend.php",
                      type:"POST",
                      data: {"user_id":user_id},
                      dataType: 'text'

                    }).done(function(data) {
                      alert(data)

                    });



                  });
    }





  });

});



$('#add_user').click(function() {
  $('.bbb').hide(0);
  $('.aaa').show(0);
  $('.se').hide(0);
  $('.users').hide(0);

});

$('#person').click(function() {
  $('.aaa').hide(0);
  $('.bbb').show(0);
  $('.se').hide(0);
  $('.users').hide(0);
  $('.ppp').removeClass('rrr');

});


$('#bac').click(function() {
  $('.bbb').hide(0);
  // $('.aaa').show(0);
  $('.se').show(0);
  $('.users').show(0);

});

$('#backs').click(function() {
  $('this').hide(0);
  $('.aaa').toggle(0);
  $('.se').toggle(0);
  $('.users').toggle(0);

});

$('#stt').keyup(function () {

  var sead=$(this).val();

  if(sead.length==0){
    $('.rolls').hide(0);
  }

  if(event.keyCode==8){
    event.preventDefault();
    return false;
  }



  $.ajax({

    url:"backend/search.php",
    type:"POST",
    data: {"sead":sead},
    // async:false,
    dataType: 'text'

  }).done(function(data) {

      // alert(data);

        var jsonData = JSON.parse(data);


        var jsonLength = jsonData.length;

        // alert(jsonLength)


          if(jsonLength<1){

            $('#back_error').show(0);
            $('.poss').hide(0);



          } else{

            $('#back_error').hide(0);

            $('.poss').show(0);


              for(var i=0;i<jsonLength;i++){

                // $('.btn_add').attr('disabled','true');

                var ff=jsonData[i].id;
                // alert(ff)


                    var auto_div="";

                    auto_div += "<div class='row rolls'>";

                    auto_div +="<div class='col-xs-2' auto_div' id='"+jsonData[i].id+"'><img src="+jsonData[i].profile_img+" class='img-circle' id='haha'></div>";

                    auto_div+="<div class='col-xs-6 auto_div' id='"+jsonData[i].id+"'><p class='ster'>"+jsonData[i].username+"</p></div>";

                    auto_div+="<div class='col-xs-4 auto_div' id='"+jsonData[i].id+"'><button class='btn_add btn btn-default' id='"+jsonData[i].id+"'>Add</button></div>";

                    auto_div += "</div>";

                    // alert(ff)







                    $('.poss').append(auto_div);


                    if(ff==0){
                      // alert("lol")
                      // $('.btn_add').css("background","red");
                      $('.btn_add').attr('disabled','true');
                    }


                  }





              $('.btn_add').click(function() {

                  // alert("lol")
                  var sag=$(this).attr('id');
                  $(this).html("Request sent");
                  $(this).attr('disabled','true');

                  $.ajax({

                    url:"backend/friend_request.php",
                    type:"POST",
                    data: {"sent_to":sag},
                    dataType: 'text'

                  }).done(function(data) {


                  });
              });



          }






  });



  $('.rolls').html('');


});




$('#im').click(function() {

  $('#ups').click();

  $('#ups').change(function() {


    $('.display-image').show(0);

    var file_name=$(this).val();

    // alert(file_name);

      if(file_name.length>0){
        // alert("holla")
        $('#btt').removeAttr('disabled');

        // $('#tap').hide(0);

      }
      else{

        $('#btt').attr('disabled','true');

      }




  });
});




$('#btt').click(function() {

  var complete=$('#ups').val();

  // alert(file_name)
  $(this).hide(0);
  $('#b').show(0);
  $('#its').show(0);






});


$('#b').click(function() {

  $('.display-image').hide(0);

   sent=$('.user-text').attr('id');

    var path=$('#its').attr("src");

    $.ajax({

          url:"backend/message.php",
          type:"POST",
          data: {"sent_to":sent , "message":path},
          dataType: 'text'

    }).done(function(data) {
          // alert(data)



    });

  });



  $('#bt').click(function() {

    $('.display-image').hide(0);


    });

    $('#comment').keyup(function () {

      var input=$("#comment").val();

      var inputLength= input.length;

      if(inputLength > 0 && event.keyCode ==13){

        sendMessage();

      }

    });
