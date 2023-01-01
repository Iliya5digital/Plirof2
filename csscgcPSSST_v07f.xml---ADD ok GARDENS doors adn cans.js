<?xml version="1.0" encoding="utf-8"?>
<xml xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <project>
    <projname>PSSST</projname>
    <welcome>Welcome The Chronicles of Doctor Robbie Pssst!</welcome>
    <author>Firelord Quality Games</author>
    <language>English</language>
    <version>Version 0.7f</version>
    <output>adventure</output>
    <preps>
      <prep>in</prep>
      <prep>on</prep>
      <prep>at</prep>
      <prep>under</prep>
      <prep>into</prep>
      <prep>inside</prep>
      <prep>through</prep>
      <prep>out</prep>
      <prep>behind</prep>
      <prep>off</prep>
      <prep>up</prep>
      <prep>with</prep>
      <prep>to</prep>
      <prep>off</prep>
      <prep>north</prep>
      <prep>south</prep>
      <prep>east</prep>
      <prep>west</prep>
      <prep>northeast</prep>
      <prep>southeast</prep>
      <prep>northwest</prep>
      <prep>southwest</prep>
      <prep>up</prep>
      <prep>down</prep>
      <prep>about</prep>
      <prep>over</prep>
      <prep>across</prep>
      <prep>for</prep>
    </preps>
    <verbs>
      <builtinverbs>
        <verb>n,go north,north</verb>
        <verb>s,go south,south</verb>
        <verb>e,go east,east</verb>
        <verb>w,go west,west</verb>
        <verb>ne,go northeast,northeast</verb>
        <verb>se,go southeast,southeast</verb>
        <verb>sw,go southwest,southwest</verb>
        <verb>nw,go northwest,northwest</verb>
        <verb>up,go up,u</verb>
        <verb>down,go down,d</verb>
        <verb>enter,go in,go inside,get in</verb>
        <verb>out</verb>
        <verb>go</verb>
        <verb>get,take,grab,pick up</verb>
        <verb>give</verb>
        <verb>inventory,i</verb>
        <verb>kill,attack</verb>
        <verb>drop</verb>
        <verb>light</verb>
        <verb>look,l</verb>
        <verb>examine,x,look at</verb>
        <verb>look in</verb>
        <verb>search</verb>
        <verb>open</verb>
        <verb>lock</verb>
        <verb>unlock</verb>
        <verb>close,shut</verb>
        <verb>eat</verb>
        <verb>drink</verb>
        <verb>put,place</verb>
        <verb>quit</verb>
        <verb>smell,sniff</verb>
        <verb>listen</verb>
        <verb>wait</verb>
        <verb>climb</verb>
        <verb>yell,scream,shout</verb>
        <verb>jump</verb>
        <verb>talk to</verb>
        <verb>turn on</verb>
        <verb>turn off</verb>
        <verb>wear,put on</verb>
        <verb>save</verb>
        <verb>restore</verb>
        <verb>push,press</verb>
        <verb>read</verb>
        <verb>use</verb>
        <verb>again</verb>
      </builtinverbs>
      <userverbs>
        <verb>cheateden</verb>
      </userverbs>
    </verbs>
    <objects>
      <object id="0" holder="0" name="Offscreen" printedname="Offscreen">
        <description>Offscreen.  Move objects here to remove them from the world.</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" transparent="0" openable="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in />
          <out />
        </nogo>
        <ImageId />
      </object>
      <object id="1" holder="15" name="player" printedname="player">
        <description>You're a wonderful person. You shouldn't care what you look like.</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" transparent="0" openable="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="me,self" />
        <nogo>
          <w />
          <e />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="2" holder="19" name="bee10" printedname="Bee">
        <description>You see a yellow bee!</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="1" portable="0" container="0" supporter="0" transparent="0" openable="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="3" holder="21" name="bee3" printedname="Bee">
        <description>You see a yellow bee!</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="1" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="4" holder="23" name="bee5" printedname="Bee">
        <description>You see a yellow bee!</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="1" portable="0" container="0" supporter="0" transparent="0" openable="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="5" holder="24" name="bee6" printedname="Bee">
        <description>You see a yellow bee!</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="1" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="6" holder="27" name="bee91" printedname="Female Bee">
        <description>You see a yellow female bee!</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="1" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="7" holder="27" name="bee92" printedname="Male Bee">
        <description>You see a yellow male bee!</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="1" portable="0" container="0" supporter="0" transparent="0" openable="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="8" holder="12" name="blue_can1" printedname="blue can">
        <description>High quality spray. It is blue!</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="1" container="0" supporter="0" transparent="0" openable="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="9" holder="0" name="box" printedname="box">
        <description>you heat a ticking sound inside the box!</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" transparent="0" openable="0" open="0" wearable="1" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="10" holder="18" name="door_five" printedname="door five">
        <description>door five</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="1" portable="0" container="1" supporter="0" transparent="0" openable="1" open="0" wearable="0" emittinglight="0" locked="0" lockable="1" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="11" holder="18" name="door_four" printedname="door four">
        <description>door five</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="1" portable="0" container="1" supporter="0" transparent="0" openable="1" open="0" wearable="0" emittinglight="0" locked="0" lockable="1" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="12" holder="18" name="door_one" printedname="door one">
        <description>door one</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="1" portable="0" container="1" supporter="0" transparent="0" openable="1" open="0" wearable="0" emittinglight="0" locked="0" lockable="1" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="13" holder="18" name="door_three" printedname="door three">
        <description>door 3</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="1" portable="0" container="1" supporter="0" transparent="0" openable="1" open="0" wearable="0" emittinglight="0" locked="0" lockable="1" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="14" holder="18" name="door_two" printedname="door two">
        <description>door 2</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="1" portable="0" container="1" supporter="0" transparent="0" openable="1" open="0" wearable="0" emittinglight="0" locked="0" lockable="1" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="15" holder="0" name="Airport" printedname="Airport">
        <description>You are at an airport.To the north you see a garden!</description>
        <initialdescription />
        <directions n="18" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" transparent="0" openable="0" open="0" wearable="0" emittinglight="1" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in />
          <out />
        </nogo>
        <ImageId />
      </object>
      <object id="16" holder="0" name="dummy71" printedname="Blue Cyan Can">
        <description>blue spray with cyan stripes</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="1" container="0" supporter="0" transparent="0" openable="0" open="0" wearable="1" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="17" holder="0" name="dummy72" printedname="Blue Green Can">
        <description>A blue can with green stripes!</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="1" container="0" supporter="0" transparent="0" openable="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="18" holder="0" name="garden_1" printedname="garden 1">
        <description>You are in an ancient unimportant garden!</description>
        <initialdescription />
        <directions n="20" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="20" down="255" in="20" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" openable="0" open="0" wearable="0" emittinglight="1" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <s />
          <e />
          <n />
          <up />
          <down />
          <in />
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId>w</ImageId>
      </object>
      <object id="19" holder="0" name="Garden_10" printedname="Count Dracula Gardens">
        <description>You are in the tenth garden! The place seem infested by incects!</description>
        <initialdescription>Count Dracula Gardens is a haunted place full of skeletons and blood!</initialdescription>
        <directions n="18" s="27" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="18" down="27" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="1" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <s />
          <e />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId>wsb</ImageId>
      </object>
      <object id="20" holder="0" name="Garden_2" printedname="Themiskyra Garden">
        <description>You are in Themiskyra Garden! You see some spider web!</description>
        <initialdescription>You are in Themiskyra Garden! It was the capital city of the Amazons.</initialdescription>
        <directions n="21" s="18" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="21" down="18" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="1" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in />
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId>s</ImageId>
      </object>
      <object id="21" holder="0" name="Garden_3" printedname="Kunlun Immortals Garden">
        <description>You are in Kunlun. You also see a bee hive!</description>
        <initialdescription>You are in Kunlun.A place where immortals lived according to Chinese mythology! You don't anyone alive here!</initialdescription>
        <directions n="22" s="20" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="22" down="20" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="1" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <s />
          <e />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId>b2</ImageId>
      </object>
      <object id="22" holder="0" name="Garden_4" printedname="Laistrygon Garden">
        <description>You reached the Laistrygon Garden.The place is full of giant worm holes and spider webs!</description>
        <initialdescription>You reached the Laistrygon Garden.Home to a tribe of giant cannibals that Odysseus encountered on his way back home from the Trojan War.</initialdescription>
        <directions n="23" s="21" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="23" down="21" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="1" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <s />
          <e />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId>wb</ImageId>
      </object>
      <object id="23" holder="0" name="Garden_5" printedname="Yggdrasil Garden">
        <description>You are in Yggdrasil Garden.You see many worms holes and bee hives!</description>
        <initialdescription>You are in Yggdrasil Garden.It is a big garden with an immense and central sacred tree in the middle.</initialdescription>
        <directions n="24" s="22" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="24" down="22" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="1" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <s />
          <e />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId>wb</ImageId>
      </object>
      <object id="24" holder="0" name="Garden_6" printedname="Hanging Gardens of Babylon">
        <description>You are in Hanging Gardens of Babylon.It is abandoned and full of spider webs!</description>
        <initialdescription>You are in Hanging Gardens of Babylon.According to the legend they were built by the city of Babylon.These gardens were considered to be among the Seven Wonders of the Worldbut now are abandoned and full of spider webs!</initialdescription>
        <directions n="25" s="23" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="25" down="23" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="1" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <s />
          <e />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId>sb</ImageId>
      </object>
      <object id="25" holder="0" name="Garden_7" printedname="Garden of Hesperides">
        <description>You are in Garden of Hesperides.The grass is full of holes! It must be infested with worms!</description>
        <initialdescription>You are in Garden of Hesperides, the sacred garden of Hera from where the gods got their immortality.</initialdescription>
        <directions n="26" s="24" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="26" down="24" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="1" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <s />
          <e />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId>w</ImageId>
      </object>
      <object id="26" holder="0" name="Garden_8" printedname="Atlantis Underwater Garden">
        <description>You are inside the Atlantis Underwater Garden Dome.The walls are covered with spider web!</description>
        <initialdescription>You are inside the Atlantis Underwater Garden Dome.Atlantis was the legendary (and almost archetypal) lost continent that was supposed to have sunk into the Atlantic Ocean.It is not lost anymore! </initialdescription>
        <directions n="27" s="25" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="27" down="25" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="1" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId>s</ImageId>
      </object>
      <object id="27" holder="0" name="Garden_9" printedname="Garden of Eden">
        <description>You are in Garden of Eden! You see many bee hives!</description>
        <initialdescription>You are in Garden of Eden! A paradise where humans were first created according to Abrahamic religions and resided until cast out for disobeying God.You see an apple tree! You see 5 apples in the ground. They are all bitten.</initialdescription>
        <directions n="19" s="26" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="19" down="26" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="1" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId>b2</ImageId>
      </object>
      <object id="28" holder="0" name="medal" printedname="medal">
        <description>its made of gold!</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" transparent="0" openable="0" open="0" wearable="1" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="29" holder="0" name="milk" printedname="milk">
        <description>with chocolate</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" transparent="0" openable="0" open="0" wearable="1" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="30" holder="1" name="old_half_map" printedname="old half map">
        <description>This is the map part you found on an ancient Mayan garden! It seems important. You must find the second part! It seems to be connected with the old cave inscription you found on a prehistoric garden!. The Cave of 'Cookie Man'</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="1" container="0" supporter="0" transparent="0" openable="0" open="0" wearable="1" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="31" holder="18" name="outdoor_compartment_locker" printedname="Outdoor Compartment Locker">
        <description>You see a Multi Compartment Locker.The locker is coated in ActiveCoat anti-bacterial coating, this helps protect users from harmful germs, bacteria and viruses including E-coli and MRSA. It has five numbered doors from one to five</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="1" container="0" supporter="0" transparent="0" openable="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="32" holder="0" name="red_can2" printedname="red can">
        <description>It is a red spray</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="1" container="0" supporter="0" transparent="0" openable="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="33" holder="19" name="spider10" printedname="Spider">
        <description>You see a blue spider!</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="1" portable="0" container="0" supporter="0" transparent="0" openable="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="34" holder="20" name="spider2" printedname="Female Spider">
        <description>You see a blue spider!</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="1" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="35" holder="22" name="spider4" printedname="Spider">
        <description>You see a blue spider!</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="1" portable="0" container="0" supporter="0" transparent="0" openable="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="36" holder="24" name="spider6" printedname="spider">
        <description>You see a blue spider!</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="1" portable="0" container="0" supporter="0" transparent="0" openable="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="37" holder="26" name="spider81" printedname="Blue Spider">
        <description>You see a blue spider!</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="1" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="38" holder="26" name="spider82" printedname="Red Spider">
        <description>You see a red spider!</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="1" portable="0" container="0" supporter="0" transparent="0" openable="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="39" holder="1" name="Spooky_Map_half" printedname="Spooky Map half">
        <description>This is the second part of your map. It shows the location of a haunted mansion that hols a great secret! The map also shows the location many yellow dots and of some ghosts!</description>
        <initialdescription>DEBUG THIS IS an END ITEM....</initialdescription>
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="1" container="0" supporter="0" transparent="0" openable="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="40" holder="0" name="watermelon" printedname="watermelon">
        <description>It is the ideal rewarc after all these killings!</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" transparent="0" openable="0" open="0" wearable="1" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="41" holder="18" name="worm1" printedname="Worm">
        <description>You see a worm! It is green.</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="1" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="42" holder="19" name="worm10" printedname="Worm">
        <description>You see a worm! It is green.</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="1" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="43" holder="22" name="worm4" printedname="Worm">
        <description>You see a worm! It is green.</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="1" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="44" holder="23" name="worm5" printedname="Worm">
        <description>You see a worm! It is green.</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="1" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="45" holder="25" name="worm71" printedname="Cyan Worm">
        <description>You see a worm! It is cyan.</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="1" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="46" holder="25" name="worm72" printedname="Green Worm">
        <description>You see a worm! It is green.</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="1" portable="0" container="0" supporter="0" transparent="0" openable="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="47" holder="0" name="yellow_can3" printedname="yellow can">
        <description>a yellow spray</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="1" container="0" supporter="0" transparent="0" openable="0" open="0" wearable="1" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms />
        <nogo>
          <s />
          <w />
          <ne />
          <nw />
          <e />
          <se />
          <sw />
          <n />
          <up />
          <down />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
    </objects>
    <checks>
      <check verb="n" check="check_move" />
      <check verb="s" check="check_move" />
      <check verb="e" check="check_move" />
      <check verb="w" check="check_move" />
      <check verb="u" check="check_move" />
      <check verb="d" check="check_move" />
      <check verb="ne" check="check_move" />
      <check verb="nw" check="check_move" />
      <check verb="se" check="check_move" />
      <check verb="sw" check="check_move" />
      <check verb="close" check="check_dobj_supplied" />
      <check verb="close" check="check_dobj_opnable" />
      <check verb="close" check="check_dobj_open" />
      <check verb="drink" check="check_dobj_supplied" />
      <check verb="drink" check="check_have_dobj" />
      <check verb="drop" check="check_dobj_supplied" />
      <check verb="drop" check="check_have_dobj" />
      <check verb="eat" check="check_dobj_supplied" />
      <check verb="eat" check="check_have_dobj" />
      <check verb="enter" check="check_dobj_supplied" />
      <check verb="enter" check="check_see_dobj" />
      <check verb="enter" check="check_move" />
      <check verb="out" check="check_move" />
      <check verb="examine" check="check_dobj_supplied" />
      <check verb="examine" check="check_see_dobj" />
      <check verb="get" check="check_dobj_supplied" />
      <check verb="get" check="check_see_dobj" />
      <check verb="get" check="check_dont_have_dobj" />
      <check verb="get" check="check_dobj_portable" />
      <check verb="get" check="check_weight" />
      <check verb="kill" check="check_dobj_supplied" />
      <check verb="kill" check="check_see_dobj" />
      <check verb="light" check="check_dobj_supplied" />
      <check verb="light" check="check_have_dobj" />
      <check verb="light" check="check_see_dobj" />
      <check verb="open" check="check_dobj_supplied" />
      <check verb="open" check="check_see_dobj" />
      <check verb="open" check="check_dobj_opnable" />
      <check verb="open" check="check_dobj_unlocked" />
      <check verb="put" check="check_dobj_supplied" />
      <check verb="put" check="check_prep_supplied" />
      <check verb="put" check="check_iobj_supplied" />
      <check verb="put" check="check_not_self_or_child" />
      <check verb="put" check="check_have_dobj" />
      <check verb="put" check="check_see_iobj" />
      <check verb="put" check="check_put" />
      <check verb="talk to" check="check_dobj_supplied" />
      <check verb="talk to" check="check_see_dobj" />
      <check verb="turn on" check="check_dobj_supplied" />
      <check verb="turn on" check="check_see_dobj" />
      <check verb="lock" check="check_dobj_supplied" />
      <check verb="lock" check="check_see_dobj" />
      <check verb="lock" check="check_dobj_lockable" />
      <check verb="unlock" check="check_dobj_supplied" />
      <check verb="unlock" check="check_see_dobj" />
      <check verb="unlock" check="check_dobj_lockable" />
      <check verb="look in" check="check_dobj_supplied" />
      <check verb="look in" check="check_see_dobj" />
      <check verb="wear" check="check_see_dobj" />
      <check verb="use" check="check_have_dobj" />
      <check verb="wear" check="check_have_dobj" />
      <check verb="wear" check="check_dobj_wearable" />
      <check verb="give" check="check_dobj_supplied" />
      <check verb="give" check="check_have_dobj" />
      <check verb="give" check="check_iobj_supplied" />
      <check verb="give" check="check_see_iobj" />
      <check verb="push" check="check_dobj_supplied" />
      <check verb="push" check="check_see_dobj" />
      <check verb="read" check="check_dobj_supplied" />
      <check verb="read" check="check_see_dobj" />
      <check verb="n" check="init_gardens" />
      <check verb="up" check="init_gardens" />
      <check verb="n" check="check1_worm1" />
      <check verb="up" check="check1_worm1" />
      <check verb="down" check="check1_worm1" />
      <check verb="s" check="check2_spider2" />
      <check verb="up" check="check2_spider2" />
      <check verb="down" check="check3_bee3" />
      <check verb="up" check="check3_bee3" />
      <check verb="down" check="check4_worm4" />
      <check verb="up" check="check4_worm4" />
      <check verb="down" check="check4_spider4" />
      <check verb="up" check="check4_spider4" />
      <check verb="down" check="check5_worm5" />
      <check verb="up" check="check5_worm5" />
      <check verb="down" check="check5_bee5" />
      <check verb="up" check="check5_bee5" />
      <check verb="down" check="check6_bee6" />
      <check verb="up" check="check6_bee6" />
      <check verb="down" check="check6_spider6" />
      <check verb="up" check="check6_spider6" />
      <check verb="up" check="check7_worm71" />
      <check verb="down" check="check7_worm71" />
      <check verb="up" check="check7_worm72" />
      <check verb="down" check="check7_worm72" />
      <check verb="down" check="check8_spider81" />
      <check verb="up" check="check8_spider81" />
      <check verb="down" check="check9_bee91" />
      <check verb="up" check="check9_bee91" />
      <check verb="down" check="check9_bee92" />
      <check verb="up" check="check9_bee92" />
      <check verb="down" check="check10_worm10" />
      <check verb="up" check="check10_worm10" />
      <check verb="down" check="check10_spider10" />
      <check verb="up" check="check10_spider10" />
      <check verb="down" check="check10_bee10" />
      <check verb="up" check="check10_bee10" />
      <check verb="take" check="check_hold_one_spray" />
      <check verb="get" check="check_hold_one_spray" />
      <check verb="grab" check="check_hold_one_spray" />
      <check verb="pick up" check="check_hold_one_spray" />
    </checks>
    <sentences>
      <sentence verb="wear" do="*" prep="" io="" type="before" sub="get_portable" />
      <sentence verb="take" do="player" prep="" io="" type="instead" sub="not_possible" />
      <sentence verb="kill" do="player" prep="" io="" type="instead" sub="kill_self" />
      <sentence verb="kill" do="*" prep="" io="" type="instead" sub="default_kill" />
      <sentence verb="talk to" do="player" prep="" io="" type="instead" sub="talk_to_self" />
      <sentence verb="talk to" do="*" prep="" io="" type="instead" sub="default_talk" />
      <sentence verb="listen" do="" prep="" io="" type="instead" sub="listen" />
      <sentence verb="wait" do="" prep="" io="" type="instead" sub="wait" />
      <sentence verb="yell" do="" prep="" io="" type="instead" sub="yell" />
      <sentence verb="jump" do="" prep="" io="" type="instead" sub="jump" />
      <sentence verb="eat" do="*" prep="" io="" type="instead" sub="default_eat" />
      <sentence verb="drink" do="*" prep="" io="" type="instead" sub="default_drink" />
      <sentence verb="smell" do="*" prep="" io="" type="instead" sub="smell" />
      <sentence verb="take" do="*" prep="" io="" type="after" sub="report_take" />
      <sentence verb="drop" do="*" prep="" io="" type="after" sub="report_drop" />
      <sentence verb="close" do="*" prep="" io="" type="after" sub="report_closed" />
      <sentence verb="wear" do="*" prep="" io="" type="after" sub="report_wear" />
      <sentence verb="kill" do="Worm1" prep="with" io="blue_can1" type="instead" sub="kill_worm1" />
      <sentence verb="use" do="blue_can1" prep="on" io="Worm1" type="instead" sub="useon_worm1" />
      <sentence verb="kill" do="Spider2" prep="with" io="red_can2" type="instead" sub="kill_spider2" />
      <sentence verb="use" do="red_can2" prep="on" io="Spider2" type="instead" sub="useon_spider2" />
      <sentence verb="kill" do="Bee3" prep="with" io="yellow_can3" type="instead" sub="kill_bee3" />
      <sentence verb="use" do="yellow_can3" prep="on" io="Bee3" type="instead" sub="useon_bee3" />
      <sentence verb="kill" do="Worm4" prep="with" io="blue_can1" type="instead" sub="kill_worm4" />
      <sentence verb="use" do="blue_can1" prep="on" io="Worm4" type="instead" sub="useon_worm4" />
      <sentence verb="kill" do="spider4" prep="with" io="red_can2" type="instead" sub="kill_spider4" />
      <sentence verb="use" do="red_can2" prep="on" io="spider4" type="instead" sub="useon_spider4" />
      <sentence verb="kill" do="Worm5" prep="with" io="blue_can1" type="instead" sub="kill_worm5" />
      <sentence verb="use" do="blue_can1" prep="on" io="Worm5" type="instead" sub="useon_worm5" />
      <sentence verb="kill" do="bee5" prep="with" io="yellow_can3" type="instead" sub="kill_bee5" />
      <sentence verb="use" do="yellow_can3" prep="on" io="bee5" type="instead" sub="useon_bee5" />
      <sentence verb="kill" do="bee6" prep="with" io="yellow_can3" type="instead" sub="kill_bee6" />
      <sentence verb="use" do="yellow_can3" prep="on" io="bee6" type="instead" sub="useon_bee6" />
      <sentence verb="kill" do="spider6" prep="with" io="red_can2" type="instead" sub="kill_spider6" />
      <sentence verb="use" do="red_can2" prep="on" io="spider6" type="instead" sub="useon_spider6" />
      <sentence verb="kill" do="Worm71" prep="with" io="blue_can1" type="instead" sub="kill_worm71" />
      <sentence verb="use" do="blue_can1" prep="on" io="Worm71" type="instead" sub="useon_worm71" />
      <sentence verb="kill" do="Worm72" prep="with" io="blue_can1" type="instead" sub="kill_worm72" />
      <sentence verb="use" do="blue_can1" prep="on" io="Worm72" type="instead" sub="useon_worm72" />
      <sentence verb="kill" do="Spider81" prep="with" io="red_can2" type="instead" sub="kill_spider81" />
      <sentence verb="use" do="red_can2" prep="on" io="Spider81" type="instead" sub="useon_spider81" />
      <sentence verb="kill" do="Spider82" prep="with" io="red_can2" type="instead" sub="kill_spider82" />
      <sentence verb="use" do="red_can2" prep="on" io="Spider82" type="instead" sub="useon_spider82" />
      <sentence verb="kill" do="Bee91" prep="with" io="yellow_can3" type="instead" sub="kill_bee91" />
      <sentence verb="use" do="yellow_can3" prep="on" io="Bee91" type="instead" sub="useon_bee91" />
      <sentence verb="kill" do="Bee92" prep="with" io="yellow_can3" type="instead" sub="kill_bee92" />
      <sentence verb="use" do="yellow_can3" prep="on" io="Bee92" type="instead" sub="useon_bee92" />
      <sentence verb="kill" do="Worm10" prep="with" io="blue_can1" type="instead" sub="kill_worm10" />
      <sentence verb="use" do="blue_can1" prep="on" io="Worm10" type="instead" sub="useon_worm10" />
      <sentence verb="kill" do="spider10" prep="with" io="red_can2" type="instead" sub="kill_spider10" />
      <sentence verb="use" do="red_can2" prep="on" io="spider10" type="instead" sub="useon_spider10" />
      <sentence verb="kill" do="bee10" prep="with" io="yellow_can3" type="instead" sub="kill_bee10" />
      <sentence verb="use" do="yellow_can3" prep="on" io="bee10" type="instead" sub="useon_bee10" />
      <sentence verb="get" do="blue_can1" prep="" io="" type="instead" sub="get_blue_can" />
      <sentence verb="drop" do="blue_can1" prep="" io="" type="instead" sub="drop_blue_can" />
      <sentence verb="get" do="red_can2" prep="" io="" type="instead" sub="get_red_can" />
      <sentence verb="drop" do="red_can2" prep="" io="" type="instead" sub="drop_red_can" />
      <sentence verb="get" do="yellow_can3" prep="" io="" type="instead" sub="get_yellow_can" />
      <sentence verb="drop" do="yellow_can3" prep="" io="" type="instead" sub="drop_yellow_can" />
      <sentence verb="cheateden" do="" prep="" io="" type="instead" sub="cheat_eden" />
    </sentences>
    <routines>
      <routine name="game_start">//put any startup code or messages here
println("Doctor Pssst was a famous gardener!");
println(" He liked taking care of gardens. Many royal families trusted him to handle all their gardening issues! ");
println("This is the story of the gardens of the Count Dracula Castle!!!");</routine>
      <routine name="reset">//put reset code here
</routine>
      <routine name="not_possible">if (dobj == player) { println("Not physically possible.");  } </routine>
      <routine name="get_portable">if (dobj.portable == 1) { if (dobj.holder != player) { println("(Taken)"); dobj.holder = player;}  } </routine>
      <routine name="kill_self">println("If you are experiencing suicidal thoughts you should seek psychiatric help.");</routine>
      <routine name="default_kill">println("Perhaps you should count to 3 and calm down.");</routine>
      <routine name="kill_player">println("***YOU HAVE DIED***.");
reset();
</routine>
      <routine name="talk_to_self">println("Talking to yourself is a sign of impending mental collapse.");</routine>
      <routine name="default_talk">println("That fails to produce an exciting conversation.");</routine>
      <routine name="listen">println("You hear nothing unexpected.");</routine>
      <routine name="smell">println("You smell nothing unexpected.");</routine>
      <routine name="wait">println("Time passes...");</routine>
      <routine name="yell">println("AAAAAAAAAAAAARRRRGGGGGG!");</routine>
      <routine name="jump">println("WHEEEEEE!");</routine>
      <routine name="default_eat">println("That's not part of a healthy diet.");</routine>
      <routine name="default_drink">println("You can't drink that.");</routine>
      <routine name="quit_sub">println("[Note: you can't quit the test client]");</routine>
      <routine name="report_take">println("Taken.");</routine>
      <routine name="report_drop">println("Dropped.");</routine>
      <routine name="report_closed">println("Closed.");</routine>
      <routine name="report_wear">print("You put on the ");
printname(dobj);
println(".");</routine>
      <routine name="kill_worm1">println("You kill Worm ");
     worm1.location= offscreen;
     //blue_can1.holder= offscreen;
medal.location= player; 
    worm_count=0;
  </routine>
      <routine name="useon_worm1">println("You passed Worm obstacle ");
     worm1.location= offscreen;
     //blue_can1.holder= offscreen;
medal.location= player;
worm_count=0;
   </routine>
      <routine name="kill_spider2">println("You kill the female Spider ");
     spider2.location= offscreen;
     spider_count=0;
milk.location= player;   </routine>
      <routine name="useon_spider2">println("You passed female Spider obstacle ");
     spider2.location= offscreen;
     spider_count=0;
milk.location= player;   </routine>
      <routine name="kill_bee3">println("You kill Bee ");
     bee3.location= offscreen;
box.location= player;
bee_count=0;
   </routine>
      <routine name="useon_bee3">println("You passed Bee obstacle ");
     bee3.location= offscreen;
box.location= player; 
bee_count=0;
  </routine>
      <routine name="kill_worm4">println("You kill Worm ");
     worm4.location= offscreen;
watermelon.location= player; 
worm_count=0;
  </routine>
      <routine name="useon_worm4">println("You passed Worm obstacle ");
     worm4.location= offscreen;
watermelon.location= player; 
worm_count=0;
  </routine>
      <routine name="kill_spider4">println("You kill spider ");
     spider4.location= offscreen;
watermelon.location= player;  
spider_count=0;
 </routine>
      <routine name="useon_spider4">println("You passed spider obstacle ");
     spider4.location= offscreen;
watermelon.location= player; 
spider_count=0;
  </routine>
      <routine name="kill_worm5">println("You kill Worm ");
     worm5.location= offscreen;
     worm_count=0;
   </routine>
      <routine name="useon_worm5">println("You passed Worm obstacle ");
     worm5.location= offscreen;
     
     worm_count=0;
   </routine>
      <routine name="kill_bee5">println("You kill Bee ");
     bee5.location= offscreen;
     bee_count=0;
   </routine>
      <routine name="useon_bee5">println("You passed Bee obstacle ");
     bee5.location= offscreen;
     bee_count=0;
   </routine>
      <routine name="kill_bee6">println("You kill Bee ");
     bee6.location= offscreen;
     bee_count=0;
   </routine>
      <routine name="useon_bee6">println("You passed bee obstacle ");
     bee6.location= offscreen;
     bee_count=0;

   </routine>
      <routine name="kill_spider6">println("You kill Spider ");
     spider6.location= offscreen;
     spider_count=0;
   </routine>
      <routine name="useon_spider6">println("You passed spider obstacle ");
     spider6.location= offscreen;
     spider_count=0;

   </routine>
      <routine name="kill_worm71">println("You kill Cyan Worm ");
     worm71.location= offscreen;
     if(worm72.location==offscreen)worm_count=0; //check second worm
   </routine>
      <routine name="useon_worm71">println("You passed Cyan Worm obstacle ");
     worm71.location= offscreen;
     if(worm72.location==offscreen)worm_count=0; //check second worm
   </routine>
      <routine name="kill_worm72">println("You kill Green Worm ");
     worm72.location= offscreen;
     if(worm71.location==offscreen)worm_count=0; //check second worm
   </routine>
      <routine name="useon_worm72">println("You passed Green Worm obstacle ");
     worm72.location= offscreen;
     if(worm71.location==offscreen)worm_count=0; //check second worm
   </routine>
      <routine name="kill_spider81">println("You kill Spider ");
     spider81.location= offscreen;
     if(spider82.location== offscreen)spider_count=0;
   </routine>
      <routine name="useon_spider81">println("You passed Spider obstacle ");
     spider81.location= offscreen;
     if(spider82.location== offscreen)spider_count=0;
   </routine>
      <routine name="kill_spider82">println("You kill Spider ");
     spider82.location= offscreen;
     if(spider81.location== offscreen)spider_count=0;
   </routine>
      <routine name="useon_spider82">println("You passed Spider obstacle ");
     spider82.location= offscreen;
     if(spider81.location== offscreen)spider_count=0;
   </routine>
      <routine name="kill_bee91">println("You kill Female Bee ");
     bee91.location= offscreen;
     if (bee92.location== offscreen)bee_count=0;
   </routine>
      <routine name="useon_bee91">println("You passed Female Bee obstacle ");
     bee91.location= offscreen;
     if (bee92.location== offscreen)bee_count=0;
   </routine>
      <routine name="kill_bee92">println("You kill Male Bee ");
     bee92.location= offscreen;
     if (bee91.location== offscreen)bee_count=0;
   </routine>
      <routine name="useon_bee92">println("You passed Male Bee obstacle ");
     bee92.location= offscreen;
     if (bee91.location== offscreen)bee_count=0;
   </routine>
      <routine name="kill_worm10">println("You kill Worm ");
     worm10.location= offscreen;
     worm_count=0;
   </routine>
      <routine name="useon_worm10">println("You passed Worm obstacle ");
     worm10.location= offscreen;
     worm_count=0;
   </routine>
      <routine name="kill_spider10">println("You kill Spider ");
     spider10.location= offscreen;
     spider_count=0;
   </routine>
      <routine name="useon_spider10">println("You passed Spider obstacle ");
     spider10.location= offscreen;
     spider_count=0;
   </routine>
      <routine name="kill_bee10">println("You kill Bee ");
     bee10.location= offscreen;
     bee_count=0;
   </routine>
      <routine name="useon_bee10">println("You passed Bee obstacle ");
     bee10.location= offscreen;
     bee_count=0;
   </routine>
      <routine name="check_hold_one_spray">//println("Check Hold one Spray");</routine>
      <routine name="get_blue_can">//println("=========DEBUG get blue can=========");
if(carry_can==0){
blue_can1.holder=player;
carry_can=1;
} else {println ("You already carrying another can. Drop your can and then get the new!");}
</routine>
      <routine name="drop_blue_can">//println("=========DEBUG DROP blue can=========");
if(blue_can1.holder==player){
blue_can1.holder=player.location;
carry_can=0;
}
</routine>
      <routine name="get_red_can">//println("=========DEBUG get red can=========");
if(carry_can==0){
red_can2.holder=player;
carry_can=1;
} else {println ("You already carrying another can. Drop your can and then get the new!");}
</routine>
      <routine name="drop_red_can">//println("=========DEBUG DROP red can=========");
if(red_can2.holder==player){
red_can2.holder=player.location;
carry_can=0;
}
</routine>
      <routine name="get_yellow_can">//println("=========DEBUG get yellow can=========");
if(carry_can==0){
yellow_can3.holder=player;
carry_can=1;
} else {println ("You already carrying another can. Drop your can and then get the new!");}
</routine>
      <routine name="drop_yellow_can">//println("=========DEBUG DROP yellow can=========");
if(yellow_can3.holder==player){
yellow_can3.holder=player.location;
carry_can=0;
}
</routine>
      <routine name="init_gardens">if(debug)println("DEBUGGGGG init_garden_cans #############");
if(gard1_first_time) 
{
if(debug)println("DEBUG GArden 1 init_gardens ") ;


outdoor_compartment_locker.location=garden_1;
door_one.location=garden_1;
door_two.location=garden_1;
door_three.location=garden_1;
door_four.location=garden_1;
door_five.location=garden_1;


blue_can1.holder=door_one;
red_can2.holder=offscreen;
yellow_can3.holder=offscreen;
carry_can=0;
gard1_first_time=0;
worm_count=0;
spider_count=0;
bee_count=0;
}


if(garden_2==player.location &amp;&amp; gard2_first_time) 
{
if(debug)println("DEBUG GArden 2 init_gardens ") ;

outdoor_compartment_locker.location=garden_2;
door_one.location=garden_2;
door_two.location=garden_2;
door_three.location=garden_2;
door_four.location=garden_2;
door_five.location=garden_2;



blue_can1.holder=offscreen;
red_can2.holder=door_three;
yellow_can3.holder=offscreen;
carry_can=0;
gard2_first_time=0;
worm_count=0;
spider_count=0;
bee_count=0;
}


if(garden_3==player.location &amp;&amp; gard3_first_time) 
{
if(debug)println("DEBUG GArden 3 init_gardens ") ;
outdoor_compartment_locker.location=garden_3;
door_one.location=garden_3;
door_two.location=garden_3;
door_three.location=garden_3;
door_four.location=garden_3;
door_five.location=garden_3;

blue_can1.holder=offscreen;
red_can2.holder=offscreen;
yellow_can3.holder=door_four;
carry_can=0;
gard3_first_time=0;
worm_count=0;
spider_count=0;
bee_count=0;
}

if(garden_4==player.location &amp;&amp; gard4_first_time) 
{
if(debug)println("DEBUG GArden 4 init_gardens ") ;
outdoor_compartment_locker.location=garden_4;
door_one.location=garden_4;
door_two.location=garden_4;
door_three.location=garden_4;
door_four.location=garden_4;
door_five.location=garden_4;

blue_can1.holder=door_two;
red_can2.holder=door_one;
yellow_can3.holder=offscreen;
carry_can=0;
gard4_first_time=0;
worm_count=0;
spider_count=0;
bee_count=0;
}

if(garden_5==player.location &amp;&amp; gard5_first_time) 
{
outdoor_compartment_locker.location=garden_5;
door_one.location=garden_5;
door_two.location=garden_5;
door_three.location=garden_5;
door_four.location=garden_5;
door_five.location=garden_5;

blue_can1.holder=door_three;
red_can2.holder=offscreen;
yellow_can3.holder=door_five;
carry_can=0;
gard5_first_time=0;
worm_count=0;
spider_count=0;
bee_count=0;
}

if(garden_6==player.location &amp;&amp; gard6_first_time) 
{
outdoor_compartment_locker.location=garden_6;
door_one.location=garden_6;
door_two.location=garden_6;
door_three.location=garden_6;
door_four.location=garden_6;
door_five.location=garden_6;

blue_can1.holder=offscreen;
red_can2.holder=door_four;
yellow_can3.holder=door_two;
carry_can=0;
gard6_first_time=0;
worm_count=0;
spider_count=0;
bee_count=0;
}
  



if(garden_7==player.location &amp;&amp; gard7_first_time) 
{ //two worms
outdoor_compartment_locker.location=garden_7;
door_one.location=garden_7;
door_two.location=garden_7;
door_three.location=garden_7;
door_four.location=garden_7;
door_five.location=garden_7;


blue_can1.holder=door_four.location;
red_can2.holder=offscreen;
yellow_can3.holder=offscreen;
carry_can=0;
gard7_first_time=0;
worm_count=0;
spider_count=0;
bee_count=0;
}

if(garden_8==player.location &amp;&amp; gard8_first_time) 
{ //2 spiders
outdoor_compartment_locker.location=garden_8;
door_one.location=garden_8;
door_two.location=garden_8;
door_three.location=garden_8;
door_four.location=garden_8;
door_five.location=garden_8;

blue_can1.holder=offscreen;
red_can2.holder=door_two.location;
yellow_can3.holder=offscreen;
carry_can=0;
gard8_first_time=0;
worm_count=0;
spider_count=0;
bee_count=0;
}

if(garden_9==player.location &amp;&amp; gard9_first_time) 
{ //2 bees
outdoor_compartment_locker.location=garden_9;
door_one.location=garden_9;
door_two.location=garden_9;
door_three.location=garden_9;
door_four.location=garden_9;
door_five.location=garden_9;


blue_can1.holder=offscreen;
red_can2.holder=offscreen;
yellow_can3.holder=door_five.location;
carry_can=0;
gard9_first_time=0;
worm_count=0;
spider_count=0;
bee_count=0;
}


if(garden_10==player.location &amp;&amp; gard10_first_time) 
{
outdoor_compartment_locker.location=garden_10;
door_one.location=garden_10;
door_two.location=garden_10;
door_three.location=garden_10;
door_four.location=garden_10;
door_five.location=garden_10;

blue_can1.holder=door_three.location;
red_can2.holder=door_five.location;
yellow_can3.holder=door_one.location;
carry_can=0;
gard10_first_time=0;
worm_count=0;
spider_count=0;
bee_count=0;
}</routine>
      <routine name="gfx_draw">filename=000;


filename=worm_count+10*spider_count+100*bee_count;

//printvar(filename);

if(filename==    1) show_image(w);//
if(filename==  10) show_image(s);//
if(filename==100) show_image(b2);
if(filename==101) show_image(wb);//
if(filename==110) show_image(sb);//
if(filename==  11) show_image(ws);//
if(filename==111) show_image(wsb);//

</routine>
      <routine name="cheat_eden">
  player.holder=garden_10;
  blue_can1.holder=player;
  red_can2.holder=garden_10;
  yellow_can3.holder=garden_10;

</routine>
    </routines>
    <CheckFunctions>
      <UserCheck name="check1_worm1">if ( worm1.location==player.location )
    {
         println("Worm blocks that exit! ");
         stop();
    }
    </UserCheck>
      <UserCheck name="check2_spider2">if ( spider2.location==player.location )
    {
         println("Spider blocks that exit! ");
         stop();
    }
    </UserCheck>
      <UserCheck name="check3_bee3">if ( bee3.location==player.location )
    {
         println("Bee blocks that exit! ");
         stop();
    }
    </UserCheck>
      <UserCheck name="check4_worm4">if ( worm4.location==player.location )
    {
         println("Worm blocks that exit! ");
         stop();
    }
    </UserCheck>
      <UserCheck name="check4_spider4">if ( spider4.location==player.location )
    {
         println("Spider blocks that exit! ");
         stop();
    }
    </UserCheck>
      <UserCheck name="check5_worm5">if ( worm5.location==player.location )
    {
         println("Worm blocks that exit! ");
         stop();
    }
    </UserCheck>
      <UserCheck name="check5_bee5">if ( bee5.location==player.location )
    {
         println("A bee blocks that exit! ");
         stop();
    }
     </UserCheck>
      <UserCheck name="check6_bee6">if ( bee6.location==player.location )
    {
         println("A bee blocks that exit! ");
         stop();
    }
     </UserCheck>
      <UserCheck name="check6_spider6">if ( spider6.location==player.location )
    {
         println("A spider blocks that exit! ");
         stop();
    }


    </UserCheck>
      <UserCheck name="check7_worm71">if ( worm71.location==player.location )
    {
         println("A Cyan Worm blocks that exit! ");
         stop();
    }
    </UserCheck>
      <UserCheck name="check7_worm72">if ( worm72.location==player.location )
    {
         println("A Green Worm blocks that exit! ");
         stop();
    }
    </UserCheck>
      <UserCheck name="check8_spider81">if ( spider81.location==player.location )
    {
         println("Spider blocks that exit! ");
         stop();
    }
    </UserCheck>
      <UserCheck name="check9_bee91">if ( bee91.location==player.location )
    {
         println("Female Bee blocks that exit! ");
         stop();
    }
    </UserCheck>
      <UserCheck name="check9_bee92">if ( bee92.location==player.location )
    {
         println("male Bee blocks that exit! ");
         stop();
    }
    </UserCheck>
      <UserCheck name="check10_worm10">if ( worm10.location==player.location )
    {
         println("Worm blocks that exit! ");
         stop();
    }
    </UserCheck>
      <UserCheck name="check10_spider10">if ( spider10.location==player.location )
    {
         println("Spider blocks that exit! ");
         stop();
    }
    </UserCheck>
      <UserCheck name="check10_bee10">if ( bee10.location==player.location )
    {
         println("A bee blocks that exit! ");
         stop();
    }
    </UserCheck>
      <UserCheck name="check_hold_one_spray" />
      <UserCheck name="init_gardens" />
    </CheckFunctions>
    <events>
      <event name="same_garden_worm1">
if(worm1.location==player.location) 
{

println("You see Worm in the garden! it is green ") ;
worm_count=1;  

}
//println("worm_count=");
//println(worm_count);</event>
      <event name="same_garden_spider2">if(spider2.location==player.location){
 println("You see a spider in the garden! ") ;
spider_count=1;
//show_image(010);
}
  </event>
      <event name="same_garden_bee3">if(bee3.location==player.location)
{
 println("You see a bee in the garden!") ;
bee_count=1;

}
  </event>
      <event name="same_garden_worm4">if(worm4.location==player.location)
{ println("You see a worm in the garden!") ;
worm_count=1;
}
  </event>
      <event name="same_garden_spider4">if(spider4.location==player.location) {

println("You see a spider in the garden!") ;

spider_count=1;
}
  </event>
      <event name="same_garden_worm5">if(worm5.location==player.location) 
{
println("You see a worm in the garden!  ") ;
worm_count=1;
}
  </event>
      <event name="same_garden_bee5">if(bee5.location==player.location) 
{
println("You see a bee in the garden!  ") ;
bee_count=1;
}  </event>
      <event name="same_garden_bee6">if(bee6.location==player.location) 
{
println("You see a bee in the garden!") ;
bee_count=1;
}
  </event>
      <event name="same_garden_spider6">if(spider6.location==player.location) 
{
println("You see a spider in the garden!") ;
spider_count=1;
}  </event>
      <event name="same_garden_worm71">if(worm71.location==player.location) 
{
println("You see a cyan worm in the garden!  ") ;
worm_count=1;
}  </event>
      <event name="same_garden_worm72">if(worm72.location==player.location) 
{

println("You see a green worm in the garden!  ") ;
worm_count=1;
}  </event>
      <event name="same_garden_spider81">if(spider81.location==player.location)
{
 println("You see a Spider in the garden!  ") ;
spider_count=1;
}
  </event>
      <event name="same_garden_spider82">if(spider82.location==player.location) 
{
println("You see a Spider in the garden!  ") ;
spider_count=1;
}
  </event>
      <event name="same_garden_bee91">if(bee91.location==player.location) 
{
println("You see a Female Bee in the garden!  ") ;
bee_count=1;
}  </event>
      <event name="same_garden_bee92">if(bee92.location==player.location)
{
 println("You see a Male Bee in the garden!  ") ;
bee_count=1;
}
  </event>
      <event name="same_garden_worm10">if(worm10.location==player.location)
{
 println("You see a Worm in the garden!  ") ;

worm_count=1;
}
  </event>
      <event name="same_garden_spider10">if(spider10.location==player.location) println("You see a Spider in the garden!  ") ;  </event>
      <event name="same_garden_bee10">if(bee10.location==player.location) 
{
println("You see a Bee in the garden!  ") ;
bee_count=1;
}
  </event>
      <event name="win_condition_worm10">if(worm10.location==offscreen) 
{
println("You killed Worm!!! You WON!") ;
if(win_cont-110==0 ||win_cont-100==0 || win_cont-10==0 || win_cont==0 ) win_cont=win_cont+1;
}</event>
      <event name="win_condition_spider10">if(spider10.location==offscreen) 
{

println("You killed Spider!!! You WON!") ;
if(win_cont-101==0 ||win_cont-100==0 || win_cont-1==0 || win_cont==0 ) win_cont=win_cont+10;

}</event>
      <event name="win_condition_bee10">if(bee10.location==offscreen)
{
 println("You killed Bee!!! You WON!") ;
if(win_cont-11==0 ||win_cont-1==0 || win_cont-10==0 || win_cont==0 ) win_cont=win_cont+100;
}</event>
      <event name="check_only_one_can" />
      <event name="init_garden_cans">//call funtion
init_gardens();</event>
      <event name="show_gfx">
//filename=000;


filename=worm_count+10*spider_count+100*bee_count;

//printvar(filename);

//if(filename==    1) show_image(w);//
//if(filename==  10) show_image(s);//
//if(filename==100) show_image(b2);
//if(filename==101) show_image(wb);//
//if(filename==110) show_image(sb);//
//if(filename==  11) show_image(ws);//
//if(filename==111) show_image(wsb);//

</event>
      <event name="win_condition_all">if(win_cont==111)
{
println("TOTAL WIN!!!");

}</event>
    </events>
    <variables>
      <builtin>
        <var name="dobj" addr="dobjId" value="0" />
        <var name="iobj" addr="iobjId" value="0" />
        <var name="score" addr="score" value="0" />
        <var name="moves" addr="moves" value="0" />
        <var name="health" addr="health" value="100" />
        <var name="turnsWithoutLight" addr="turnsWithoutLight" value="0" />
        <var name="gameOver" addr="gameOver" value="0" />
        <var name="answer" addr="answer" value="0" />
        <var name="maxWeight" addr="maxWeight" value="10" />
        <var name="invWeight" addr="invWeight" value="0" />
        <var name="couldSee" addr="couldSee" value="255" />
        <var name="canSee" addr="canSee" value="1" />
        <var name="iAnswer" addr="iAnswer" value="0" />
        <var name="itId" addr="itId" value="255" />
      </builtin>
      <user>
        <var name="carry_can" addr="Lantern" value="0" />
        <var name="gard1_first_time" addr="Lantern" value="1" />
        <var name="gard2_first_time" addr="Lantern" value="1" />
        <var name="gard3_first_time" addr="Lantern" value="1" />
        <var name="gard4_first_time" addr="Lantern" value="1" />
        <var name="gard5_first_time" addr="Lantern" value="1" />
        <var name="gard6_first_time" addr="Lantern" value="1" />
        <var name="gard7_first_time" addr="Lantern" value="1" />
        <var name="gard8_first_time" addr="Lantern" value="1" />
        <var name="gard9_first_time" addr="Lantern" value="1" />
        <var name="gard10_first_time" addr="Lantern" value="1" />
        <var name="worm_count" addr="Lantern" value="0" />
        <var name="spider_count" addr="Lantern" value="0" />
        <var name="bee_count" addr="Lantern" value="0" />
        <var name="filename" addr="Lantern" value="0" />
        <var name="debug" addr="Lantern" value="0" />
        <var name="win_cont" addr="Lantern" value="0" />
      </user>
    </variables>
    <Arrays />
    <walkthrough>n,
open door one , get blue can,kill worm with blue can,up,
open door three ,get red can, kill spider with red can,up,
open door four ,get yellow can, kill bee with yellow can,up,

lev4,open door two ,get blue can,kill worm with blue can,open door five ,drop blue can,get red can,kill spider with red can,up,
lev5,open door three ,get yellow can, kill bee with yellow can,open door three ,drop yellow can,get blue can,kill worm with blue can,up,

lev6,open door two ,get yellow can, kill bee with yellow can,open door four ,drop yellow can,get red can, kill spider with red can,up,

lev7,open door four ,get blue can,kill cyan worm with blue can,kill green worm with blue can,up,

lev8,open door two ,get red can, kill red spider with red can,kill blue spider with red can,up,

lev9,open door five ,get yellow can, kill female bee with yellow can,kill male bee with yellow can,up,

lev10,open door three ,get blue can,kill worm with blue can,open door five ,drop blue can,get red can,kill spider with red can,open door one ,drop red can,get yellow can, kill bee with yellow can</walkthrough>
    <BuildSettings>
      <SpectrumBorder>0</SpectrumBorder>
      <SpectrumPen>7</SpectrumPen>
      <SpectrumPaper>0</SpectrumPaper>
      <SpectrumFont />
      <BrightPalette>true</BrightPalette>
      <EnableGraphics>true</EnableGraphics>
      <C64LoadScreen />
      <CPMPostBuildScript />
      <C64Border>0</C64Border>
      <C64BG>2</C64BG>
      <C64FG>3</C64FG>
      <StatusLine>true</StatusLine>
    </BuildSettings>
    <StringDefs>
      <Strings>
        <StringDef>
          <StringName>LeadingA</StringName>
          <Z80name>leadinga</Z80name>
          <SF02Name>leadingA</SF02Name>
          <Value>A </Value>
        </StringDef>
        <StringDef>
          <StringName>The</StringName>
          <Z80name>the</Z80name>
          <SF02Name>the</SF02Name>
          <Value>The </Value>
        </StringDef>
        <StringDef>
          <StringName>Pardon</StringName>
          <Z80name>pardonstr</Z80name>
          <SF02Name>pardon</SF02Name>
          <Value>Pardon?</Value>
        </StringDef>
        <StringDef>
          <StringName>DontUnderstand</StringName>
          <Z80name>confused</Z80name>
          <SF02Name>confused</SF02Name>
          <Value>I don't follow you.</Value>
        </StringDef>
        <StringDef>
          <StringName>Done</StringName>
          <Z80name>done</Z80name>
          <SF02Name>done</SF02Name>
          <Value>Done.</Value>
        </StringDef>
        <StringDef>
          <StringName>Is</StringName>
          <Z80name>is</Z80name>
          <SF02Name>is</SF02Name>
          <Value> is...</Value>
        </StringDef>
        <StringDef>
          <StringName>InThe</StringName>
          <Z80name>inthe </Z80name>
          <SF02Name>inthe </SF02Name>
          <Value>In the </Value>
        </StringDef>
        <StringDef>
          <StringName>Onthe</StringName>
          <Z80name>onthe</Z80name>
          <SF02Name>onthe</SF02Name>
          <Value>On the </Value>
        </StringDef>
        <StringDef>
          <StringName>NotOpenable</StringName>
          <Z80name>notopenable</Z80name>
          <SF02Name>notOpenable</SF02Name>
          <Value>That's not openable.</Value>
        </StringDef>
        <StringDef>
          <StringName>NotCloseable</StringName>
          <Z80name>notcloseable</Z80name>
          <SF02Name>notcloseable</SF02Name>
          <Value>That's not closeable.</Value>
        </StringDef>
        <StringDef>
          <StringName>AlreadyOpen</StringName>
          <Z80name>alreadyopen</Z80name>
          <SF02Name>alreadyOpen</SF02Name>
          <Value>It's already open.</Value>
        </StringDef>
        <StringDef>
          <StringName>AlreadyClosed</StringName>
          <Z80name>alreadyclosed</Z80name>
          <SF02Name>alreadyClosed</SF02Name>
          <Value>It's already closed.</Value>
        </StringDef>
        <StringDef>
          <StringName>AlreadyHave</StringName>
          <Z80name>alreadyhave</Z80name>
          <SF02Name>alreadyHave</SF02Name>
          <Value>You already have that.</Value>
        </StringDef>
        <StringDef>
          <StringName>CantTake</StringName>
          <Z80name>notportable</Z80name>
          <SF02Name>notPortable</SF02Name>
          <Value>You can't take that.</Value>
        </StringDef>
        <StringDef>
          <StringName>CantDo</StringName>
          <Z80name>cantDoThat</Z80name>
          <SF02Name>cantDoThat</SF02Name>
          <Value>You can't do that.</Value>
        </StringDef>
        <StringDef>
          <StringName>Carrying</StringName>
          <Z80name>carrying</Z80name>
          <SF02Name>carrying</SF02Name>
          <Value>You are carrying...</Value>
        </StringDef>
        <StringDef>
          <StringName>TooHeavy</StringName>
          <Z80name>tooheavystr</Z80name>
          <SF02Name>tooHeavy</SF02Name>
          <Value>You can't carry any more.</Value>
        </StringDef>
        <StringDef>
          <StringName>HaveNothing</StringName>
          <Z80name>noitems</Z80name>
          <SF02Name>emptyhanded</SF02Name>
          <Value>You are empty handed.</Value>
        </StringDef>
        <StringDef>
          <StringName>CantSee</StringName>
          <Z80name>pitchdark</Z80name>
          <SF02Name>noLight</SF02Name>
          <Value>It is pitch dark.</Value>
        </StringDef>
        <StringDef>
          <StringName>DontHave</StringName>
          <Z80name>donthave</Z80name>
          <SF02Name>dontHave</SF02Name>
          <Value>You don't have that.</Value>
        </StringDef>
        <StringDef>
          <StringName>DontSee</StringName>
          <Z80name>dontseestr</Z80name>
          <SF02Name>dontsee</SF02Name>
          <Value>You don't see that here.</Value>
        </StringDef>
        <StringDef>
          <StringName>CantSeeIn</StringName>
          <Z80name>cantlook</Z80name>
          <SF02Name>noPeek</SF02Name>
          <Value>You can't see inside that.</Value>
        </StringDef>
        <StringDef>
          <StringName>FindNothing</StringName>
          <Z80name>nothing</Z80name>
          <SF02Name>itsEmpty</SF02Name>
          <Value>You find nothing.</Value>
        </StringDef>
        <StringDef>
          <StringName>CantOpen</StringName>
          <Z80name>cantopen</Z80name>
          <SF02Name>cantopen</SF02Name>
          <Value>You can't open that.</Value>
        </StringDef>
        <StringDef>
          <StringName>CantEnter</StringName>
          <Z80name>noenter</Z80name>
          <SF02Name>noenter</SF02Name>
          <Value>You can't enter that.</Value>
        </StringDef>
        <StringDef>
          <StringName>NotContainer</StringName>
          <Z80name>notcontainer</Z80name>
          <SF02Name>notContainer</SF02Name>
          <Value>You can't put things in that.</Value>
        </StringDef>
        <StringDef>
          <StringName>NotSupporter</StringName>
          <Z80name>notsupporter</Z80name>
          <SF02Name>nosurface</SF02Name>
          <Value>You find no suitable surface.</Value>
        </StringDef>
        <StringDef>
          <StringName>CantWear</StringName>
          <Z80name>notwearable</Z80name>
          <SF02Name>notwearable</SF02Name>
          <Value>You can't wear that.</Value>
        </StringDef>
        <StringDef>
          <StringName>AlreadyWearing</StringName>
          <Z80name>alreadyworn</Z80name>
          <SF02Name>alreadyWorn</SF02Name>
          <Value>You're already wearing that.</Value>
        </StringDef>
        <StringDef>
          <StringName>Opening</StringName>
          <Z80name>openingThe</Z80name>
          <SF02Name>openningThe</SF02Name>
          <Value>Opening the </Value>
        </StringDef>
        <StringDef>
          <StringName>Reveals</StringName>
          <Z80name>reveals</Z80name>
          <SF02Name>reveals</SF02Name>
          <Value> reveals...</Value>
        </StringDef>
        <StringDef>
          <StringName>ItsClosed</StringName>
          <Z80name>closed</Z80name>
          <SF02Name>itsClosed</SF02Name>
          <Value>It's closed.</Value>
        </StringDef>
        <StringDef>
          <StringName>IsClosed</StringName>
          <Z80name>isclosed</Z80name>
          <SF02Name>isclosed</SF02Name>
          <Value> is closed.</Value>
        </StringDef>
        <StringDef>
          <StringName>IsEmpty</StringName>
          <Z80name>isempty</Z80name>
          <SF02Name>isempty</SF02Name>
          <Value> is empty.</Value>
        </StringDef>
        <StringDef>
          <StringName>IsLocked</StringName>
          <Z80name>isLocked</Z80name>
          <SF02Name>isLocked</SF02Name>
          <Value> is locked.</Value>
        </StringDef>
        <StringDef>
          <StringName>ItsLocked</StringName>
          <Z80name>itslocked</Z80name>
          <SF02Name>itslocked</SF02Name>
          <Value>It's locked.</Value>
        </StringDef>
        <StringDef>
          <StringName>DoorClosed</StringName>
          <Z80name>doorclosed</Z80name>
          <SF02Name>doorclosed</SF02Name>
          <Value>The door is closed.</Value>
        </StringDef>
        <StringDef>
          <StringName>ThereIsA</StringName>
          <Z80name>thereisa</Z80name>
          <SF02Name>thereisa</SF02Name>
          <Value>There is a </Value>
        </StringDef>
        <StringDef>
          <StringName>Here</StringName>
          <Z80name>here</Z80name>
          <SF02Name>here</SF02Name>
          <Value> here.</Value>
        </StringDef>
        <StringDef>
          <StringName>Contains</StringName>
          <Z80name>contains</Z80name>
          <SF02Name>contains</SF02Name>
          <Value> contains...</Value>
        </StringDef>
        <StringDef>
          <StringName>ItsNotLocked</StringName>
          <Z80name>notlocked</Z80name>
          <SF02Name>notlocked</SF02Name>
          <Value>It's not locked.</Value>
        </StringDef>
        <StringDef>
          <StringName>NotLockable</StringName>
          <Z80name>notLockable</Z80name>
          <SF02Name>notLockable</SF02Name>
          <Value>It's not locked.</Value>
        </StringDef>
        <StringDef>
          <StringName>AlreadyLocked</StringName>
          <Z80name>alreadyLocked</Z80name>
          <SF02Name>alreadyLocked</SF02Name>
          <Value>It's already locked.</Value>
        </StringDef>
        <StringDef>
          <StringName>AlreadyUnlocked</StringName>
          <Z80name>alreadyUnlocked</Z80name>
          <SF02Name>alreadyUnlocked</SF02Name>
          <Value>It's already unlocked.</Value>
        </StringDef>
        <StringDef>
          <StringName>NotPossible</StringName>
          <Z80name>impossible</Z80name>
          <SF02Name>impossible</SF02Name>
          <Value>That's not possible.</Value>
        </StringDef>
        <StringDef>
          <StringName>WhichWay</StringName>
          <Z80name />
          <SF02Name />
          <Value>I don't know which way that is.</Value>
        </StringDef>
        <StringDef>
          <StringName>BadPut</StringName>
          <Z80name>badput</Z80name>
          <SF02Name>badput</SF02Name>
          <Value>That would violate the laws of physics.</Value>
        </StringDef>
        <StringDef>
          <StringName>ProvidingLight</StringName>
          <Z80name>providingLight</Z80name>
          <SF02Name>providingLight</SF02Name>
          <Value> (providing light)</Value>
        </StringDef>
        <StringDef>
          <StringName>BeingWorn</StringName>
          <Z80name>beingworn</Z80name>
          <SF02Name>beingWorn</SF02Name>
          <Value> (being worn)</Value>
        </StringDef>
        <StringDef>
          <StringName>MissingNoun</StringName>
          <Z80name>missingnoun</Z80name>
          <SF02Name>missingDobj</SF02Name>
          <Value>Missing noun.</Value>
        </StringDef>
        <StringDef>
          <StringName>MissingPrep</StringName>
          <Z80name>missingprep</Z80name>
          <SF02Name>missingPrep</SF02Name>
          <Value>Missing preposition.</Value>
        </StringDef>
        <StringDef>
          <StringName>MissingNoun2</StringName>
          <Z80name>missing_io</Z80name>
          <SF02Name>missing_io</SF02Name>
          <Value>Missing second noun.</Value>
        </StringDef>
        <StringDef>
          <StringName>BadWord</StringName>
          <Z80name>dontknowstr</Z80name>
          <SF02Name>badword</SF02Name>
          <Value>I don't know the word '</Value>
        </StringDef>
        <StringDef>
          <StringName>BadVerb</StringName>
          <Z80name>badverbstr</Z80name>
          <SF02Name>badverb</SF02Name>
          <Value>I don't know the verb '</Value>
        </StringDef>
        <StringDef>
          <StringName>Ambiguous</StringName>
          <Z80name>ambigstr</Z80name>
          <SF02Name>ambig</SF02Name>
          <Value>I don't know which one you mean.</Value>
        </StringDef>
        <StringDef>
          <StringName>Bye</StringName>
          <Z80name>bye</Z80name>
          <SF02Name>bye</SF02Name>
          <Value>Bye.</Value>
        </StringDef>
        <StringDef>
          <StringName>LeadingAn</StringName>
          <Z80name>leadingan</Z80name>
          <SF02Name>leadingAn</SF02Name>
          <Value>An </Value>
        </StringDef>
      </Strings>
    </StringDefs>
    <YouCantGoThatWay>You can't go that way.</YouCantGoThatWay>
    <DefaultDescription>You notice nothing unexpected.</DefaultDescription>
    <ImageResources>
      <ImageId>wsb</ImageId>
      <SpeccyPath>Z:\tmp\CSSCGCpssst\img\wsb.scr</SpeccyPath>
      <Apple2Path />
      <SpeccyHeight>64</SpeccyHeight>
      <Apple2Height>192</Apple2Height>
    </ImageResources>
    <ImageResources>
      <ImageId>w</ImageId>
      <SpeccyPath>Z:\tmp\CSSCGCpssst\img\w.scr</SpeccyPath>
      <Apple2Path />
      <SpeccyHeight>64</SpeccyHeight>
      <Apple2Height>192</Apple2Height>
    </ImageResources>
    <ImageResources>
      <ImageId>b</ImageId>
      <SpeccyPath>Z:\tmp\CSSCGCpssst\img\b2.scr</SpeccyPath>
      <Apple2Path />
      <SpeccyHeight>64</SpeccyHeight>
      <Apple2Height>192</Apple2Height>
    </ImageResources>
    <ImageResources>
      <ImageId>s</ImageId>
      <SpeccyPath>Z:\tmp\CSSCGCpssst\img\s.scr</SpeccyPath>
      <Apple2Path />
      <SpeccyHeight>64</SpeccyHeight>
      <Apple2Height>192</Apple2Height>
    </ImageResources>
    <ImageResources>
      <ImageId>sb</ImageId>
      <SpeccyPath>Z:\tmp\CSSCGCpssst\img\b.scr</SpeccyPath>
      <Apple2Path />
      <SpeccyHeight>64</SpeccyHeight>
      <Apple2Height>192</Apple2Height>
    </ImageResources>
    <ImageResources>
      <ImageId>ws</ImageId>
      <SpeccyPath>Z:\tmp\CSSCGCpssst\img\ws.scr</SpeccyPath>
      <Apple2Path />
      <SpeccyHeight>64</SpeccyHeight>
      <Apple2Height>192</Apple2Height>
    </ImageResources>
    <ImageResources>
      <ImageId>wb</ImageId>
      <SpeccyPath>Z:\tmp\CSSCGCpssst\img\wb.scr</SpeccyPath>
      <Apple2Path />
      <SpeccyHeight>64</SpeccyHeight>
      <Apple2Height>192</Apple2Height>
    </ImageResources>
    <ImageResources>
      <ImageId>b2</ImageId>
      <SpeccyPath>Z:\tmp\CSSCGCpssst\img\b.scr</SpeccyPath>
      <Apple2Path />
      <SpeccyHeight>64</SpeccyHeight>
      <Apple2Height>192</Apple2Height>
    </ImageResources>
  </project>
</xml>