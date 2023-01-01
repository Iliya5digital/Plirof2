<?php

$temp_files = glob(__dir__.'/*'); 
//$mypath='/mnt/home/downloads_linux/fun__/SPECTRUM/fun-games/itch.io_220410/';
$mypath='/mnt/home/downloads_linux/fun__/SPECTRUM/fun-games/itch.io_220310/';
$temp_files = glob($mypath.'*'); 
echo"<pre>";
foreach($temp_files as $file) {
	// [\w\d]{0,8}\.\w{2,4}
	$file =str_replace($mypath,"",$file);	
	///if (preg_match('/[\w\d]{0,8}\.\w{2,4}/i',$file, $output_array)) echo "<BR> $file";
	//preg_match('/[\w\d]{0,8}\.\w{2,4}/i',$file, $output_array) ;
	preg_match('/[\w\d]{0,8}\.(tap|z80|sna|tzx)/i',$file, $output_array) ;

	if(  isset($output_array[0])  &&  $file==$output_array[0] )	{
		$filename_array=explode('.',$file);
		$game_name = str_pad($filename_array[0],  37, " ");  
		$filename_main = str_pad($filename_array[0],  8, " ");  
		//echo "<hr>$filename_main";
		//$name_ext = str_pad($filename_array[0],  8, "___");  
		//echo "<BR> $file  : ".$output_array[0]."   filename : ".$filename_main.".".$filename_array[1];

	//echo "<BR> $file";
		$db_line_ORIG='Adventure Time - Flame Princess      2010                                      128 1         advtime .TAP Arc     27    43441        0 -1     Eng   0                                                                                                     
';
	$db_line=$game_name."2010                                      128 1         ".$filename_main.".".$filename_array[1]." Puz     27    43441        0 -1     Eng   0                                                                                                     
";
	//echo "\n$db_line";
	echo "$db_line";

	}
}
echo"</pre>";
?>