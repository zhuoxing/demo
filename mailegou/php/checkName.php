<?php
header('Content-type: text/html;charset=utf-8');

$phonenum = $_GET['phone'];

$conn = new mysqli('localhost', 'root', '', 'mailegou');

$conn->query('set names utf8');

$sql = "SELECT id from user WHERE phone='$phonenum'";

$result = $conn->query($sql);

$data = array(
    'code' => 0,
    'msg'  => '可以注册！'
);
if ($result->num_rows > 0) {
    $data['code'] = 1;
    $data['msg'] = '不可以注册！';
    echo json_encode($data);
} else {
    echo json_encode($data);
}

$conn->close();
 ?>