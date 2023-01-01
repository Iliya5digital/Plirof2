<html>
<header>
<!--
220914 - fixed weeknmber

ToDo : 
- Use a For Loop for showing break times
- Make a table according to day number that displays class/room
-->
<meta charset="utf-8" />
<META HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE">
<META HTTP-EQUIV="EXPIRES" CONTENT="Mon, 22 Jul 2002 11:12:01 GMT">
</header>

<body>

<div id="result" name="result" ></div>

<script type="text/javascript">
	
var normal_program=true; // Toggle this if we have secondary program	

var weeknumber=37;

function getWeekNumber(){
	currentdate = new Date();
	var oneJan = new Date(currentdate.getFullYear(),0,1);
	var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
	//var result = Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7);//orig
	var result = Math.ceil(( currentdate.getDay()  + numberOfDays) / 7);
	console.log(`The week number of the current date (${currentdate}) is ${result}.`);
	return result;
}

weeknumber=getWeekNumber();

//check if the number is even
if(weeknumber % 2 == 0) {
    console.log("The number is zygos.");
    normal_program=true;
}
// if the number is odd
else {
    console.log("The number is monos.");
    normal_program=false;
}
console.log("Current program flag (odd-even check) : "+normal_program+" weeknumber ="+weeknumber);
	
const class_times=[

"<B>8:15-9</B> no break",
"<B>9-9:40</B>",
"<B>10-10:45</B> no break",
"<B>10:45-11:30</B>",
"<B>11:55-12:35</B> no break",
"<B>12:35-13:15</B>"
];

const class_times_int=[
"<B>8:15-9</B>",
"<B>9:15-10</B> no break",
"<B>10-10:45</B>",
"<B>11-11:45</B> no break",
"<B>11:45-12:25</B>",
"<B>12:35-13:15</B>",
];


const break_times=[
"(2h/3h) 9:40-10:00",
"(4h/5h) 11:30-11:55"
];


const break_times_int=[
"(1h/2h) 9:00-9:15",
"(3h/4h) 10:45-11:00",
"(5h/6h) 12:25-12:35",
];

const classroom= [
  ["-","-","-","-","Δ2","Δ1","-"],  //monday [1][5] 
  ["-","-","-","-","Δ2","Δ1","-"],  //thusday  21dim
  ["-","-","Γ2 -13","Α1","ΣΤ1 -16","ΣΤ2 -20","-"],  //Tetarti
  ["-","-","Α2","Β2 -25","Γ1 -15","Ε2 -","ΟΛΟΗΜΕΡΟ"],  //
  ["-","-","-","Β1 -","-","Ε1 -","-"]  //ΠΑΡΑΣΚ
];
console.log(classroom[0][0]); // 


//each thuessday is toggled program
var now = new Date();
//             0         1       2          3         4          5          6
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

var day = days[ now.getDay() ];

var div = document.getElementById('result');

console.log(day);


function createProgramString(current_program){
	var result="";
	var line_seperator="\n<TR><TD>";
	console.log("\n_______ DAY : "+day);
	for(var hour = 1; hour < current_program.length+1; hour++) {
        //var current_day_program = current_program[i];
        //for(var j = 0; j < current_program.length; j++) {
        //result+=(line_seperator+"current_program[" + hour + "] = " + current_program[hour-1] + classroom[now.getDay()-1 ][hour-1]);
        result+=(line_seperator+hour+") "+ "</TD><TD><h1>"+ current_program[hour-1] + "</TD><TD><h1>"+classroom[now.getDay()-1 ][hour-1] +"</TD></TR>");
        //}
    }
	
	console.log(current_program.join("<BR>"+current_program.length+"||"));
	
	console.log("\n_______ createProgramString : "+result);
	return result;
	
}


function checkTime(){
	console.log("Current program flag : "+normal_program +" , getDay()="+now.getDay());
	if(now.getDay()==2) {
		normal_program = !normal_program; //toogle program variable (if its triti)
		div.innerHTML += 'Day =2 '+normal_program;
		
	}
	
	/*
	for(var i = 0; i < cubes.length; i++) {
    var cube = cubes[i];
    for(var j = 0; j < cube.length; j++) {
        display("cube[" + i + "][" + j + "] = " + cube[j]);
    }
    }
	
	*/
	
	console.log("Current program flag (after : "+normal_program);
	if(normal_program){
		//div.innerHTML +="<BR>"
		//div.innerHTML ="<BR><h1><B>LESSONS</B><BR>"+class_times.join("<BR>");
		
		console.log("============Normal_program : "+normal_program);
		div.innerHTML ="<BR><h1><B>LESSONS</B><BR><TABLE border=1>"+createProgramString(class_times);
		div.innerHTML +="</TABLE><BR><B>BREAKS</B><BR>"+break_times.join("<BR>");
		
	}else {
		//div.innerHTML ="<BR><h1><B>LESSONS</B><BR>"+class_times_int.join("<BR>");
		
		console.log("============NOT Normal_program : "+normal_program);
		div.innerHTML ="<BR><h1><B>LESSONS</B><BR><TABLE border=1>"+createProgramString(class_times_int);
		div.innerHTML +="</TABLE><BR><B>BREAKS</B><BR>"+break_times_int.join("<BR>");
	}
		
	
	
	
	
}


checkTime();
//var t=setInterval(checkTime,1000);
//clearInterval(t);




//div.innerHTML += 'Extra stuff';

</script>


<!--
//ORIGINAL
const class_times=[

"1. 8:15-9 no break",
"2. 9-9:40",
"3. 10-10:45 no break",
"4. 10:45-11:30",
"5. 11:55-12:35 no break",
"6. 12:35-13:15"
];

const class_times_int=[
"1. 8:15-9",
"2. 9:15-10 no break",
"3. 10-10:45",
"4. 11-11:45 no break",
"5. 11:45-12:25",
"6. 12:35-13:15",
];


const break_times=[
"(2h/3h) 9:40-10:00",
"(4h/5h) 11:30-11:55"
];


const break_times_int=[
"(1h/2h) 9:00-9:15",
"(3h/4h) 10:45-11:00",
"(5h/6h) 12:25-12:35",
];
-->


</body>
