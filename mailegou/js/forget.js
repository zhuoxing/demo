$(function(){
    $.idcode.setCode();
    $('#myform').Validform({
        tiptype: 2,
        btnSubmit: '.sut',
        beforeSubmit: function(){
        var IsBy = $.idcode.validateCode();
            if (!IsBy) {
                alert('验证码错误');
                return;
            }         
        }
    });
});
function changeOne(){
    $.idcode.setCode();
}