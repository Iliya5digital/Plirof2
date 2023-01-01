<?php
/*
v220410 - v03d - Case insensitive .DAT file
v220310 - v03c - added filter
v220212 - removed spaces from filename
v211117 - 
v211110 - initial
ln -s /opt/spectrum/zx-spectrum10k-sgd/SPECCY/ /opt/lampp/htdocs/zx

ln -s /opt/spectrum/zx-spectrum10k-sgd/SPECCY/

*/
$myfilename="GAMES.DAT";
$myfile_path="SPECCY/";
$filename_possibilities_array=Array();


function enumerate($str,int  $n)
{
  global $filename_possibilities_array;
  //echo "| $str"; // Print one solution
  while (++$n < strlen($str)) // Loop while you don't reach the end
    {
    //if ($str[$n] > 96 && $str[$n] < 123) // Check if str[n] is alphabetic
      //{
        //char *tmp = calloc(strlen(str) + 1, sizeof(char));
        //$char=new Array(strlen($str)+1);
        $tmp=$str;

        //strcpy(tmp, str); // Create a copy of the initial string
        $tmp[$n] = strtoupper($tmp[$n]) ; // Put tmp[n] = str[n] in uppercase
        $filename_possibilities_array[]=$tmp;
        
        enumerate($tmp, $n); // Call recursion with new string and current position
     }
}

enumerate(strtolower($myfilename), -1);
//print_r($filename_possibilities_array);




function fileExists($myfile_path,$filename_possibilities_array ) {
	foreach($filename_possibilities_array as $file )
    {
      //echo "<HR>".$file;
      if(file_exists($myfile_path.$file)) {
       return $file;
      }
    }


    return "NOT_FOUND";
}




$myfilename=fileExists($myfile_path,$filename_possibilities_array);
//echo "<h1> myfilename=$myfilename </h1>";



$myfile = fopen($myfile_path.$myfilename, "r") or die("Unable to open file!");
$qaopURL='http://localhost/zx/QAOP/qaop.html';
$snapsURL='http://localhost/zx/SPECCY/';
$snapPATH="SPECCY/";
$snapsURL='http://localhost/zx/'.$snapPATH;


//#################### filter##############################
$display_scr=true;
$ignore_filter=false;
?>
<hr>
<form action="" method="post">
<!-- url: <input type="text" name="url"><br>-->
filter (values seperated by | ): <input type="text" name="filter" value="(z80|sna|tap)" > (eg (z80|sna|tap) or (monty|chess|pacman) or (.*)=ALL<br>
show SCR: <input type="radio" name="showscr"  > <br>

<input type="submit">
<?php #echo "Last URL= $url <BR> Last Filter =$keywords_pattern "; ?>
</form>
<hr>

<?php

//$keywords_pattern='#\b(u12|u99|etc)\b#i';
$keywords_pattern='/\b(.*)\b/i';
if (@$_REQUEST["showscr"]!="") {

    //$url="https://chess-results.com/tnr609201.aspx?lan=1&art=1&rd=7";
    $display_scr=$_REQUEST["showscr"];
  }
   else {
   $display_scr = false;
 }

//Check if filter is given
if (@$_REQUEST["filter"]!="") {

    $keywords_pattern='#\b('.$_REQUEST["filter"].')\b#i';
  }
   else {
    $keywords_pattern='#\b(.*)\b#i';
}
//#################### filter##############################



function process_fields($fields){
global $qaopURL,$snapsURL,$snapPATH,$display_scr;
global $keywords_pattern;

echo "<tr><td>";
if($display_scr){
  $filename_no_ext=substr($fields[4], 0, strrpos($fields[4], '.'));
  //$img_final="<img src= $snapsURL".get_path($filename_no_ext)."SCRSHOT/".$scr2png_text." >";
  //$img_final=$snapPATH.get_path($filename_no_ext)."SCRSHOT/".$filename_no_ext.".SCR ";
  $img_final=$snapPATH."SCRSHOT/".$filename_no_ext.".SCR ";
  //$img_final=$snapPATH."Scrshot/".$filename_no_ext.".SCR ";
  $scr2png_text="scr2png.php?scrimg=".$img_final;

  echo "<img src= $scr2png_text >";
}


echo "</td><td>".$fields[1];

echo "</td><td>".$fields[2];

echo "</td><td>".$fields[3];

//echo "</td><td>".$fields[4];
//echo "</td><td><a href=".$qaopURL."?#l=".$snapsURL.rawurlencode($fields[4]). ">".$fields[4]."</a> ";
echo "</td><td><a href=".$qaopURL."?#l=".$snapsURL.$fields[4]. ">".$fields[4]."</a> ";
echo "</td><td>".$fields[5];
echo "</td><td>".$fields[6];

echo "</td></tr>";
 //print_r($fields);

};

echo "<table border=1 >";
// Output one line until end-of-file
while(!feof($myfile)) {
  
  $s= fgets($myfile);

 // echo "$s" . "<br>";

    $fields[1] = substr($s,0,36);  // gamename first field:  first 10 characters of the line
    $fields[2] = substr($s,37,4);  // year second field: next 5 characters of the line
    $fields[3] = substr($s,42,36); // Publisher  third field:  next 12 characters of the line
    $fields[4] = str_replace(' ', '', substr($s,93,12));  //PC filename -REMOVED spaces
    $fields[5] = substr($s,106,7); // Type
    $fields[6] = substr($s,150,37); // Type
    //$fields[6] = substr($s,43,89);
    //$fields[7] = substr($s,43,89);



  //process_fields($fields);
  if ($ignore_filter || preg_match_all($keywords_pattern, $s)) process_fields($fields);  

}
echo "</tr></table>";
fclose($myfile);


?>
<!--
The current database format is:

Field        Start Length  Notes

Name             1     36
Year            38      4  Year-2000 compliant :-)
Publisher       43     36
Memory          80      3  Either one of " 16", " 48", "128", "4/1", "US0",
                           " +2", " +3" or "Pen"
# Players       84      1
Together        86      1  Only 'Y' if > 1 player, space otherwise
Joysticks       88      5  Shrunk leftward, order is 'K12CR' for
                           Kempston, Intf2#1, Intf2#2, Cursor and Redefineable.
PC-Name         94     12  The '.'s are aligned (raw name padded)
Type           107      7
PathIndex      115      3  Index number of the appropriate `GameDir' entry
FileSize       119      7  Is '+' if the size has more than 7 digits
Orig screen    127      1  'Y' if checked, space otherwise
Origin         129      1  ' ' = (unknown)
                           'O' = Original release
                           'R' = Re-release
                           'C' = Compilation release
                           'M' = Magazine conver-tape version
                           'T' = Type-in
                           'H' = Hacked/cracked version
                           'I' = Incomplete version
                           'B' = Buggered/corrupted version
FloppyId       131      4  Marked floppy number, or 0 for harddisk etc.
Emul override  136      2  -1 = none
                           0  = Z80
                           1  = JPP
                           2  = Warajevo
                           3  = X128
                           4  = WSpecEm
                           5  = ZX
                           6  = Spanish
                           7  = ZX-32
                           8  = R80
                           9  = Russian/Shalayev
                           10 = Russian/Yudin
AYSound        139      1  'Y' if checked, space otherwise
MultiLoad      141      1  'Y' if multi-load in both 48K and 128K mode
                           '4' if multi-load only in 48K mode
                           ' ' if not multi-load at all
Language       143      3
Score          147      3  0  = not set
Author         151    100

	-->