$("#register-name").keyup(function() {
    var username = $(this).val();
    $("#username_status").text("....");
    if (username  != ""){
    	$.post("/valid/client.php",{username:username},function(data){
			$("#username_status").text(data);
            if(data=="Tên đăng nhập đã được sử dụng"){
                $("#regis_btn").attr("disabled",true);
            }
            if(data=="Tên đăng nhập có thể sử dụng"){
                $("#regis_btn").attr("disabled",false);
            }
    	});
    }
});

$("#register-email").keyup(function() {
    var email = $(this).val();
    $("#email_status").text("....");
    if (email  != ""){
    	$.post("/valid/client.php",{email:email},function(data){
			$("#email_status").text(data);
            if(data=="Email đã được sử dụng"){
                $("#regis_btn").attr("disabled",true);
            }
            if(data=="Email có thể sử dụng"){
                $("#regis_btn").attr("disabled",false);
            }
    	});
    }
});


/*    $('#login_btn').click(function() {
        var username=document.getElementById("username").value;
        var password=document.getElementById("password").value;
            $.ajax({
                url: '/authen/login/' + username + "/"+ password,
                type: 'POST',
                fail: function(data) {
                    if(data==FALSE){
                        alert("Sai tên đăng nhập hoặc mật khẩu");
                    }
                    else return true;
                }
         });
    });*/

