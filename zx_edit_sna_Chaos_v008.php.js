<?php
$debug=false; //NEED to be false to enable download
/*
v221125a - Seems to work
v221124b- 
v221123 - Initial PHP version 

use https://hexed.it/

ToDo:
- Create second PHP file where it merges changes and SNA file
- Footballer of the year -add HEX for players names
*/
$write_enabled=false;
$filename="fb_year.sna";
$filename="CHAOS.SNA";


//echo str_pad($input, 9);                      // produces "Alien     "

//$position=hexdec("00004Α2Β"); // You have to pre-calculate it once
//$position=hexdec("00010edb"); // You have to pre-calculate it 

//Second time
$interval_size=37;// intervals 37 ok for first 17 ($group_iterations)
$string_size=13; //Size of stored string
$group_iterations=2;

$addr_array = array(
	//"000092B8"=>"Monsters first 17",
	//"0000A701"=>"Monsters first 18manticore",
	//"0000A797"=>"Monsters first 18manticore",
	//"0000A829"=>"Monsters first 18manticore",
	//"0000A7BA"=>"BEAR Monsters first 18manticore",
	//"0000AA31"=>"Monsters wraith",
	//"0000929B"=>"SPELLNAMES",


	"a47e"=>"KING COBRA ","a4a4"=>"BAT ","a4ca"=>"BLOB ","a4f0"=>"DIRE WOLF ","a516"=>"SPECTRE ","a53c"=>"GOBLIN ","a562"=>"CROCODILE ","a588"=>"GREEN DRAGON ","a5ae"=>"VAMPIRE ","a5d4"=>"FAUN ","a5fa"=>"LION ","a620"=>"GRYPHON ","a646"=>"ELF ","a66c"=>"HORSE ","a692"=>"ORC ","a6b8"=>"RED DRAGON ","a701"=>"MANTICORE ","a728"=>"TROLL ","a74e"=>"UNICORN ","a773"=>"EGHOST ",

	"a797"=>"WRAITH ",
	"a7ba"=>"BEAR ","a7e0"=>"GORILLA ","a806"=>"SKELETON ",

	"a829"=>"OGRE ","a84f"=>"ZOMBIE ",

	"a872"=>"HARPY ","a898"=>"PEGASUS ","a8be"=>"EAGLE ","a8e4"=>"HYDRA ","a90a"=>"GIANT RAT ","a930"=>"CENTAUR ","a956"=>"GIANT ","a97c"=>"GOLDEN DRAGON","a9a2"=>"DARK CITADEL ","a9c8"=>"MAGIC CASTLE ",

	"0000A9EB"=>"SHADOW WOOD ","0000AA0E"=>"MAGIC WOOD ","0000AA31"=>"WALL ",

		
);
/*
$addr_spell_names_chaos=array(
		//spells (different size each one)
	"929b"=>"MAGIC FIRE","92a5"=>"GOOEY BLOB",
	"92b8"=>"VENGEANCE",

"929B"=>'MAGIC FIREGOOEY BLOBLIGHTNINGVENGEANCEDARK POWERDECREEJUSTICELAW-1LAW-2CHAOS-1CHAOS-2MAGIC SHIELDMAGIC ARMOURMAGIC SWORDMAGIC KNIFEMAGIC BOWBLINDMAGIC BOLTTEMPESTRAISE DEADTELEPORTSUBVERSIONTURMOILDEAD REVENGECONSECRATIONDISPELCOUNTER SPELLMAGIC WINGSMAGIC SLEEPSHADOW FORM'
);
*/
// spells inital address is "929b"=>"MAGIC FIRE"
$chaos_spell_names=array('MAGIC FIRE','GOOEY BLOB','LIGHTNING','VENGEANCE','DARK POWER','DECREE','JUSTICE','LAW-1','LAW-2','CHAOS-1','CHAOS-2','MAGIC SHIELD','MAGIC ARMOUR','MAGIC SWORD','MAGIC KNIFE','MAGIC BOW','BLIND','MAGIC BOLT','TEMPEST','RAISE DEAD','TELEPORT','SUBVERSION','TURMOIL','DEAD REVENGE','CONSECRATION','DISPEL','COUNTER SPELL','MAGIC WINGS','MAGIC SLEEP','SHADOW FORM');
//$chaos_spell_names=array('MAGIC FIRE','GOOEY BLOB');


if($debug)print_r($chaos_spell_names);

$tmp_array_creation_string="";//used to get $addr_array entries individually

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
		    //$teamname="PATATAKIA";
		    //$teamname=str_pad($teamname, $string_size);
		    $tmp_array_creation_string=$tmp_array_creation_string.'"'.dechex($position+$index_add).'"=>"'.$teamname.'",';//    "0000A47E"=>"Monsters first 17",
		    //fseek($f, $position+$index_add);
		    echo "<li>$i ) $teamname (position+index_add($index_add))".dechex($position+$index_add)."/".($position+$index_add);
		    echo '<input type="text" id="fname'.($position+$index_add).'" name="'.($position+$index_add).'" value="'.$teamname.'" maxlength="'.$string_size.'" ><br>';
		    if ($write_enabled)fwrite($f, $data);
		    $index_add=($interval_size+1)*$i;
		} //End of for($i=1;$i,30l$i++){
		echo "<HR>";
	} //foreach($addr_array as $pos => $pos_team ){


//SPELLS CHAOS specific
echo "<h3>SPELL NAMES</H3>";
$pos="929b";
$position=hexdec($pos);
$index_add=0;
foreach($chaos_spell_names as $spell_name){
    // spells inital address is "929b"=>"MAGIC FIRE"
    $spell_string_length=strlen($spell_name);
   // $spell_name=str_replace(" ","-",$spell_name);
    echo "<li>"." ) $spell_name (position".dechex($position+$index_add)."/".($position+$index_add);

	echo '<input type="text" id="fname'.($spell_name).'" name="'.($position+$index_add).'" value="'.$spell_name.'" maxlength="'.($spell_string_length).'" >(max size:'.($spell_string_length).')<br>';
	 $index_add=$index_add+$spell_string_length;
}	// END of foreach($chaos_spell_names as $spell_name){	

echo "<input type=hidden name='getfile' value=true >";
echo "<input type=submit>";
echo "</form>";


echo"<hr>".$tmp_array_creation_string;


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
		    //$contents=substr_replace($contents,$text,$pos,$string_size);
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

if ($debug) echo '<hr> COMPARE '.strcmp($content_orig, $contents)."<BR>";
//if($debug)echo "<hr><hr><hr>".$content_orig."<hr><hr>";
if($debug) print_r($_REQUEST);
header('Content-Disposition: attachment; filename="chaosmod.sna"');
header('Content-Type: text/plain'); # Don't use application/force-download - it's not a real MIME type, and the Content-Disposition header is sufficient
header('Content-Length: ' . strlen($contents));
header('Connection: close');
echo $contents;

//echo $str;
}
//end of if($_REQUEST["getfile"]!="true") {
?>