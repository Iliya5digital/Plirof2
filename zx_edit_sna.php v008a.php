<?php
$debug=false; //NEED to be false to enable download
/*
v221125b - Seems to work Teamnames+Player names
v221125a - Added loop for names (but not working) - BUG- File write was for fixed size
v221124b- 
v221123 - Initial PHP version 

use https://hexed.it/

ToDo:
- Create second PHP file where it merges changes and SNA file
- Footballer of the year -add HEX for players names
*/
$write_enabled=false;
//$filename="fb_year.sna";
$filename="footgr21.sna";

//echo str_pad($input, 9);                      // produces "Alien     "

//$position=hexdec("00004Α2Β"); // You have to pre-calculate it once
//$position=hexdec("00010edb"); // You have to pre-calculate it 
$interval_size=10;// intervals 37 ok for first 17 ($group_iterations)
$string_size=9; //Size of stored string
$group_iterations=23;
//Second time
$addr_array = array(
	"00004A2B"=>"Category 1",
	//"00004B07"=>"B ethniki",
	"00004B07"=>"Category 2",
	"00004BE3"=>"Category 3",
	"00004CBF"=>"Category 4",
	"00004D9B"=>"Champions league",
	//"00024B07"=>"EEtniki???",
	"00004E77"=>"Nations League",
		
);





//$position=hexdec($addr);
//if ($debug) echo $position;
//$data="ARISOLE".$addr; // Replacement

$data="TEAM";
$data=str_pad($data, 9);
$index_add=0;
/*
if ($f=fopen($filename, "r+")) {

	foreach($addr_array as $pos => $pos_team ){
		echo "<h3>$pos / ".hexdec($pos)." , $pos_team </h3>";
		$position=hexdec($pos);
		$index_add=0;
		for($i=1;$i<23;$i++){
		    fseek($f, $position+$index_add);
		    $teamname=fread($f,9);
		    fseek($f, $position+$index_add);
		    echo "<li>$i ) $teamname (position+index_add($index_add))".dechex($position+$index_add)."/".($position+$index_add);
		    if ($write_enabled)fwrite($f, $data);
		    $index_add=10*$i;
		} //End of for($i=1;$i,30l$i++){
		echo "<HR>";
	} //foreach($addr_array as $pos => $pos_team ){
    fclose($f);
} else {
    echo "Can't open file";
}
*/


if ($f=fopen($filename, "rb")) {

//READ contents of file
$contents = '';
while (!feof($f)) {
    $contents .= fread($f, 8192);
}
//echo "<hr>".$contents;
fclose($f);	
}
$content_orig=$contents;
if ($debug) echo '<hr> COMPARE1 '.strcmp($content_orig, $contents);





if(@$_REQUEST["getfile"]!="true") {
//if we don't have a request


//echo "<h3>".substr($contents, 18987,220)."</h3>";
echo "<form target='_blank' action='' method=POST >";


	foreach($addr_array as $pos => $pos_team ){
		echo "<h3>$pos / ".hexdec($pos)." , $pos_team </h3>";
		$position=hexdec($pos);
		$index_add=0;
		for($i=1;$i<$group_iterations;$i++){
		    //fseek($f, $position+$index_add);
		   // $teamname=fread($f,9);
		    $teamname=substr($contents, $position+$index_add,$string_size);

		    //fseek($f, $position+$index_add);
		    echo "<li>$i ) $teamname <!--(position+index_add($index_add))-->".dechex($position+$index_add)."/".($position+$index_add);
		    echo '<input type="text" id="fname'.($position+$index_add).'" name="'.($position+$index_add).'" value="'.$teamname.'"  maxlength="'.$string_size.'" size="'.($string_size+1).'" ><br>';
		    if ($write_enabled)fwrite($f, $data);
		    $index_add=$interval_size*$i;
		} //End of for($i=1;$i,30l$i++){
		echo "<HR>";
	} //foreach($addr_array as $pos => $pos_team ){
	
	
	
	
	//Footballer of the year Player names
	$interval_size=20;// intervals 37 ok for first 17 ($group_iterations)
	$string_size=19; //Size of stored string
	$group_iterations=15;
	$addr_array = array("00006FD5"=>"Player Names",);
	foreach($addr_array as $pos => $pos_team ){
		echo "<h3>$pos / ".hexdec($pos)." , $pos_team </h3>";
		$position=hexdec($pos);
		$index_add=0;
		for($i=1;$i<$group_iterations;$i++){
		    //fseek($f, $position+$index_add);
		   // $teamname=fread($f,9);
		    $teamname=substr($contents, $position+$index_add,$string_size);

		    //fseek($f, $position+$index_add);
		    echo "<li>$i ) $teamname <!--(position+index_add($index_add))-->".dechex($position+$index_add)."/".($position+$index_add);
		    echo '<input type="text" id="fname'.($position+$index_add).'" name="'.($position+$index_add).'" value="'.$teamname.'" maxlength="'.$string_size.'" size="'.($string_size+4).'" ><br>';
		    if ($write_enabled)fwrite($f, $data);
		    $index_add=$interval_size*$i;
		} //End of for($i=1;$i,30l$i++){
		echo "<HR>";
	} //foreach($addr_array as $pos => $pos_team ){	
	
	
	
	
	
	
	
	
	
echo "<input type=hidden name='getfile' value=true >";
echo "<input type=submit>";
echo "</form>";




}else {	
// If file download	


//if($debug)echo "<h3>contents line 126</h3>".$contents."<hr>";
foreach($_REQUEST as $pos => $text ){
	if ($debug) echo "<hr> $pos => $text";
	if($pos=="getfile") continue;
	//https://www.php.net/manual/en/function.file-put-contents.php

//}

//echo "<h3>".substr($contents, 18987,220)."</h3>";
//echo "<form target='_blank' action=zx_recreate_sna_file.php >";
	//oreach($addr_array as $pos => $pos_team ){
		if ($debug) echo "<h3>$pos / ".hexdec($pos)." , $text </h3>";
		$position=hexdec($pos);
		$index_add=0;
		//for($i=1;$i<23;$i++){
		    //fseek($f, $position+$index_add);
		   // $teamname=fread($f,9);
			//if($debug)echo "<h3>contents line 143</h3>".substr($contents, 0,9)."<hr>";		    
		    //$contents=substr_replace($contents,$text,$pos,9);
			$text_length=strlen($text);
		    $contents=substr_replace($contents,$text,$pos,$text_length);
		    //fseek($f, $position+$index_add);
		    $teamname=substr($contents, $position+$index_add,$text_length);
		    if ($debug) echo "<li> ) $teamname (position+index_add($index_add))".dechex($position+$index_add)."/".($position+$index_add);
		    //echo '<input type="text" id="fname'.($position+$index_add).'" name="'.($position+$index_add).'" value="'.$teamname.'" maxlength="9" ><br>';
		    //if ($write_enabled)fwrite($f, $data);
		    //$index_add=10*$i;
		//} //End of for($i=1;$i,30l$i++){
		if ($debug) echo "<HR>";
	} //foreach($addr_array as $pos => $pos_team ){
//echo "<input type=submit>";
//echo "</form>";

if ($debug) echo '<hr> COMPARE '.strcmp($content_orig, $contents);
//if($debug)echo "<hr><hr><hr>".$content_orig."<hr><hr>";

header('Content-Disposition: attachment; filename="fotygr.sna"');
header('Content-Type: text/plain'); # Don't use application/force-download - it's not a real MIME type, and the Content-Disposition header is sufficient
header('Content-Length: ' . strlen($contents));
header('Connection: close');
echo $contents;
//print_r($_REQUEST);
//echo $str;
}
//end of if($_REQUEST["getfile"]!="true") {
?>
