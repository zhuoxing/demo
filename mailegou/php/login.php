<?php
header('Content-type: text/html;charset=utf-8');

$phonenum = $_POST['phone'];
$password = $_POST['pwd'];

$password = md5($password);

$conn = new mysqli('localhost', 'root', '', 'mailegou');

$conn->query('set names utf8');

$sql = "SELECT * from user WHERE phone='$phonenum' and pwd='$password'";

$result = $conn->query($sql);


$data = array(
    'code' => 0,
    'msg'  => '登录成功！'
);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode($data);
} else {
    $data['code'] = 1;
    $data['msg'] = '用户名或密码错误！';
    echo json_encode($data);
}

$conn->close();
 ?>