<?xml version="1.0" encoding="utf-8"?>
<xml xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <project>
    <projname>DeathTower</projname>
    <welcome />
    <author>To do: insert welcome message.</author>
    <language>English</language>
    <version>Version 1.0</version>
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
      <userverbs />
    </verbs>
    <objects>
      <object id="0" holder="0" name="Offscreen" printedname="Offscreen">
        <description>Offscreen.  Move objects here to remove them from the world.</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" transparent="0" openable="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
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
          <in />
          <out />
        </nogo>
        <ImageId />
      </object>
      <object id="1" holder="2" name="player" printedname="player">
        <description>You're a wonderful person. You shouldn't care what you look like.</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" transparent="0" openable="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="me,self" />
        <nogo>
          <w />
          <e />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="2" holder="0" name="entrance" printedname="Entrance">
        <description>Description not set.</description>
        <initialdescription />
        <directions n="255" s="255" e="3" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="1" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <e />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="3" holder="0" name="lobby" printedname="Lobby">
        <description>Description not set.</description>
        <initialdescription />
        <directions n="255" s="255" e="4" w="2" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="1" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <w />
          <e />
          <n />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="4" holder="0" name="floor_1" printedname="Floor 1">
        <description>Description not set.</description>
        <initialdescription />
        <directions n="255" s="255" e="5" w="3" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="1" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <s />
          <w />
          <e />
          <n />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="5" holder="0" name="floor_2" printedname="Floor 2">
        <description>Description not set.</description>
        <initialdescription />
        <directions n="11" s="255" e="6" w="4" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="1" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <s />
          <w />
          <e />
          <n />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="6" holder="0" name="floor_3" printedname="Floor 3">
        <description>Description not set.</description>
        <initialdescription />
        <directions n="255" s="7" e="255" w="5" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="1" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <s />
          <w />
          <e />
          <n />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="7" holder="0" name="floor_4" printedname="Floor 4">
        <description>Description not set.</description>
        <initialdescription />
        <directions n="6" s="255" e="255" w="12" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="1" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <w />
          <e />
          <n />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="8" holder="0" name="floor_6" printedname="Floor 6">
        <description>Description not set.</description>
        <initialdescription />
        <directions n="255" s="255" e="12" w="9" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="1" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <s />
          <w />
          <e />
          <n />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="9" holder="0" name="floor_7" printedname="Floor 7">
        <description>Description not set.</description>
        <initialdescription />
        <directions n="255" s="255" e="8" w="10" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="1" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <w />
          <e />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="10" holder="0" name="penthouse" printedname="Penthouse">
        <description>Description not set.</description>
        <initialdescription />
        <directions n="255" s="255" e="9" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="1" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <s />
          <w />
          <e />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="11" holder="0" name="bathroom" printedname="BathRoom">
        <description>Description not set.</description>
        <initialdescription />
        <directions n="255" s="5" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="1" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <s />
          <w />
          <e />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="12" holder="0" name="floor_5" printedname="Floor 5">
        <description>Description not set.</description>
        <initialdescription />
        <directions n="255" s="255" e="7" w="8" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="1" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <s />
          <w />
          <e />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="13" holder="3" name="luigi" printedname="Luigi">
        <description>You thought mario was tough!</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="1" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <w />
          <e />
          <n />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="14" holder="4" name="mantis" printedname="Mantis">
        <description>He look like Kareem Abdul Jabbar, He is the former 5th Floor Guardian!</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <w />
          <e />
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="15" holder="5" name="jaws" printedname="Jaws">
        <description>This on actually killed James Bond</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="16" holder="6" name="zangief" printedname="Zangief">
        <description>He was the best Street Fighter</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="17" holder="7" name="ivan_drago" printedname="Ivan Drago">
        <description>He will punch your Rocky face!</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="18" holder="8" name="t_800_model_101" printedname="T-800 Model 101">
        <description>He seems quite capable to terminate you!</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="19" holder="9" name="van_damne" printedname="Van Damne">
        <description>Round Kick specialist!</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="20" holder="10" name="chuck_norris" printedname="Chuck Norris">
        <description>He is Chuck Norris!</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="21" holder="12" name="joker" printedname="Joker">
        <description>The joke is on you!</description>
        <initialdescription />
        <directions n="255" s="255" e="255" w="255" ne="255" se="255" sw="255" nw="255" up="255" down="255" in="255" out="255" mass="0" />
        <flags scenery="0" portable="0" container="0" supporter="0" open="0" wearable="0" emittinglight="0" locked="0" lockable="0" beingworn="0" user1="0" door="0" user2="0" user3="0" user4="0" />
        <synonyms names="" />
        <nogo>
          <in>You can't enter that.</in>
          <out>I don't know which way that is.</out>
        </nogo>
        <ImageId />
      </object>
      <object id="22" holder="1" name="fist" printedname="fist">
        <description>You notice nothing unexpected.</description>
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
      <object id="23" holder="1" name="kick" printedname="kick">
        <description>You notice nothing unexpected.</description>
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
      <check verb="e" check="check1_mantis" />
      <check verb="e" check="check0_luigi" />
      <check verb="e" check="check2_jaws" />
      <check verb="e" check="check3_zangief" />
      <check verb="e" check="check4_ivan_drago" />
      <check verb="e" check="check5_joker" />
      <check verb="e" check="check6_t_800_model_101" />
      <check verb="e" check="check7_van_damne" />
      <check verb="e" check="check8_chuck_norris" />
      <check verb="w" check="check0_luigi" />
      <check verb="w" check="check1_mantis" />
      <check verb="w" check="check2_jaws" />
      <check verb="w" check="check3_zangief" />
      <check verb="w" check="check4_ivan_drago" />
      <check verb="w" check="check5_joker" />
      <check verb="w" check="check6_t_800_model_101" />
      <check verb="w" check="check7_van_damne" />
      <check verb="w" check="check8_chuck_norris" />
      <check verb="s" check="check0_luigi" />
      <check verb="s" check="check1_mantis" />
      <check verb="s" check="check2_jaws" />
      <check verb="s" check="check3_zangief" />
      <check verb="s" check="check4_ivan_drago" />
      <check verb="s" check="check5_joker" />
      <check verb="s" check="check6_t_800_model_101" />
      <check verb="s" check="check7_van_damne" />
      <check verb="s" check="check8_chuck_norris" />
      <check verb="n" check="check0_luigi" />
      <check verb="n" check="check1_mantis" />
      <check verb="n" check="check2_jaws" />
      <check verb="n" check="check3_zangief" />
      <check verb="n" check="check4_ivan_drago" />
      <check verb="n" check="check5_joker" />
      <check verb="n" check="check6_t_800_model_101" />
      <check verb="n" check="check7_van_damne" />
      <check verb="n" check="check8_chuck_norris" />
    </checks>
    <sentences>
      <sentence verb="wear" do="*" prep="" io="" type="before" sub="get_portable" />
      <sentence verb="take" do="PLAYER" prep="" io="" type="instead" sub="not_possible" />
      <sentence verb="kill" do="PLAYER" prep="" io="" type="instead" sub="kill_self" />
      <sentence verb="kill" do="*" prep="" io="" type="instead" sub="default_kill" />
      <sentence verb="talk to" do="PLAYER" prep="" io="" type="instead" sub="talk_to_self" />
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
      <sentence verb="kill" do="luigi" prep="" io="" type="instead" sub="kill_luigi" />
      <sentence verb="kill" do="luigi" prep="with" io="fist" type="instead" sub="kill_luigi" />
      <sentence verb="kill" do="luigi" prep="with" io="kick" type="instead" sub="kill_luigi" />
      <sentence verb="kill" do="mantis" prep="" io="" type="instead" sub="kill_mantis" />
      <sentence verb="kill" do="mantis" prep="with" io="fist" type="instead" sub="kill_mantis" />
      <sentence verb="kill" do="mantis" prep="with" io="kick" type="instead" sub="kill_mantis" />
      <sentence verb="kill" do="jaws" prep="" io="" type="instead" sub="kill_jaws" />
      <sentence verb="kill" do="jaws" prep="with" io="fist" type="instead" sub="kill_jaws" />
      <sentence verb="kill" do="jaws" prep="with" io="kick" type="instead" sub="kill_jaws" />
      <sentence verb="kill" do="zangief" prep="" io="" type="instead" sub="kill_zangief" />
      <sentence verb="kill" do="zangief" prep="with" io="fist" type="instead" sub="kill_zangief" />
      <sentence verb="kill" do="zangief" prep="with" io="kick" type="instead" sub="kill_zangief" />
      <sentence verb="kill" do="ivan_drago" prep="" io="" type="instead" sub="kill_ivan_drago" />
      <sentence verb="kill" do="ivan_drago" prep="with" io="fist" type="instead" sub="kill_ivan_drago" />
      <sentence verb="kill" do="ivan_drago" prep="with" io="kick" type="instead" sub="kill_ivan_drago" />
      <sentence verb="kill" do="joker" prep="" io="" type="instead" sub="kill_joker" />
      <sentence verb="kill" do="joker" prep="with" io="fist" type="instead" sub="kill_joker" />
      <sentence verb="kill" do="joker" prep="with" io="kick" type="instead" sub="kill_joker" />
      <sentence verb="kill" do="t_800_model_101" prep="" io="" type="instead" sub="kill_t_800_model_101" />
      <sentence verb="kill" do="t_800_model_101" prep="with" io="fist" type="instead" sub="kill_t_800_model_101" />
      <sentence verb="kill" do="t_800_model_101" prep="with" io="kick" type="instead" sub="kill_t_800_model_101" />
      <sentence verb="kill" do="van_damne" prep="" io="" type="instead" sub="kill_van_damne" />
      <sentence verb="kill" do="van_damne" prep="with" io="fist" type="instead" sub="kill_van_damne" />
      <sentence verb="kill" do="van_damne" prep="with" io="kick" type="instead" sub="kill_van_damne" />
      <sentence verb="kill" do="chuck_norris" prep="" io="" type="instead" sub="kill_chuck_norris" />
      <sentence verb="kill" do="chuck_norris" prep="with" io="fist" type="instead" sub="kill_chuck_norris" />
      <sentence verb="kill" do="chuck_norris" prep="with" io="kick" type="instead" sub="kill_chuck_norris" />
    </sentences>
    <routines>
      <routine name="game_start">//put any startup code or messages here
</routine>
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
      <routine name="kill_luigi">println("You kill Luigi");
luigi.location= offscreen;</routine>
      <routine name="kill_mantis">println("You kill Mantis"); mantis.location= offscreen;</routine>
      <routine name="kill_jaws">println("You kill jaws"); jaws.location= offscreen;</routine>
      <routine name="kill_zangief">println("You kill zangief"); zangief.location= offscreen;</routine>
      <routine name="kill_ivan_drago">println("You kill ivan_drago"); ivan_drago.location= offscreen;</routine>
      <routine name="kill_joker">println("You kill joker"); joker.location= offscreen;</routine>
      <routine name="kill_t_800_model_101">println("You kill t_800_model_101"); t_800_model_101.location= offscreen;</routine>
      <routine name="kill_van_damne">println("You kill van_damne"); van_damne.location= offscreen;</routine>
      <routine name="kill_chuck_norris">println("You kill chuck_norris"); chuck_norris.location= offscreen;</routine>
    </routines>
    <CheckFunctions>
      <UserCheck name="check0_luigi">if ( luigi.location==player.location )
{
     println("Luigi blocks that exit! ");
     stop();
}
</UserCheck>
      <UserCheck name="check1_mantis">if ( mantis.location==player.location )
{
     println("Mantis blocks that exit! ");
     stop();
}
</UserCheck>
      <UserCheck name="check2_jaws">if ( jaws.location==player.location )
{
     println("Jaws blocks that exit! ");
     stop();
}
</UserCheck>
      <UserCheck name="check3_zangief">if ( zangief.location==player.location )
{
     println("Zangief blocks that exit! ");
     stop();
}
</UserCheck>
      <UserCheck name="check4_ivan_drago">if ( ivan_drago.location==player.location )
{
     println("Ivan Drago blocks that exit! ");
     stop();
}
</UserCheck>
      <UserCheck name="check5_joker">if ( joker.location==player.location )
{
     println("Joker blocks that exit! ");
     stop();
}
</UserCheck>
      <UserCheck name="check6_t_800_model_101">if ( t_800_model_101.location==player.location )
{
     println("T-800 model 101 blocks that exit! ");
     stop();
}
</UserCheck>
      <UserCheck name="check7_van_damne">if ( van_damne.location==player.location )
{
     println("Van Damne blocks that exit! ");
     stop();
}
</UserCheck>
      <UserCheck name="check8_chuck_norris">if ( chuck_norris.location==player.location )
{
     println("Chuck Norris blocks that exit! ");
     stop();
}
</UserCheck>
    </CheckFunctions>
    <events>
      <event name="lobbyluigyTEST1">if(luigi.parent==player.parent) println("ok luigi") ;
floor_1.n = fail("The way is blocked."); //change room, direction, and message
</event>
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
      </builtin>
      <user />
    </variables>
    <Arrays />
    <walkthrough>e,kill luigi,e,kill mantis,e , kill jaws,e,kill zangief,s,kill ivan,w, kill joker,w,kill t-800,w,kill van damne,w,kill chuck norris</walkthrough>
    <BuildSettings>
      <SpectrumBorder>0</SpectrumBorder>
      <SpectrumPen>7</SpectrumPen>
      <SpectrumPaper>0</SpectrumPaper>
      <SpectrumFont />
      <BrightPalette>true</BrightPalette>
      <EnableGraphics>false</EnableGraphics>
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
      </Strings>
    </StringDefs>
    <YouCantGoThatWay>You can't go that way.</YouCantGoThatWay>
    <DefaultDescription>You notice nothing unexpected.</DefaultDescription>
  </project>
</xml>