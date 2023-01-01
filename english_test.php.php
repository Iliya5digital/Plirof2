<?php


$a1_enabled=true;
$a2_enabled=true;
$a3_enabled=true;
$b1_enabled=true;
$b2_enabled=true;
$b3_enabled=true;
$g1_enabled=true;
$g2_enabled=true;
$g3_enabled=true;
$g4_enabled=true;




$newurl="http://webmail.sch.gr";
$newurl="DISABLED";

switch (@$_GET["c"]) {
    case 'a1':
        if($a1_enabled)$newurl="http://localhost/swf";
        break;
    case 'a2':
        if($a2_enabled)$newurl="";
        break;
    case 'a3':
        if($a3_enabled)$newurl="";
        break;
    case 'b1':
        if($b1_enabled)$newurl="";
        break;
    case 'b2':
        if($b2_enabled)$newurl="";
        break;
    case 'b3':
        if($b3_enabled)$newurl="";
        break;
    case 'g1':
        if($g1_enabled)$newurl="";
        break;
    case 'g2':
        if($g2_enabled)$newurl="";
        break;
    case 'g3':
        if($g3_enabled)$newurl="";
        break;
    case 'g4':
        if($g4_enabled)$newurl="";
        break;
}
//echo"aaaaaaaaaaa";

function redirect($url) {
    ob_start();
    header('Location: '.$url);
    ob_end_flush();

    die();


}

if($newurl!="DISABLED")  redirect($newurl);


?>
<center>
<meta charset="utf-8">
<h1>English Test Link</h1>


<!--<script type="text/javascript">location.href = '<?php echo $newurl ?>';</script>-->


<h1>TEST ENDED</h1>



<hr>
<?php echo $newurl; ?>