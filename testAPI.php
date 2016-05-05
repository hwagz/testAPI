<?php
header("Content-Type: application/json; charset=utf-8");
// test API to see what's crack-a-lackin'
$students = array(
  array('id'=>0,'name'=>'Hunt','student'=>true,'school'=>'Ohio State','age'=>25,'bagels'=>'Yes'),
  array('id'=>1,'name'=>'Timmy','student'=>true,'school'=>'Michigan','age'=>15,'bagels'=>'No'),
  array('id'=>2,'name'=>'Ben','student'=>true,'school'=>'Northwestern','age'=>19,'bagels'=>'No'),
);



//return JSON array
exit(json_encode($students));
?>
