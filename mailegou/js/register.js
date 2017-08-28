$(function() {

    $.idcode.setCode();

    /*表单校验*/
    $('#myform').Validform({
        tiptype: 2,
        showAllError: true,
        btnSubmit: '#regbtn',
        beforeSubmit: function() {
            var IsBy = $.idcode.validateCode();
            if (!IsBy) {
                alert('验证码错误');
                return;
            }


            var phonenum = $('#phonenum').val();
            var password = $('#password').val();

            $.post('php/register.php', {
                phone: phonenum,
                pwd: password,
            }, function(data) {
                console.log(data);
                if (data && data.code == 0) {
                    alert('恭喜您，注册成功');
                    location.href ='login.html';
                } else {
                    alert('注册失败，请重新填写' + data.msg);
                }

            }, 'json');
        }
    });
    /*表单校验*/
    $('#phonenum').blur(function() {
        var that = this;
        var phonenum = $(this).val();
        if (!phonenum) {
            return;
        }

        $.get('php/checkName.php', {
            phone: phonenum
        }, function(data) {
            if (data && data.code == 1) {
                $(that).val('').focus();
                alert('用户名已被注册！！！');
            }
        }, 'json');
    });

    $('#ok').click(function() {

        if (!$(this).prop('checked')) {
            $('#regbtn').prop('disabled','true');
            $('.loginBtn').css('background','#ccc');
        } else {
            $('#regbtn').removeProp('disabled');
            $('.loginBtn').css('background','#e83917');
        }

    })
});
function changeOne(){
    $.idcode.setCode();
}