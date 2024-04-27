function SubForm (){
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbwpvzCQdWi7GnHRU0PeifxSxcV0dgmqeAZgQyMFTiYBfjitKUVmOt_WyfM-JvqIae3N/exec",
        type:'post',
        data:$("#myForm").serializeArray(),
        success: function(){
          
        },
        error: function(){

        }
    });
}

function SendEmail(){
  
      var fullname = $("#f_name").val() +' '+ $("#l_name").val();
      var email = $("#email").val();
      var content = $("#message").val();
  
 
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "thespeedster2022@gmail.com",
    Password : "C308F175C60AE4B09734ADB6113A7F40E14E",
    Port : "2525",
    To : 'thespeedster2022@gmail.com',
    From : 'thespeedster2022@gmail.com', ,
    Subject : "This is a test Email",
    Body : "And this is the body"
  }).then(
  message => {
      if(message === "ok"){
      Swal.fire({
  
              title: 'Congrats!',
  
              text: 'Your Message is sent Successfully.',
              imageUrl: 'https://dprmoversuganda.com/images/logo.png',
              imageHeight: 70,
              imageAlt: 'DPRMOVERS UGANDA',
              width: 600,
              padding: '3em',
              backdrop: 'rgba(0,0,123,0.4) left top',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            });
      }else{
          Swal.fire({
  
              icon: 'error',
  
              title: 'Oops...',
              text: 'Something Went Wrong!',
              customClass: 'swal-height',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            });
    }
  }
);


}


function ValidateEmail(form1){

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


  var check = validateContactForm();

  if(check == true){
      if(form1.email.value.match(mailformat)){
        SubForm ();
        SendEmail();

        document.getElementById("myForm").reset();
        // document.getElementById("button").innerHTML = "Join Waitlist";
        return true;
      }else{
          Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Wrong Email Entered!',
          customClass: 'swal-height',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });

        document.getElementById("myForm").reset();
        return true;
      }
  }

}


function validateContactForm() {
      var valid = true;

      $(".info").html("");
      $(".input-field").css('border', '#e0dfdf 1px solid');
      var f_name = $("#f_name").val();
      var l_name = $("#l_name").val();
      var email = $("#email").val();
      var subject = $("#subject").val();
      var content = $("#message").val();
      
      if (f_name == "") {
          $("#fName-info").html("First Name is Required.").css('color', '#e66262');;
          $("#f_name").css('border', '#e66262 1px solid');
          valid = false;
      }
      if (l_name == "") {
          $("#lName-info").html("Last Name is Required.").css('color', '#e66262');;
          $("#l_name").css('border', '#e66262 1px solid');
          valid = false;
      }
      if (email == "") {
          $("#userEmail-info").html("Email is Required.").css('color', '#e66262');
          $("#email").css('border', '#e66262 1px solid');
          valid = false;
      }
      // if (!userEmail.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/))
      // {
      //     $("#userEmail-info").html("Invalid Email Address.").css('color', '#e66262');;
      //     $("#userEmail").css('border', '#e66262 1px solid');
      //     valid = false;
      // }

      // if (subject == "") {
      //     $("#subject-info").html("Subject is Required.").css('color', '#e66262');;
      //     $("#subject").css('border', '#e66262 1px solid');
      //     valid = false;
      // }
      if (content == "") {
          $("#userMessage-info").html("Message is Required.").css('color', '#e66262');;
          $("#message").css('border', '#e66262 1px solid');
          valid = false;
      }

      return valid;
}
