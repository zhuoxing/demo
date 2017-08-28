<?php
header('Content-type: text/html;charset=utf-8');

$name = $_POST['name'];
$pwd = $_POST['pwd'];

$pwd = md5($pwd);

$conn = new mysqli('localhost', 'root', '', 'h51620');

$conn->query('set names utf8');

$sql = "SELECT * from admin WHERE name='$name' and pwd='$pwd'";

$result = $conn->query($sql);


$data = array(
    'code' => 0,
    'msg'  => '登录成功！'
);

if ($result->num_rows > 0) {


    $row = $result->fetch_assoc();

    $data['nickname'] = $row['nickname'];


    echo json_encode($data);
} else {
    $data['code'] = 1;
    $data['msg'] = '登录失败！';
    echo json_encode($data);
}

$conn->close();
 ?>