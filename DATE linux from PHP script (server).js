date -s '2019-10-17 12:00:00'


Script from Server http://192.168.1.200/swf/gettime.php
<?php 
//bash needs date -s '2019-10-17 12:00:00'
//echo date("Y-m-d h:i:s"); //2021-09-15 01:26:28
echo date("Y-m-d h:i:s");
?>

script run from client:
# date -s '2019-10-17 12:00:00'
RESULT="`wget -qO- http://192.168.1.200/swf/gettime.php`"
echo $RESULT
date -s $RESULT