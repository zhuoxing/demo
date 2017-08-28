
$(function(){
    $.idcode.setCode();
    $('#myform').Validform({
        tiptype: 2,
        btnSubmit: '#loginbtn',
        beforeSubmit: function(){
        var IsBy = $.idcode.validateCode();
            if (!IsBy) {
                alert('验证码错误');
                return;
            }
            var username = $('.username').val();         
            var password = $('.initpsw').val();

            //

                $.post('php/login.php', {
                    phone: username,
                    pwd: password
                }, function(data) {
                    if (data && data.code == 0) {
                        // alert(data.msg);
                        //console.log(data.phone);
                        //创建cookie
                        $.cookie('username',username, {
                            exprice: 1,
                            path: '/'
                        });
                        console.log($.cookie('username'));
                        location.href = 'index.html';
                    } else {
                        alert(data.msg);
                    }
                }, 'json');            
        }
    });
});
function changeOne(){
    $.idcode.setCode();
}