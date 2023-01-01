___________
https://yohan.es/swbasic
_______________
10 CLS 
20 PRINT "WHAT IS THE PASSWORD? "
30 INPUT P$ 
40 IF P$= "SAUSAGES" THEN PRINT "WELL DONE" 
50 IF P$<>"SAUSAGES" THEN PRINT "WRONG, STUPID MONSTER "

_______________
10 CLS 
20 PRINT "ROSES ARE RED- "
30 PRINT "VIOLETS ARE BLUE-" 
40 PRINT "WITH A FACE LIKE YOURS"
50 PRINT "YOU BELONG IN A ZOO" 
_______________
10 CLS 
20 PRINT "THERE ARE" 
30 PRINT 365*24 
40 PRINT "HOURS IN" 
50 PRINT "A YEAR"
_______________
10 CLS 
20 LET N=99 
30 LET B$="BANANAS"
40 PRINT N 
50 PRINT B$ 
_______________
10 CLS 
20 LET N=7 
30 PRINT N;" SLIMY SLUGS" 
40 PRINT "ATE, ";N;" SOGGY SANDWICHES" 
_______________
10 CLS 
20 PRINT "HOW MANY SPACES" 
30 PRINT "DO YOU WANT TO LEAVE?" 
40 INPUT N 
50 PRINT TAB(N);"HELLO - TAB DOES NOTHING"
_______________
10 CLS 
20 PRINT: PRINT: PRINT 
30 PRINT "DAY","MY LUNCH" 
40 PRINT 
50 PRINT "MONDAY", "CHOCOLATE" 
60 PRINT "TUESDAY", "HAM BURGERS" 
70 PRINT "WEDNESDAY","ICECREAM" 
80 PRINT "THURSDAY", "SAUSAGES" 
90 PRINT "FRIDAY","LOLLIPOPS" 
100 PRINT "SATURDAY", "CHIPS" 
110 PRINT "SUNDAY", "POPCORN" 
_______________
10 CLS
20 LET A=11
30 PRINT "I AM ";A;" YEARS OLD "
40 PRINT "HOW OLD ARE YOU?" 
50 INPUT B 
60 IF A=B THEN PRINT "WE'RE THE SAME AGE!" 
70 IF A>B THEN PRINT "I'M OLDER THAN YOU"
80 IF A<B THEN PRINT "I'M YOUNGER THAN YOU "
_______________
5 REM This line tells the computer to count from O to 30 in steps of a. 
10 CLS
20 FOR L= 0 TO 30 STEP 5 
30 PRINT L 
40 NEXT L 
_______________
10 CLS 
20 PRINT "COUNTDOWN" 
30 FOR J=10 TO 7 STEP -1 
40 PRINT J 
50 NEXT J 
60 PRINT "BLAST OFF!"
_______________
10 CLS :REM WAIT
20 PRINT "HELLO EVERYBODY" 
30 FOR K=1 TO 10
40 PRINT "HELLO AGAIN"
50 NEXT K
_______________
10 CLS 
20 FOR K=1 TO 12 
30 LET A=K*9 
40 PRINT K;" x 9 =";A 
50 NEXT K 
_______________
10 CLS 
20 LET W=INT(RND*5) 
30 PRINT "HELLO MONSTERS" 
40 PRINT "THE LUCKY WINNER" 
50 PRINT "IS NUMBER ";W 
_______________
10 CLS
20 PRINT "#'**#**•*'* "
30 PRINT "PLEASE COME" 
40 PRINT "TO MY" 
50 PRINT "BIRTHDAY PARTY" 
60 PRINT "DATE 19TH JULY"
70 PRINT "TIME 3.00PM" 
80 PRINT "PLACE MY HOUSE "
90 PRINT "LOVE" 
100 PRINT "UGLYMUG" 
110 PRINT "■******■**" 
_______________
10 CLS 
20 PRINT "HOW MANY HOURS DO YOU" 
30 PRINT "SPEND WATCHING TV" 
40 PRINT "EACH WEEK?" 
50 INPUT X 
60 LET Y=X*52 
70 PRINT "THAT MEANS YOU SPEND" 
80 PRINT Y;" HOURS WATCHING TV" 
90 PRINT "EACH YEAR!" 
_______________
10 CLS 
20 PRINT "HOW MANY AGES DO "
30 PRINT "YOU WANT TO AVERAGE? "
40 INPUT N 
50 LET T=0 
60 FOR K=1 TO N 
70 PRINT "WHAT IS AGE #";K
80 INPUT X 
90 LET T=T+X 
100 NEXT K 
110 LET A=T/N 
120 PRINT "THE AVERAGE IS ";A 
_______________
10 CLS 
20 PRINT "WHAT'S GREEN AND HAIRY "
30 PRINT "AND GOES UP AND DOWN? "
40 PRINT: PRINT: PRINT 
50 FOR K=1 TO 200: NEXT K
60 PRINT "A GOOSEBERRY" 
70 PRINT "IN A LIFT!!" 
_______________
5 REM The program above is for a number game. It uses a random number command 
6 REM and a loop to produce a sequence of three numbers. You have to guess the 
7 REM next number in the sequence.
10 CLS 
20 LET R = INT((RND*1)*10 + 1) 
30 PRINT "HERE ARE THREE NUMBERS" 
40 FOR J=2 TO 4 
50 PRINT J*R 
60 NEXT J 
70 PRINT "WHAT IS THE NEXT" 
80 PRINT "IN THE SEQUENCE?" 
90 LET N = 5*R 
100 INPUT X 
110 IF X=N THEN PRINT "YES, WELL DONE" 
120 IF X<>N THEN PRINT "NO, IT'S ";N 
_______________
5 REM Guess game
10 CLS 
20 LET R= INT(RND*25)
30 PRINT "I'M THINKING OF A" 
40 PRINT "NUMBER BETWEEN" 
50 PRINT "1 AND 25" 
60 PRINT "GUESS WHAT IT IS." 
70 INPUT G 
80 IF G=R THEN GOTO 120 
90 IF G<R THEN PRINT "TOO SMALL" 
100 IF G>R THEN PRINT "TOO BIG" 
110 GOTO 70 
120 PRINT "YES, THAT'S IT" 
_______________
10 CLS 
20 PRINT "TIMES TABLE MACHINE" 
30 PRINT:PRINT
40 PRINT "WHAT TABLE DO YOU WANT?" 
50 INPUT T 
60 FOR J=1 TO 12 
70 LET A=J*T 
80 PRINT J;" x ";T;" = ";A 
90 NEXT Z 
_______________
10 CLS 
20 PRINT "DO YOU FEEL" 
30 PRINT "HAPPY OR SAD?" 
40 INPUT A$ 
50 PRINT: PRINT: PRINT 
60 PRINT "ui IIHHW 
70 PRINT "!□□□□□□□!" 
80 IF A$="SAD" THEN PRINT "!o0aan0n!" 
90 IF A$="HAPPY" THEN PRINT 
100 PRINT 
_______________
5 REM This program makes the computer add, subtract and multiply any two numbers. 
10 CLS 
20 PRINT "TYPE TWO NUMBERS" 
30 INPUT X: INPUT Y 
40 PRINT X;" + ";Y;" = ";X+Y 
50 PRINT X;" - ";Y;" = ";X-Y 
60 PRINT X;" x ";Y;" = ";X*Y 


_______________
10 CLS 
20 PRINT "HERE ARE FIVE RANDOM NUMBERS'" 
30 FOR L=1 TO 5 
40 LET R=INT(RND*10)+1
50 PRINT R 
60 NEXT L 
_______________
_______________

_______________

_______________

_______________

_______________

_______________
_______________

_______________

_______________

_______________

_______________

_______________
_______________

_______________

_______________

_______________