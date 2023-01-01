//## https://adventuron.io/classroom/
//# https://adventuron.io/documentation/
/*
// TopGun2_untitled_20220601_2113_RC01.zip
//https://tableconvert.com/ascii-generator
//get banana,rock destroy/create banana 
// NOTE HTML VERSIOn --NOT -ZX Spectrum
//https://onlinetexttools.com/add-text-prefix
//https://onlinetexttools.com/escape-text
//In TEST.DSF replace & with \\
//

+───+───+───+───+───+───+
|   | 1 | 2 | 3 | 4 | 5 |
+───+───+───+───+───+───+
| 1 | B |   |coo|   |   | 
+───+───+───+───+───+───+
| 2 |   |ban|   |   |nar|
+───+───+───+───+───+───+
| 3 |   |ton|   |   |   |
+───+───+───+───+───+───+
| 4 |fij|   |   |Air|   |
+───+───+───+───+───+───+
| 5 |   |jav|   |KK |Enemy Base |
+───+───+───+───+───+───+───+

 N
W E
 S

   vending_machine : scenery "a vending maching ({coins_in_vending_machine} / 3)"   start_at = "my_location" ;

*/

start_at = loc_1_1base

/* loading_screen = topgun2_logo_img3 */

themes {
// red: #f00 /Magenta #f06 , Green: #0f0 , Blue: #00f /#10f , white #fff , Black #000
// : set_theme "green";
// 0 – black 1 – blue 2 – red 3 – magenta 4 – green 5 – cyan 6 – yellow 7 – white

   my_theme : theme {
      theme_settings {
        # layout = D X O
      }
      colors {
         treasure_pen     = #r
         pen              = 7
         paper            = #000         
         status_bar_paper = #30e
         status_bar_pen   = #fff
      }
   }

   red : theme {
      colors {
         pen              = 2
         paper            = #000         
      }
   } 

   white : theme {
      colors {
         pen              = 7
         paper            = #000         
      }
   } 

   
   green : theme {
      colors {
         pen              = 4
         paper            = #000         
      }
   }  
   
   blue : theme {
      colors {
         pen              = 1
         paper            = #000         
      }
   }   

   cyan : theme {
      colors {
         pen              = 5
         paper            = #000         
      }
   }

   yellow : theme {
      colors {
         pen              = 6
         paper            = #000         
      }
   } 
   
   magenta : theme {
      colors {
         pen              = 3
         paper            = #000         
      }
   }     
   
}

## Defines locations in the world

locations {

   lakeside      : location "You are by the side of a beautiful lake." ;
   outside_cave  : location "You are outside a cave. The entrance lies north." ;
   treasure_room : location "You are in a room of treasures." ;
   
   
   
   loc_1_1base : location "You fly over your Base Island."  /* graphic="topgun2_logo_img3" */; //1,1
   loc_1_3cook : location "You fly over Cook Island.   "; //1,3
   loc_3_2tonga : location "You fly over Tonga Island." /*  graphic="su35a" */;
   loc_2_5narau : location "You fly over Narau Island.";
   loc_4_1fiji : location "You fly over Fiji Islands." /* graphic="eurofighter1" */;
   loc_5_2java : location "You fly over Java Islands.";   
   loc5_5boss    : location "Mountain Boss Base.";   
   loc_5_1       :location  "Sea" ;
   loc_5_3       :location  "Mountain" ;
   loc_5_4       :location  "Mountain" ;   
   loc_4_2       :location  "Sea" ;
   loc_4_3       :location  "Sea" ;
   loc_4_4air    :location  "You are at a stategic spot in near the coast! " /* graphic="formation1" */;
   loc_4_5       :location  "Mountain" ;//KingKong   
   loc_3_1       :location  "Sea" ;
   loc_3_3       :location  "Sea" ;   
   loc_3_4       :location  "Sea" ;
   loc_3_5       :location  "Sea" ;         
   loc_2_1       :location  "Sea" ;
   loc_2_2       :location  "Sea" ;   
   loc_2_3       :location  "Sea" ;   
   loc_2_4       :location  "Sea" ;      
   loc_1_2       :location  "Sea" /*graphic="formation1" */ ;
   loc_1_4       :location  "Sea" ;
   loc_1_5       :location  "Sea" ;   
}

# Defines things in the world (scenery cannot be carried)

objects {
   apple          : object  "an apple" msg="Delicious." at = "lakeside";
   troll          : scenery "an enormous troll"  at = "outside_cave" msg="Hungry.";

      //should put it at "loc_3_4"   
   //rocket : object "a rocket" at = "loc_1_4" ;

   //should give it to king kong
   banana        : object "a banana"  msg="Maybe you will need it."; 
   bana1        : object "a banana"  at = "loc_2_2" msg="Maybe you will need it." weight="0"; 

   rock1        : object "a big rock"  at = "loc_2_2" msg="Maybe you will need it.";
   rock        : object "a big rock"  msg="Maybe you will need it.";


   //king kong gets rock gives nuke
   nuke        : object "a nuclear warhead (nuke)"   weight="0" ;   

   king_kong          : scenery "King Kong seems angry or hungry. He guards the mountains. He likes throwing trees to airplanes!"  at = "loc_5_4" ;

   //should put it at "loc_5_4"
   //bazooka        : object "a bazooka (not loaded)"  at = "loc_1_4" msg="Maybe you will need it.";   

   //should in inventory "loc_5_4"
   //loaded_bazooka        : object "a bazooka loaded and ready"  at = "loc_1_4" msg="Maybe you will need it.";

   //sword : object "a sword" at = "loc_1_4" ;

   
   old01          : scenery "a formation containing 2 MKs 24 Spitfires , 1 Soviet Yakovlev Yak-3 , 2 P-47D Thunderbolts and a P-38J Lightning  "  at = "loc_1_2" msg="Ready to fire."; 
   
   

   //loc_1_1base : location "You fly over Base Island."; //1,1
   
   //loc_1_3cook : location "You fly over Cook Island."; //1,3
   sam1          : scenery "a SAM1 missile silo"  at = "loc_1_3cook" msg="Ready to fire.";  
   sam2          : scenery "a SAM2 missile silo"  at = "loc_1_3cook" msg="Ready to fire.";   
   pln1          : scenery "a Saab JAS 39E Gripen"  at = "loc_1_3cook" msg="Ready to fire." ; 
   
   
   
   //loc_3_2tonga : location "You fly over Tonga Island.";
   grn1          : scenery "a MR-SAM missile silo"  at = "loc_3_2tonga" msg="Ready to fire.";   
   pln2          : scenery "a Sukhoi Su-35S"  at = "loc_3_2tonga" msg="Ready to fire.";
   
   //loc_2_5narau : location "You fly over Narau Island.";
   grn2          : scenery "a Iron Dome missile silo"  at = "loc_2_5narau" msg="Ready to fire.";      
   grn3          : scenery "a MEADS missile silo"  at = "loc_2_5narau" msg="Ready to fire.";  
   pln7          : scenery "a Shenyang FC-31"  at = "loc_2_5narau" msg="Ready to fire.";   

   
   //loc_4_1fiji : location "You fly over Fiji Islands.";
   grn4          : scenery "a Aster 30 SAMP/T"  at = "loc_4_1fiji" msg="Ready to fire.";   
   grn5          : scenery "a HQ-9 missile silo"  at = "loc_4_1fiji" msg="Ready to fire.";   
   pln5          : scenery "a F-15EX Eagle II"  at = "loc_4_1fiji" msg="Ready to fire.";   
   pln3          : scenery "a Eurofighter Typhoon"  at = "loc_4_1fiji" msg="Ready to fire.";

   
   //loc_5_2java : location "You fly over Java Islands.";    
   grn6          : scenery "a MIM-104 Patriot"  at = "loc_5_2java" msg="Ready to fire.";   
   grn7          : scenery "a THAAD (Terminal High Altitude Area Defense) missile silo"  at = "loc_5_2java" msg="Ready to fire.";   
   pln9          : scenery "a J-20"  at = "loc_5_2java" msg="Ready to fire.";   
   
   
   //loc_4_4air
   aircarrier          : scenery "A Huge Aircraft Carrier. It seems at least 3 times bigger that 'USS Gerald R Ford'! With a quick look you can estimate that this has Length of 1011m has a Displacement of 304,800 tons.You estimate that this would cost about $38.4 billion give or take a few pennies! "  at = "loc_4_4air" msg="Ready to fire.";   
   pln4          : scenery "a Dassault Rafale"  at = "loc_4_4air" msg="Ready to fire.";   
   pln6          : scenery "a Sukhoi Su-35S"  at = "loc_4_4air" msg="Ready to fire.";   
   pln8          : scenery "a F-22 Raptor "  at = "loc_4_4air" msg="Ready to fire.";   
   pln10          : scenery "a Sukhoi Su-57"  at = "loc_4_4air" msg="Ready to fire.";   
   pln11          : scenery "a F-35 Lightning II"  at = "loc_4_4air" msg="Ready to fire."; 
   old02          : scenery "a formation containing 2 MKs 24 Spitfires , 1 Soviet Yakovlev Yak-3 , 2 P-47D Thunderbolts and a P-38J Lightning  "  at = "loc_4_4air" msg="Ready to fire."; 
   

   //loc5_5 Boss Base

   grn8          : scenery "a S-300VM (Antey-2500)"  at = "loc5_5boss" msg="Ready to fire.";   
   grn9          : scenery "a S-400 Triumph"  at = "loc5_5boss" msg="Ready to fire.";   
   grn10          : scenery "a S-500 Prometheus Range"  at = "loc5_5boss" msg="Ready to fire.";   
   pln12          : scenery "a F-35 Lightning II"  at = "loc5_5boss" msg="Ready to fire."; 
   old03          : scenery "a formation containing 2 MKs 24 Spitfires , 1 Soviet Yakovlev Yak-3 , 2 P-47D Thunderbolts and a P-38J Lightning  "  at = "loc5_5boss" msg="Ready to fire."; 


   
   tom_cruise          : scenery "Tom Cruise who is the bad guy /end boss!"  at = "loc5_5boss" ;  

   

   
   bmb1          : object  "a bomb" msg="Delicious." at = "inventory";   
   bmb2          : object  "a bomb" msg="Delicious." at = "inventory";   
   bmb3          : object  "a bomb" msg="Delicious." at = "inventory";      
   bmb4          : object  "a bomb" msg="Delicious." at = "inventory";   
   bmb5          : object  "a bomb" msg="Delicious." at = "inventory";   
   bmb6          : object  "a bomb" msg="Delicious." at = "inventory";   
   bmb7          : object  "a bomb" msg="Delicious." at = "inventory";      
   bmb8          : object  "a bomb" msg="Delicious." at = "inventory";      
   bmb9          : object  "a bomb" msg="Delicious." at = "inventory";      
   bmb10          : object  "a bomb" msg="Delicious." at = "inventory";      
   bmb11          : object  "a bomb" msg="Delicious." at = "inventory";      
   bmb12          : object  "a bomb" msg="Delicious." at = "inventory";      
   bmb13          : object  "a bomb" msg="Delicious." at = "inventory";
   msn1          : object  "a missile" msg="Delicious." at = "inventory";   
   msn2          : object  "a missile" msg="Delicious." at = "inventory"; 
   msn3          : object  "a missile" msg="Delicious." at = "inventory"; 
   msn4          : object  "a missile" msg="Delicious." at = "inventory";    
   msn5          : object  "a missile" msg="Delicious." at = "inventory";    
   msn6          : object  "a missile" msg="Delicious." at = "inventory";    
   msn7          : object  "a missile" msg="Delicious." at = "inventory";    
   msn8          : object  "a missile" msg="Delicious." at = "inventory";    
   msn9          : object  "a missile" msg="Delicious." at = "inventory";    
   msn10          : object  "a missile" msg="Delicious." at = "inventory";    
   msn11          : object  "a missile" msg="Delicious." at = "inventory";    
   msn12          : object  "a missile" msg="Delicious." at = "inventory";    

   mso01          : object  "a missile" msg="Delicious." at = "inventory";
   mso02          : object  "a missile" msg="Delicious." at = "inventory";   
   mso03          : object  "a missile" msg="Delicious." at = "inventory";    
}
   

booleans {
    sam1destroyed : boolean "false"; // False is the default
}
   
integers {
    msnion_goals : integer "0";
    msnion : integer "1";
    inventory_limit : integer "100" ;
}

strings { 
   old01_description : string "a formation containing 2 MKs 24 Spitfires , 1 Soviet Yakovlev Yak-3 , 2 P-47D Thunderbolts and a P-38J Lightning  ";
// "{pln_a}";
   old_a : string  "\n\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0--|--\n\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0*---o0o---*\n\u00a0\u00a0\u00a0\u00a0--|--\u00a0\n*---o0o---*\u00a0\n\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0--|--\n\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0*---o0o---*";

   pln_a : string   "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0|\u00a0\u00a0|\u00a0\n\u00a0\u00a0\u00a0\u00a0x---o8o---x\u00a0\u00a0" ;
         

   pln_b : string "\n\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0--|--\n\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0*---o0o---*\n\u00a0\u00a0\u00a0\u00a0--|--\u00a0\n*---o0o---*\u00a0\n\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0--|--\n\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0*---o0o---*";

   pln_c : string "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0--|--\n*---o--(.)--o---*";

   msl_a : string "\u00a0\u00a0\u00a0\u00a0|\n\u00a0\u00a0\u00a0|\u00a0\u00a0|\n\u00a0\u00a0\u00a0|\u00a0\u00a0|\n\u00a0\u00a0:|\u00a0\u00a0\u00a0|:\n\u00a0|:|\u00a0\u00a0\u00a0\u00a0|:|" ;

   air_c : string "\u00a0\u00a0\u00a0\u00a0-----------\n\u00a0\u00a0\u00a0\u00a0\u00a0|--|-|--|-|\n\u00a0\u00a0\u00a0-|-----------|--\n\u00a0\u00a0|o\u00a0o\u00a0o\u00a0o\u00a0o\u00a0o\u00a0o\u00a0o/\u00a0\u00a0\n\u00a0\u00a0\u00a0---------------";
   tom : string "\u00a0XXXXX\u00a0\n\u00a0-O-O-\u00a0\n\u00a0\u00a0\u00a0|\u00a0\n\u00a0\u00a0---\u00a0";

}

   
connections {

   ## Connects locations together (bidirectional)
   
   from, direction, to = [
     // lakeside,     north, outside_cave
     // outside_cave, north, treasure_room, 
      //loc_1_1base , north, loc_1_3cook,
      
   loc_1_1base,east, loc_1_2,
   loc_1_2,    east, loc_1_3cook,
   loc_1_3cook,east ,loc_1_4,
   loc_1_4,east,loc_1_5, 

   loc_1_5, south, loc_2_5narau,
   loc_2_5narau,west ,loc_2_4,     
   loc_2_4,west,loc_2_3,   
   loc_2_3,west,   loc_2_2,   
   loc_2_2,   west,   loc_2_1,
   loc_2_1,south,loc_3_1,
   


   
   loc_3_1,east,loc_3_2tonga,
   loc_3_2tonga,east,loc_3_3,   
   loc_3_3, east,   loc_3_4,
   //to bypass aircarrier
   loc_3_3, south,   loc_4_3,
   loc_3_4,east ,  loc_3_5,         



   //loc_3_5, south,loc_4_1fiji,
   loc_3_5, south,loc_4_5,
   loc_4_5,west,loc_4_4air,
   loc_4_4air,west,loc_4_3,
   loc_4_3,west,loc_4_2,
   loc_4_2,west,loc_4_1fiji,
   loc_4_4air,south,loc_5_4,   


   loc_4_1fiji,south,loc_5_1,
   loc_5_1,east,loc_5_2java,  
   loc_5_2java,  east,   loc_5_3 ,
   loc_5_3 ,east,loc_5_4,   
   loc_5_4,east, loc5_5boss    

   ]
}

barriers {

   ## Blocks Access To Cave Whilst Troll Exists (with message)
   
   block_cave : block {
      location           = treasure_room
      message            = The troll is guarding the cave.
      block_when_exists  = troll
      show_blocked_exit  = true
   }
  
   block_5_5boss : block {
      location           = loc5_5boss
      message            = King Kong is  guarding the mountains!
      block_when_exists  = king_kong
      show_blocked_exit  = true
   }
  
  
   loc_2_5narau_block : block {
      block_when_exists   = pln1
      location            = loc_2_5narau
      message             = You must destroy the other defences first!
      show_blocked_exit  = true
    }

   loc_3_2tonga_block : block {
      block_when_exists   = pln7
      location            = loc_3_2tonga
      message             = You must destroy the other defences first!
      show_blocked_exit  = true
    }



   loc_4_1fiji_block : block {
      block_when_exists   = pln2
      location            = loc_4_1fiji
      message             = You must destroy the other defences first!
      show_blocked_exit  = true
    }

   loc_5_2java_block : block {
      block_when_exists   = pln5
      location            = loc_5_2java
      message             = You must destroy the other defences first!
      show_blocked_exit  = true
    }

   loc_4_4air_block : block {
      block_when_exists   = pln9
      location            = loc_4_4air
      message             = You must destroy the other defences first!
      show_blocked_exit  = true
    }

   loc5_5boss_block : block {
      block_when_exists   = aircarrier
      location            = loc5_5boss
      message             = You must clear the Aircraft Carrier Defences.To enter the main base.
      show_blocked_exit  = true
    }

   throneroom_block : block {
      block_when_exists   = tom_cruise
      location            = loc_1_1base
      message             = You're ashamed to return to your home base before you kill EVERYONE and EVERYTHING in the final base! 
      show_blocked_exit  = true
    }

   
   
   
} 

## Print the objective when the game starts

on_startup {
   : print "Top Gun II - MaveRick Dangerous !" ;
: print "        | | " ;
: print "    x---o8o---x  " ;
: print "   | " ;
: print "  | | " ;
: print "  | | " ;
: print " :| |: " ;
: print "|:| |:| " ;

   : press_any_key ;
   : clear_screen;
   : set_theme "white";
   : print "You are a flight instructor.";
   : print "An unknown evil mastermind plans to fill the USA market with fake iPads. President and the admirals summoned you to help. You also must prove to the noob pilots that you are the best! Your Goal : Destroy All the Enemies!" ;
   : set_theme "white";
   : press_any_key ;
   : print "Mission breefing:";   
   : print "You will operate a highly automated manned drone. You can control it with the basic known commands! ";   
   : press_any_key ;
   : print "Mission breefing:";  
   : print "We suspect enemy has many aircrafts that are protected by Ground to Air defence systems! Before you destroy a target you must destroy it\'s protectors!";   
   : print "Good luck! Most of us here are counting on you! The other ones are in war room designing a \'Plan B\'.";     
   : press_any_key ;
}

## Execute this every time a player moves or redescribes a location

on_describe {
   : if (is_at "loc_1_1base" && !is_exists "pln12" ) {
      : print "CONGRATULATIONS YOU KILLED EVERYONE. YOU WIN! YOU CAN RETURN HOME AND WAIT FOR TOP-GUN 3" ;
      : print "The president reveals you a BIG secret! He says :" ;
      : print "You can find the Update for -10D bathroom Design- in the Top Gun 2 tape!!!!" ;      
      : win_game ;
   }
   : if (is_present "old01") {
         : print "{old_a}";
   }

   : if (is_present "old02") {
         : print "{old_a}";
   }   
   
   : if (is_present "old03") {
         : print "{old_a}";
   }   
   
   : if (is_present "king_kong") {
         : print "";
   }

   : if (is_present "aircarrier") {
        : print "{air_c}";
        //"    -----------\n     |--|-|--|-|\n   -|-----------|--\n  |o o o o o o o o/  \n   ---------------" ;
   }
   
   : if (is_present "sam1" || is_present "grn3" || is_present "grn1" ) {
      : print "{msl_a}" ;
   }
   
   // Ground
   : if (is_present "sam2" || is_present "grn7" || is_present "grn2") {
      : print "{msl_a}" ;
   }

   // Ground
   //: if (is_present "grn3") {
//      : print "{msl_a}" ;
//   }   
   // Ground
   : if (is_present "grn4" || is_present "grn8") {
      : print "{msl_a}" ;
   }
   : if (is_present "grn5") {
      : print "{msl_a}" ;
   }
   : if (is_present "grn6") {
      : print "{msl_a}" ;
   }
   : if (is_present "grn10") {
      : print "{msl_a}" ;
   }
   : if (is_present "grn9") {
      : print "{msl_a}" ;
   }
   
   //Saab JAS 39E Grippen
   : if (is_present "pln1") { 
      
      : print "{pln_a}" ;
   }
   //Sukhoi Su 35S
   : if (is_present "pln2") {
      
      : print "{pln_a}" ;
   }
   //Shenyang FC-31
   : if (is_present "pln7") {
      
      : print "{pln_a}" ;
   }   

   //F-15EX Eagle II
   : if (is_present "pln5") {
      
      : print "{pln_a}" ;
   }
   //Eurofighter Typhoon
   : if (is_present "pln3") {
      
      : print "{pln_a}" ;
   }   
   
   //J-20
   : if (is_present "pln9") {
      
      : print "{pln_a}" ;
   }

   // Dassault Rafale , Sukhoi Su-35S,F-22 Raptor 
   : if (is_present "pln4" && is_present "pln6" && is_present "pln8"  ) {
         : print "{old_a}";
   }
   
   //Sukhoi Su-57
   : if (is_present "pln10") {
      
      : print "{pln_a}" ;
   }
   
   //F-35 Lightning II
   : if (is_present "pln11") {
      
      : print "{pln_a}" ;
   }  

   // F-35 Lightning II
   : if (is_present "pln12") {
      : print "{pln_c}" ;
      //"      --|--\n*---o--(.)--o---*" ;
   }
   //tom cruise
   : if (is_present "tom_cruise") {
      : print "{tom}" ;
      //" XXXXX \n -O-O- \n   | \n  --- "  ;
   }

}

## Test VERB NOUN that the player types and executes conditional actions

on_command {
   : match "give apple"  {
      : if (is_present "troll" && is_carried "apple") {
         : print   "The troll eats the apple then wanders off." ;
         : destroy "apple" ;
         : destroy "troll" ;
      }
   }
   
   : match "get banana"  {
      : if (is_present "bana1" ) {
         : print   "You open the window and get the banana." ;
         : destroy "bana1" ;
         : create "banana" target="inventory";
      }
   }   
   
   : match "get rock"  {
      : if (is_present "rock1" ) {
         : print   "You open the window and get the rock." ;
         : destroy "rock1" ;
         : create "rock" target="inventory";
      }
   }
   
   : match "give banana;drop banana;throw banana"  {
      : if (is_present "king_kong" && is_carried "banana") {
         : print   "King Kong eats the banana waves goodbye and then wanders off." ;
         : destroy "banana" ;
         : destroy "king_kong" ;
         : increment "msnion_goals";// sams=1
         : print {("Score: "+msnion_goals+" ")};         
      }
   }   
   
   : match "give rock;drop rock;throw rock"  {
      : if (is_present "king_kong" && is_carried "rock"  && !is_carried "nuke") {
         : print   "King Kong likes to play 'throw'.He throws the rock back at you. He seems to enjoy it. Now it is his turn: He throws something to you. It is a...Nuclear Warhead!!! You decide to keep the nuke!";
         : create "nuke" target="inventory";
         : increment "msnion_goals";// sams=1
         : print {("Score: "+msnion_goals+" ")};         
      }
   }
   
// loc 1,2 // old01          : scenery "{old01_description}"  at = "loc_1_2" msg="Ready to fire."; 
   : match "launch missile;fire missile"  {
      : if (is_at "loc_1_2" && is_present "old01" && is_carried "mso01") {

         : print "With one missile you destroy : a formation containing 2 MKs 24 Spitfires , 1 Soviet Yakovlev Yak-3 , 2 P-47D Thunderbolts and a P-38J Lightning  ";
         : destroy "mso01" ;
         : destroy "old01" ;
         : increment "msnion_goals";// sams=1
         : print {("Score: "+msnion_goals+" ")};
         //: set_integer var = "sams_destroyed"  value = "1";
      }
   } 
   
   
//loc_1_3cook
   : match "launch missile;fire missile"  {
      : if (is_at "loc_1_3cook" && !is_present "sam2" && is_carried "msn1" ) {
         : print   "Your missile destroys a Saab JAS 39E Gripen" ;
         : destroy "msn1" ;
         : destroy "pln1" ;
         : increment "msnion_goals";// sams=1
         : print {("Score: "+msnion_goals+" ")};
         
      }
      
   }

   : match "drop bomb"  {
      : if (is_at "loc_1_3cook" &&  !is_beside "sam1" && is_present "sam2" && is_carried "bmb2" ) {
         : print   "Your bomb destroys SAM Silo #2" ;
         : destroy "bmb12" ;
         : destroy "sam2" ;
         : increment "msnion_goals";// sams=1
         : print {("Score: "+msnion_goals+" ")};
         
      }
      
   }

   : match "drop bomb"  {
      : if (is_at "loc_1_3cook" && is_present "sam1" && is_carried "bmb1") {
         : print   "Your bomb destroys SAM Silo #1" ;
         : destroy "bmb11" ;
         : destroy "sam1" ;
         : increment "msnion_goals";// sams=1
         : print {("Score: "+msnion_goals+" ")};
         //: set_integer var = "sams_destroyed"  value = "1";
      }
   } 

   //loc_2_5narau : location "You fly over Narau Island.";


   : match "launch missile;fire missile"  {
      : if (is_at "loc_2_5narau" &&  !is_present "grn3" && is_carried "msn7" ) {
         : print   "Your missile destroys a Shenyang FC-31" ;
         : destroy "msn7" ;
         : destroy "pln7" ;
         : increment "msnion_goals";// sams=1
         : print {("Score: "+msnion_goals+" ")};
         
      }
      
   }

   : match "drop bomb"  {
      : if (is_at "loc_2_5narau" &&  !is_beside "grn2" && is_present "grn3" && is_carried "bmb3" ) {
         : print   "Your bomb destroys a MEADS missile silo" ;
         : destroy "bmb3" ;
         : destroy "grn3" ;
         : increment "msnion_goals";// sams=1
         : print {("Score: "+msnion_goals+" ")};
         
      }
      
   }

   : match "drop bomb"  {
      : if (is_at "loc_2_5narau" && is_present "grn2" && is_carried "bmb2") {
         : print   "Your bomb destroys an Iron Dome missile silo" ;
         : destroy "bmb2" ;
         : destroy "grn2" ;
         : increment "msnion_goals";// sams=1
         : print {("Score: "+msnion_goals+" ")};
         //: set_integer var = "sams_destroyed"  value = "1";
      }
   } 


   
   
   //loc_3_2tonga : location "You fly over Tonga Island.";
  

   : match "launch missile;fire missile"  {
      : if (is_at "loc_3_2tonga" &&  !is_present "grn1" && is_carried "msn2" ) {
         : print   "Your missile destroys a Sukhoi Su-35S" ;
         : destroy "msn2" ;
         : destroy "pln2" ;
         : increment "msnion_goals";// sams=1
         : print {("Score: "+msnion_goals+" ")};
         
      }
      
   }


   : match "drop bomb"  {
      : if (is_at "loc_3_2tonga" && is_present "grn1" && is_carried "bmb1") {
         : print   "Your bomb destroys a MR-SAM missile silo" ;
         : destroy "grn1" ;
         : destroy "bmb1" ;
         : increment "msnion_goals";// sams=1
         : print {("Score: "+msnion_goals+" ")};
         //: set_integer var = "sams_destroyed"  value = "1";
      }
   } 




      //loc_4_1fiji : location "You fly over Fiji Islands.";


   : match "launch missile;fire missile"  {
      : if (is_at "loc_4_1fiji" &&  !is_present "pln3" && is_carried "msn5" ) {
         : print   "Your missile destroys a F-15EX Eagle II" ;
         : destroy "msn5" ;
         : destroy "pln5" ;
         : increment "msnion_goals";// sams=1
         : print {("Score: "+msnion_goals+" ")};
         
      }
      
   }

   : match "launch missile;fire missile"  {
      : if (is_at "loc_4_1fiji" &&  !is_present "grn4" && is_carried "msn3" ) {
         : print   "Your missile destroys a Eurofighter Typhoon" ;
         : destroy "msn3" ;
         : destroy "pln3" ;
         : increment "msnion_goals";// sams=1
         : print {("Score: "+msnion_goals+" ")};
         
      }
      
   }

   : match "drop bomb"  {
      : if (is_at "loc_4_1fiji" &&  !is_beside "grn4" && is_present "grn5" && is_carried "bmb5" ) {
         : print   "Your bomb destroys a HQ-9 missile silo" ;
         : destroy "bmb5" ;
         : destroy "grn5" ;
         : increment "msnion_goals";// sams=1
         : print {("Score: "+msnion_goals+" ")};
         
      }
      
   }

   : match "drop bomb"  {
      : if (is_at "loc_4_1fiji" && is_present "grn4" && is_carried "bmb4") {
         : print   "Your bomb destroys a Aster 30 SAMP/T" ;
         : destroy "bmb4" ;
         : destroy "grn4" ;
         : increment "msnion_goals";// sams=1
         : print {("Score: "+msnion_goals+" ")};
         //: set_integer var = "sams_destroyed"  value = "1";
      }
   } 
   
   //loc_5_2java : location "You fly over Java Islands.";    
  
   : match "launch missile;fire missile"  {
      : if (is_at "loc_5_2java" &&  !is_present "grn6" && is_carried "msn9" ) {
         : print   "Your missile destroys a J-20" ;
         : destroy "msn9" ;
         : destroy "pln9" ;
         : increment "msnion_goals";// sams=1
         : print {("Score: "+msnion_goals+" ")};
         
      }
      
   }

   : match "drop bomb"  {
      : if (is_at "loc_5_2java" &&  !is_beside "grn6" && is_present "grn7" && is_carried "bmb7" ) {
         : print   "Your bomb destroys a THAAD (Terminal High Altitude Area Defense) missile silo" ;
         : destroy "bmb7" ;
         : destroy "grn7" ;
         : increment "msnion_goals";// sams=1
         : print {("Score: "+msnion_goals+" ")};
         
      }
      
   }

   : match "drop bomb"  {
      : if (is_at "loc_5_2java" && is_present "grn6" && is_carried "bmb6") {
         : print   "Your bomb destroys a MIM-104 Patriot" ;
         : destroy "bmb6" ;
         : destroy "grn6" ;
         : increment "msnion_goals";// sams=1
         : print {("Score: "+msnion_goals+" ")};
         //: set_integer var = "sams_destroyed"  value = "1";
      }
   } 

   //loc_4_4air craft carrier

   : match "drop nuke;fire nuke"  {
      : if (is_at "loc_4_4air" && is_carried "nuke" ) {
         : print   "You always wanted to see that a nuke can do. You drop the nuke and everything is destroyed!!!! You wish you had another nuke!" ;
         : destroy "nuke" ;
//         : destroy "msn4" ;
//         : destroy "msn6" ;
//         : destroy "msn8" ;         
//         : destroy "msn10" ;
//         : destroy "msn11" ;
         : destroy "pln8" ;
         : destroy "pln10" ;
         : destroy "pln11" ;
         : destroy "pln6" ;
         : destroy "pln4" ;
         : destroy "old02" ;         

         : increment "msnion_goals";// sams=1
         : increment "msnion_goals";// sams=1
         : increment "msnion_goals";// sams=1
         : increment "msnion_goals";// sams=1
         : increment "msnion_goals";// sams=1
         : increment "msnion_goals";// sams=1         
         : print {("Score: "+msnion_goals+" ")};
      }
   }

   : match "drop bomb"  { //Destroy aircraft
      : if (is_at "loc_4_4air" &&  !is_present "pln11" && is_carried "bmb13" ) {
         : print   "Your missile destroys the air carrier" ;
         : destroy "aircarrier" ;
         : destroy "bmb9" ;
         : increment "msnion_goals";// sams=1
         : print {("Score: "+msnion_goals+" ")};
      }
   }


   : match "launch missile;fire missile"  {
      : if (is_at "loc_4_4air" &&  !is_present "pln10" && is_carried "msn11" ) {
         : print   "Your missile destroys a F-35 Lightning II" ;
         : destroy "msn11" ;
         : destroy "pln11" ;
         : increment "msnion_goals";// sams=1
         : print {("Score: "+msnion_goals+" ")};
      }
   }

   : match "launch missile;fire missile"  {
      : if (is_at "loc_4_4air" &&  !is_present "pln8" && is_carried "msn10" ) {
         : print   "Your missile destroys a Sukhoi Su-57" ;
         : destroy "msn10" ;
         : destroy "pln10" ;
         : increment "msnion_goals";// sams=1
         : print {("Score: "+msnion_goals+" ")};
         
      }
      
   }
   
   : match "launch missile;fire missile"  {
      : if (is_at "loc_4_4air" &&  !is_present "pln6" && is_carried "msn8" ) {
         : print   "Your missile destroys a F-22 Raptor" ;
         : destroy "msn8" ;
         : destroy "pln8" ;
         : increment "msnion_goals";// sams=1
         : print {("Score: "+msnion_goals+" ")};
         
      }
      
   }

   : match "launch missile;fire missile"  {
      : if (is_at "loc_4_4air" &&  !is_beside "pln4" && is_present "pln6" && is_carried "msn6" ) {
         : print   "Your missile destroys a Sukhoi Su-35S" ;
         : destroy "msn6" ;
         : destroy "pln6" ;
         : increment "msnion_goals";// sams=1
         : print {("Score: "+msnion_goals+" ")};
         
      }
      
   }

   : match "launch missile;fire missile"  {
      : if (is_at "loc_4_4air" && is_present "pln4" && is_carried "msn4") {
         : print   "Your missile destroys a Dassault Rafale" ;
         : destroy "msn4" ;
         : destroy "pln4" ;
         : increment "msnion_goals";// sams=1
         : print {("Score: "+msnion_goals+" ")};
         //: set_integer var = "sams_destroyed"  value = "1";
      }
   } 

   : match "launch missile;fire missile"  {
      : if (is_at "loc_4_4air" && is_present "old02" && is_carried "mso02") {

         : print "You have become so good that with one missile you also destroy : a formation containing 2 MKs 24 Spitfires , 1 Soviet Yakovlev Yak-3 , 2 P-47D Thunderbolts and a P-38J Lightning  ";
         : destroy "mso02" ;
         : destroy "old02" ;
         : increment "msnion_goals";// sams=1
         : print {("Score: "+msnion_goals+" ")};
         //: set_integer var = "sams_destroyed"  value = "1";
      }
   } 
   
   


   //loc5_5boss Boss Base
   
   : match "drop rock"  {
      : if (is_present "tom_cruise" && is_at "loc5_5boss" && !is_present "pln12" && is_carried "rock") {
         : print   "You drop the rock right in the head of Tom Cruise. There will not be another Top-Gun in the next 36 years!" ;
         : destroy "rock" ;
         : destroy "tom_cruise" ;
         : increment "msnion_goals";// sams=1
         : print {("Score: "+msnion_goals+" ")};         
      }
   }   
   
   : match "launch missile;fire missile"  {
      : if (is_at "loc5_5boss" &&  !is_present "grn10" && is_carried "msn12" ) {
         : print   "Your missile destroys a F-35 Lightning II" ;
         : destroy "msn12" ;
         : destroy "pln12" ;
         : increment "msnion_goals";// sams=1
         : print {("Score: "+msnion_goals+" ")};
         
      }
      
   }

   : match "drop bomb"  {
      : if (is_at "loc5_5boss" &&  !is_beside "grn9" && is_present "grn10" && is_carried "bmb10" ) {
         : print   "Your bomb destroys a S-500 Prometheus Range" ;
         : destroy "bmb10" ;
         : destroy "grn10" ;
         : increment "msnion_goals";// sams=1
         : print {("Score: "+msnion_goals+" ")};
         
      }
      
   }


   : match "drop bomb"  {
      : if (is_at "loc5_5boss" &&  !is_beside "grn8" && is_present "grn9" && is_carried "bmb9" ) {
         : print   "Your bomb destroys a S-400 Triumph" ;
         : destroy "bmb9" ;
         : destroy "grn9" ;
         : increment "msnion_goals";// sams=1
         : print {("Score: "+msnion_goals+" ")};
         
      }
      
   }

   : match "drop bomb"  {
      : if (is_at "loc5_5boss" && is_present "grn8" && is_carried "bmb8") {
         : print   "Your bomb destroys a S-300VM (Antey-2500)" ;
         : destroy "bmb8" ;
         : destroy "grn8" ;
         : increment "msnion_goals";// sams=1
         : print {("Score: "+msnion_goals+" ")};
         //: set_integer var = "sams_destroyed"  value = "1";
      }
   } 


   : match "launch missile;fire missile"  {
      : if (is_at "loc5_5boss" && is_present "old03" && is_carried "mso03") {

         : print "With one missile you destroy : a formation containing 2 MKs 24 Spitfires , 1 Soviet Yakovlev Yak-3 , 2 P-47D Thunderbolts and a P-38J Lightning  ";
         : destroy "mso03" ;
         : destroy "old03" ;
         : increment "msnion_goals";// sams=1
         : print {("Score: "+msnion_goals+" ")};
         //: set_integer var = "sams_destroyed"  value = "1";
      }
   } 
   
   : match "drop nuke;fire nuke"  {
      : if (is_at "loc5_5boss" && is_carried "nuke" ) {
         : print   "You decide it's more fun to nuke them all! You drop the nuke and you see all the enemy base destroyed. The evil Tom Cruise is gone! There won't be another Top Gun sequel for the next 36 years!" ;
         : destroy "nuke" ;
//         : destroy "msn4" ;
//         : destroy "msn6" ;
//         : destroy "msn8" ;         
//         : destroy "msn10" ;
//         : destroy "msn11" ;
         : destroy "tom_cruise" ;
         : destroy "old03" ;
         : destroy "grn8" ;
         : destroy "grn9" ;
         : destroy "pln12" ;
         : destroy "grn10" ;         

         : increment "msnion_goals";// sams=1
         : increment "msnion_goals";// sams=1
         : increment "msnion_goals";// sams=1
         : increment "msnion_goals";// sams=1
         : increment "msnion_goals";// sams=1
         : increment "msnion_goals";// sams=1         
         : print {("Score: "+msnion_goals+" ")};
      }
   }
   
// Maneuvers   
   : match "cuban eight"  {
      
         : print "You perform an amazing Cuban Eight Maneuver : This maneuver consists of a 5/8ths loop to the 45-degree line, then a half roll, a three-quarter loop again to the 45-degree line, then a half roll, and a quick 1/8 loop to the flight level.  ";
   }    

   : match "stall turn"  {
      
         : print "You perform an amazing Stall Turn : The torque/gyroscopic effect of this maneuver is what makes it so thrilling to watch.  To start, the pilot completes a quarter loop to vertical. As airspeed decreases, the pilot applies the rudder so the aircraft rotates around the yaw axis. This causes the nose to point to the ground, and there’s a pause made, drawing the vertical flight line down and making a quarter loop to level flight. Despite being called a “Stall Turn,” the aircraft doesn’t really stall. What happens here is that gyroscopic forces caused by the propeller during the rate of yaw produce a rolling movement. Keeping the aircraft under control during this maneuver is challenging, and requires expert skill. ";
   }
   
   : match "outside loop"  {
      
         : print "You perform an outside loop : This was the figure that test pilot and aviation pioneer Jim Doolittle proved as technically possible back in the early 1920’s, despite many aeronautical engineers claiming it was impossible. The pilot enters a vertical circle from straight, level flight, its canopy pointing out of the loop, and drops. What makes this so challenging is that it creates powerful negative G forces.";
   }      

   : match "failing leaf"  {
      
         : print "You perform a Failing Leaf : There are many different roll variations to choose from, but our pick is the rolling leaf. With the throttle off, the wings level stall, and the plane begins to slip into one direction. The pilot then counters the slip with the rudder before a true spin occurs, so it slips back the other direction, like a leaf. Countering with the rudder again slides it back, and the pilot can then continue this slip and slide motion or simply dive to exit into the next maneuver.";
   }   
   
   : match "reverse turn"  {
      
         : print "You perform a reverse turn";
   }      
   
}

vocabulary {
   : verb / aliases = [quit, eject]
}

game_settings {
   // By referencing an integer, we can dynamically change this limit in-game
   // using : set_integer, or using a dynamic integer.
   inventory_items_limit_var = inventory_limit

   inventory_weight_limit_var = inventory_limit
   inventory_worn_items_limit_var = inventory_limit    
}



assets {
   graphics {

 
   }
   
   
}