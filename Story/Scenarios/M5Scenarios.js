var scenarios = [
  {
    scenario: "You had seen enough. It was time for you to leave and inform the only person who could help you. It was Lord Dudding. Of course, you had to escape first.",
  },
  {
    scenario: "So you had to escape... Easier said than done. You had to have a plan... Or not... Either way, you had to get out of this cursed hole.",
    answer1: "Seek help from other workers",
    answer2: "Try to sneak out at night",
    skipto2: 16,
    answer3: "RUN!!!",
    skipto3: 35,
  },
  //Riot
  {
    scenario: "You were going to rile up all the workers. You were going to give the guards a bad time. Of course, you'd just use it as a decoy to escape, but still. First you needed to get support from as many workers as possible, because although most of them were here against their own will, their lives before were pretty shit, so for them this was an upgrade.",
  },
  {
    scenario: "First you needed to find someone who had the trust of the majority and prove to them, why freedom might be pretty cool.",
    reply1: "The first person that caught your eye was a blond farmer. He was sitting with his friends and very enthusiastically talking about something important.",
    answer1: "Ask a random person who has a lot of friends",
    skipto1: 6,
    reply2: "You asked a buff dude to help. Sadly, when you mentioned how he needed to rile up his friends, tears appeared in his eyes and he left you.",
    answer2: "Ask a buff dude",
  },
  {
    scenario: "After being disappointed by the brute, you fell into deep depression. You had failed - you couldn't attract a single person to your cause. Such a waste...",
    quit: true,
    failure1: true,
  },
  {
    scenario: 'You approached the farmer and asked if you could have a word with him. When no one else was listening you, you described your whole plan: "You were going to create a protest, use it to distract the guards and escape to Lord Dudding and finally destroy the conspiracy with his help." He agreed with you and now you had a person who could help.',
  },
  {
    scenario: "Next up you needed to expand the resistance. After all, to conquer the hearts of hundred the voice of 2 people is not enough.",
    reply1: "It took a good while to make all the posters, but only tomorrow will tell if it was worth it.",
    answer1: "Add posters that invite people to come over and join this secret movement",
    reply2: "The farmer happily agreed to help. He went outside to tell his friends. It will probably take some time for him to explain everything, so only tomorrow you will see the results.",
    answer2: "Ask the farmer friend to invite his best friends",
    skipto2: 10,
    reply3: "You saw a table full of people happily talking. You sat next to them and asked them if they were willing to help.",
    answer3: "Invite a random group of friends to join",
    skipto3: 9,
  },
  {
    scenario: "To no one's surprise the posters were seen by the guards too. Did you actually think this would work or did you think this is funny? Well it's not you dumb fuck. Excuse me for swearing, but Jesus Christ does your stupidity have no bounds... You know what? I also bet that you don't have any friends. I mean if you had, you wouldn't have time to play some little unknown game that doesn't even work and... Well either way the guards caught you and your plans were over. Happy now? Is this what you wanted?",
    quit: true,
    failure2: true,
  },
  {
    scenario: "The group looked at you and laughed. Quite soon the guards came and took you. Apparently, that group were friends of the guards, so they had more privileges. Their snitching only improved their reputation amongst the guards.",
    quit: true,
    failure3: true,
  },
  {
    scenario: "The farmer's friends were mostly old farmers. Not the best people for a brutal riot, but still better than nothing. As the tower was 1 week from being built, your next step was going to have to be big. ",
  },
  {
    scenario: "Finally you had reached the last step. You had to go big. The question now was how big.",
    reply1: "You started peacefully protesting by setting tents on fire, destroying the tower and other peaceful stuff.",
    answer1: "Start a riot and hope other workers join",
    skipto1: 14,
    answer2: "Start randomly attacking the guards",
    reply3: "It was late evening. 10 people were on top of the tower they had been building for the past few months. They suddenly jumped.",
    answer3: "Commit mass suicide",
    skipto3: 13,
  },
  {
    scenario: "You had as many rebels as there were guards. I'm fairly sure that no one's surprised when they hear that you were quickly and brutally dealt with removing any hope you had of meeting Lord Dudding.",
    quit: true,
    failure4: true,
  },
  {
    scenario: "To no one's surprise you fucking died. Did you actually think this would work or did you think this is funny? Well it's not you dumb fuck. Excuse me for swearing, but Jesus Christ does your stupidity have no bounds... You know what? I also bet that you don't have any friends. I mean if you had, you wouldn't have time to play some little unknown game that doesn't even work and... Well either way you are dead now and have no chance of meeting Lord Dudding. Happy now? Is this what you wanted from the start?",
    quit: true,
    failure5: true,
  },
  {
    scenario: "Luckily for you, the other workers were attracted by the light of burning tents and sounds of falling bricks. They quickly joined you. Merely 10 minutes later the entire building site was out of control. The guards could do nothing now.",
  },
  {
    scenario: "Using this as a distraction you quickly escaped from the site. Next up you had to get to Lord Dudding. That was as easy to say as to do. Your remarkable story of building a rebellion inspired the guards maybe a tad too much, but they let you through.",
    quit: true,
    ending1: true,
  },
  //Plan
  {
    scenario: "You were going to sneak out. The question now was how? You had to think of a plan. A plan that was going to lead you to safety and NOT kill you.",
  },
  {
    scenario: "The first thing you had to do is find a good opportunity.",
    reply1: "From afar, the wall looked like an impenetrable block of stones, but after a closer look you realised that there was a lot of cracks that you could use to climb over...",
    answer1: "Search for openings in the surrounding wall",
    reply2: "You sneakily entered the tent. You looked at the table and it was full of papers. You grabbed the most colourful one. After going back to your tent, you examined the thing. It was a schedule and it showed when a food cart comes every day. You figured that you could hide in it. What could go wrong after all?",
    answer2: "Look for info in Finn Dudding's tent",
    skipto2: 24,
    reply3: "This wasn't an easy task, so you jumped to work. It took a good 3 days but now you knew where and when every guard was. Then you quickly noticed an important thing - when guards changed shifts, they would leave the gate unguarded for a couple of minutes.",
    answer3: "Create a list of guard patrols",
    skipto3: 28,
  },
  //Plan Wall
  {
    scenario: "Next you had to decide how to act if something unplanned happens.",
    reply1: "You walked outside the tent and were instantly met by a scream. You noticed that a guard was punching a worker. That instantly boiled your blood.",
    answer1: "Act aggressively",
    reply2: "And so you grabbed some flowers and stared at them for half an hour. You felt calm.",
    answer2: "Act calmly",
    skipto2: 22,
  },
  {
    scenario: "And finally you had to decide if you would carry out the plan quickly, or if you would take your time.",
    reply1: "You sat on you bed and started imagining you were a cheetah. Soon you felt like it.",
    answer1: "Act fast",
    reply2: 'You sat on your bed and started saying motivational quotes to yourself. "Life is not a race, there is no reason to speed run it" you said and instantly felt like a turtle.',
    answer2: "Act slow",
    skipto2: 21,
  },
  {
    scenario: "The wait for the sun to set was like torture for you, but you managed to stay awake. You sneakily went outside your tent. What you saw shocked you. The guards were everywhere they had torches. Apparently, a worker escaped and all of them were looking for him. <br>As you wanted to escape as fast as possible you ignored all the voices in your head warning you to stop. You hid behind one tent, then another. So, you made your way to the wall.<br>You were already a meter above the ground when you suddenly realised that 3 guards were looking at you.<br>You quickly jumped backed to the ground and aggressively tried to do something to the guards, but your attempts were futile. Your aggression only angered the guards and you ended up with a lot of wounds.",
    quit: true,
    failure6: true,
  },
  {
    scenario: "The wait for the sun to set was like torture for you, but you managed to stay awake. You sneakily went outside your tent. What you saw shocked you. The guards were everywhere they had torches. Apparently, a worker escaped and all of them were looking for him.<br>You quickly remembered how you promised yourself not to hurry, so you went back to sleep and suffered through the next day.<br>Luckly the next night was calm, so you managed to get to the wall and climb over it without any interaction with the guards.<br>All you had to do now is reach Lord Dudding and tell him about the evil plan. With your escape story, going through the guards wasn't even a challenge.",
    quit: true,
    ending2: true,
  },
  {
    scenario: "And finally you had to decide if you would carry out the plan quickly, or if you would take your time.",
    reply1: "You sat on you bed and started imagining you were a cheetah. Soon you felt like it.",
    answer1: "Act fast",
    reply2: 'You sat on your bed and started saying motivational quotes to yourself. "Life is not a race, there is no reason to speed run it" you said and instantly felt like a turtle.',
    answer2: "Act slow",
    skipto2: 21,
  },
  {
    scenario: "The wait for the sun to set was like torture for you, but you managed to stay awake. You sneakily went outside your tent. What you saw shocked you. The guards were everywhere they had torches. Apparently, a worker escaped and all of them were looking for him.<br>As you wanted to escape as fast as possible you ignored all the voices in your head warning you to stop. You hid behind one tent, then another. So, you made your way to the wall.<br>You were already a meter above the ground when you suddenly realised that 3 guards were looking at you.<br>You jumped down and surrendered. After all, the odds were severely against you. After seeing your passiveness, the guards decided to beat you up only a little. Still you were now heavily monitored and that removed all your chances of escaping.",
    quit: true,
    failure7: true,
  },
  //Plan Hay
  {
    scenario:"Next you had to decide how to act if something unplanned happens.",
    reply1: "You walked outside the tent and were instantly met by a scream. You noticed that a guard was punching a worker. That instantly boiled your blood.",
    answer1: "Act aggressively",
    reply2: "And so you grabbed some flowers and stared at them for half an hour. You felt calm.",
    answer2: "Act calmly",
  },
  {
    scenario: "And finally you had to decide if you would carry out the plan quickly, or if you would take your time.",
    reply1: "You sat on you bed and started imagining you were a cheetah. Soon you felt like it.",
    answer1: "Act fast",
    reply2: 'You sat on your bed and started saying motivational quotes to yourself. "Life is not a race, there is no reason to speed run it" you said and instantly felt like a turtle.',
    answer2: "Act slow",
    skipto2: 27,
  },
  {
    scenario: "You were going to escape by hiding in a food cart. Lucky for you the cart was going to come tomorrow evening, so you had time to relax before doing your stunt. <br>Before you knew it a day had passed. You were looking at the sky and you started worrying: the cart wasn't there. It wouldn't be until 11pm that you would see your escape route.<br>To your surprise there were no guards. Did they just forget? Did something happen? Either way you didn't hesitate and when the last box of food was offloaded you quickly jumped in. Soon enough you were far from your prison. You quickly jumped out of the cart and you were finally free.<br>All you had to do now is reach Lord Dudding and tell him about the evil plan. With your escape story going through the guards wasn't even a challenge.",
    quit: true,
    ending3: true,
  },
  {
    scenario: "You were going to escape by hiding in a food cart. Lucky for you the cart was going to come tomorrow evening, so you had time to relax before doing your stunt. <br>Before you knew it a day had passed. You were looking at the sky and you started worrying: the cart wasn't there. It wouldn't be until 11pm that you would see your escape route. <br>To your surprise there were no guards. Did they just forget? Did something happen? Either way you waited. After all - they could appear at any moment.<br>You waited and waited, and the guards finally came. The problem now was that you had no way of getting to the kart. The wheels started turning and your escape opportunity was no longer.",
    quit: true,
    failure8: true,
  },
  //Plan Patrols
  {
    scenario: "Next you had to decide how to act if something unplanned happens.",
    reply1: "You walked outside the tent and were instantly met by a scream. You noticed that a guard was punching a worker. That instantly boiled your blood.",
    answer1: "Act aggressively",
    reply2: "And so you grabbed some flowers and stared at them for half an hour. You felt calm.",
    answer2: "Act calmly",
    skipto2: 32,
  },
  {
    scenario: "And finally you had to decide if you would carry out the plan quickly, or if you would take your time.",
    reply1: "You sat on you bed and started imagining you were a cheetah. Soon you felt like it.",
    answer1: "Act fast",
    reply2: 'You sat on your bed and started saying motivational quotes to yourself. "Life is not a race, there is no reason to speed run it" you said and instantly felt like a turtle.',
    answer2: "Act slow",
    skipto2: 31,
  },
  {
    scenario: "So, you were going to go for the gate. Luckily for you there was no need for preparations, as you would have to just sneak to the other side of the wall. The hardest part was waiting for midnight.<br>It was time for you to move. You were waiting for the guards to turn around and the moment they did, you started going for the exit. You were already past the gate when you heard someone shouting at you. Why are they here so early? Were they just late when you were making the guard patrol list?<br>You were so shocked, that when you stopped. They caught up very quickly. Only then you remembered that you were planning to be aggressive, so you pushed the guards away and started running.<br>You safely made it to Lord Dudding's house.",
    quit: true,
    ending4: true,
  },
  {
    scenario: "So, you were going to go for the gate. Luckily for you there was no need for preparations, as you would have to just sneak to the other side of the wall. The hardest part was waiting for midnight.<br>When the time came, you quietly walked to the gate. The guards were so distracted, they didn't even notice you. Around 5 min. later they moved. You slowly looked around and after making sure everything is safe you slowly walked out. When you were about 20 meters from the fence you noticed that the guards came. You quicly hid in the shadows and you were left unnoticed.<br>All you had to do now is reach Lord Dudding and tell him about the evil plan. With your escape story going through the guards wasn't even a challenge.",
    quit: true,
    ending5: true,
  },
  {
    scenario: "And finally you had to decide if you would carry out the plan quickly, or if you would take your time.",
    reply1: "You sat on you bed and started imagining you were a cheetah. Soon you felt like it.",
    answer1: "Act fast",
    reply2: 'You sat on your bed and started saying motivational quotes to yourself. "Life is not a race, there is no reason to speed run it" you said and instantly felt like a turtle.',
    answer2: "Act slow",
    skipto2: 34,
  },
  {
    scenario: "So, you were going to go for the gate. Luckily for you there was no need for preparations, as you would have to just sneak to the other side of the wall. The hardest part was waiting for midnight.<br>It was time for you to move. You were waiting for the guards to turn around and the moment they did, you started going for the exit. You were already past the gate when you heard someone shouting at you. Why are they here so early? Were they just late when you were making the guard patrol list?<br>You were so shocked, that you froze. Too bad the guards didn't. They caught up very quickly. Only then you remembered to calm yourself down. Too bad that didn't help escaping the guards. You were caught and placed under constant watch.",
  },
  {
    scenario: "So, you were going to go for the gate. Luckily for you there was no need for preparations, as you would have to just sneak to the other side of the wall. The hardest part was waiting for midnight.<br>When the time came, you quietly walked to the gate. The guards were so distracted, they didn't even notice you. Around 5 min. later they moved. You slowly looked around and after making sure everything is safe you slowly walked out. When you were about 20 meters from the fence you noticed that the guards came. Too bad your choice to go at it slowly only hindered the escape.<br>Nevertheless you were caught and placed under constant watch, throwing away all your hopes.",
  },
  //RUN!!!
  {
    scenario: "And so you started running... You of course attracted the guard's attention and three of them came after you. You had to think where to run.",
    reply1: "You ran to the monastery like your life depended on it, which it did.",
    answer1: "The monastery",
    reply2: "You started running to the graveyard so if the guard cought you, they wouldn't have to carry your body a long distance.",
    answer2: "The graveyard",
    skipto2: 45,
    reply3: "The bar was full of people - the perfect place to hide.",
    answer3: "The bar",
    skipto3: 54,
  },
  //Monastery
  {
    scenario: "You ran to the monastery. Once inside you had to find a place to hide. You had to find it quick, since the guards were right around the corner.",
    reply1: "You climbed up the tree. And you hid there.",
    answer1: "Climb the money tree",
    reply2: "You hid in there for a while. Sadly, the guards described you as a dangerous criminal, so every monk in the monastery began searching for you.",
    answer2: "Hide in one of the monasteries’ rooms",
    skipto2: 43,
  },
  {
    scenario: "The three guards came next to the tree, but instead of checking it they kneeled and started praying. After all that was the holy money tree. After a good minute, the guards left to investigate the monasterie's rooms, leaving you alone.",
    answer1: "Run away",
    reply2: "You waited, and you waited. The guards really took their time, but they finally came out. They were almost out of your sight when a branch broke and fell down. One guard came to investigate.",
    answer2: "Wait for the guards to go back to their posts",
    skipto2: 39,
  },
  {
    scenario: "You ran away as fast as you could. There was nothing that could stop you. You were finally away from danger.",
    quit: true,
    ending6: true,
  },
  {
    scenario: "The guard was most definatelly going to see you. You had to act quick.",
    answer1: "Continue hiding in the tree",
    reply2: "You climbed down and offered him a deal to which he somehow agreed to: He was going to leave you alone and in exchange lord Dudding was going to grant him a plot of land. It was quite brave of you to offer something that wasn't yours, but at least he left you alone.",
    answer2: "Try bribing the guard",
    skipto2: 42,
    answer3: "RUN!!!",
    skipto3: 41,
  },
  {
    scenario: "You continued hiding, but there really wasn't much you could do. You were cought and beaten to death.",
    quit: true,
    failure9: true,
  },
  {
    scenario: "You jumped from the tree and you were going to run, but your legs hurt so bad from the fall, you could barely walk. The guard was quick, and he hit you so hard that you blacked out.",
    quit: true,
    failure10: true,
  },
  {
    scenario: "Now you had to meet lord Dudding. That wasn't very hard, as the guards easily let you through after hearing your horrible story.",
    quit: true,
    ending7: true,
  },
  {
    scenario: "You had to act fast to hide from the monks and the guards. The room you were in was a mess, so you had a chance at hiding here. Also, you could try jumping out the window and hope noone sees you...",
    reply1: "It was the time for monks to search the room you were in. They were really scared of you, but the stress didn't help them search. You managed to slip through them. You were finally free.",
    answer1: "Hide in the room",
    reply2: "You ran, and you jumped, and you landed. The the outside was so empty... That most probably was because everyone really wanted to find you. You were finally free.",
    answer2: "Jump through the window",
  },
  {
    scenario: "The only thing left now was to meet Lord Dudding himself.<br>That in itself wasn't awfully hard. Everyone knew where he lived and getting through the guoard was a breeze after they heard your story.",
    quit: true,
    ending8: true,
  },
  //Graveyard
  {
    scenario: "The graveyard was a huge plot of land. Full of graves, dead people and most probably ghosts... The perfect place to scare off anyone!",
  },
  {
    scenario: "It whould be pretty scary just to be there, but when you know that a few guards are looking for you with the intent to kill... That only makes it scarier. You had to hide!",
    reply1: "The ground was very cold, and you could easily imagine some dead zombies rising from there. Then you heard footsteps.",
    answer1: "Hide behind a tombstone",
    reply2: "At this point it was a late evening, so everything was dark. You had a good chance to be unnoticed by the guards. Then the wind started blowing and you heard somebody sing.",
    answer2: "Climb up a tree",
    skipto1: 50,
  },
  //Graveyard tombstone
  {
    scenario: "You looked around but saw nothing. The footprints came closer and closer. At this point you were ready to scream, but after remembering that there are a few guards looking for you, you decided to think about what to do before going ape mode.",
    reply1: "You decided to take a run at the exit. Hey, after all running has gotten you so far. You managed to run out of the gravyard without meeting the guards. Who knows what stopped them from searching for you...",
    answer1: "Run",
    skipto1: 49,
    reply2: "You started screaming. It really didn't help, but after you stopped, so did the footprints. You ran as fast as possible and luckly escaped from the graveyard.",
    answer2: "Scream",
    skipto2: 49,
    answer3: "Continue hiding",
  },
  {
    scenario: "You continued hiding. The footprints didn't stop. You were soon surrounded by a group of guards. There really was no explanation of how you didn't see them, but it was too late.",
    quit: true,
    failure11: true,
  },
  {
    scenario: "You quickly ran over to Lord Dudding's palace. You ran so quickly, that there were no mysterious footprints in the world that could catch you. With your horror story you managed to get through the guards and meet Dudding himself.",
    quit: true,
    ending9: true,
  },
  //Graveyard Tree
  {
    scenario: "You started looking for the source of the sound, but there was nothing. The sound was coming closer and closer. You were ready to scream, but after remembering, that a pair of guards are searching for you, you decided to think for a second.",
    answer1: "Jump off the tree and run",
    answer2: "Sing",
    skipto2: 52,
    reply3: "You didn't move and after a few minutes the singing stopped. You didn't see anyone, so you decided to escape to graveyard before any more ghosts came after you.",
    answer3: "Don't move",
    skipto3: 53,
  },
  {
    scenario: "You jumped and landed. You landed fairly poorly, as you leg now ached. Too bad that the sound of the fall also invited two guards. Now your leg was the least of your worries.",
    quit: true,
    failure12: true,
  },
  {
    scenario: "You started singing after a few seconds the entire graveyard was full of diffrent voices. Who knew that the dead really liked singing... Just kidding, you were so exhausted from all the running you started hallucinating. The guards easily tracked you down and your escape attempt was over.",
    quit: true,
    failure13: true,
  },
  {
    scenario: "You quickly ran over to Lord Dudding's palace. You ran so quickly, that there was no ghost in the world that could catch you. With your horror story you managed to get through the guards and meet Dudding himself.",
    quit: true,
    ending10: true,
  },
  //Bar
  {
    scenario: "You ran into the bar and had to think quick before the guards came.",
    reply1: "Your eyes quickly scouted out the room and noticed a table full of people that had exactly one open seat.",
    answer1: "Blend in",
    reply2: "You dashed to the back door. You were ready to open it and leap out of the bar, but the door said otherwise. It was locked.",
    answer2: "Run out of the bar through the back door",
    skipto2: 59,
    reply3: "He smiled and said sure.",
    answer3: "Ask the bartender for a place to hide",
    skipto3: 65,
  },
  //Bar Blend
  {
    scenario: "You quickly rushed down to the table and sat down. Everyone at the table looked at you. One guy asked you to leave.",
    reply1: 'You quickly said: "Sorry, I have a few guards looking for me. I really need a place to hide."',
    answer1: "Explain yourself",
    reply2: "You ignored him, but the drunkard didn't do the same.",
    answer2: "Keep your head down",
    skipto2: 58,
  },
  {
    scenario: "Everybody laughed. \"Ha ha, you stole something? Don't worry, we got you.\"<br>And so they did. Soon the guards came into the bar searched every single corner but didn't find you. You thanked everybody and headed out.",
  },
  {
    scenario: "All you had to do is go to Lord Dudding. That was as easy to do as to say.",
    quit: true,
    ending11: true,
  },
  {
    scenario: "The guy picked you up and pinned to the wall. He said \"That chair was for my friend and as I can tell, you ain't my friend\". At the same time the front doors opened, and 2 guards came in. Too bad you and the guy who pinned you to the wall easily grabbed other people's attension. The guards easily recognised you and you were a dead man.",
    quit: true,
    failure14: true,
  },
  //Bar Door
  {
    scenario: "At the same time when you were wrestling with the door, the entrance opened, and 2 guards came in. You quickly panicked and ran up the stairs to the second floor. Too bad it was empty. There were no places to hide in. The only thing that stood out to you was a giant wardrobe.",
    answer1: "Hide inside the wardrobe",
    answer2: "Hide behind the wardrobe",
    skipto2: 61,
  },
  {
    scenario: "The wardrobe was big and so were its doors. It took you quite a few seconds just to open the door. Closing the doors from the inside would have been difficult too, but the guards were already on the second floor. You were caught",
    quit: true,
    failure15: true,
  },
  {
    scenario: "You quickly slipped behind the wardrobe. It was ancient. Only a few seconds later the guards were already on the second floor. They quickly checked the insides of the wardrobe, they checked under the bed and then left. That is it, they left.",
  },
  {
    scenario: "Now that the guards were no longer on the same floor, you had to think of a way to escape the bar. There were only 2 real ways. You could walk out through the front door and hope that the guards have already left the bar, or you can jump out the window and hope you don't get injured.",
    reply1: "And so you went back to the first floor, you went throught the door and surprisingly there were no guard in sight. You sighed with relief. You were finally free.",
    answer1: "Walk out through the front door",
    skipto1: 64,
    answer2: "Jump through the window",
  },
  {
    scenario: "You jumped through the window. At the exact moment, your feet left the ground, you started feeling like you were falling to your death. And indeed, you died. You weren't a 20-year-old who could do anything he wanted. Your body failed you and so you became a puddle of organs.",
    quit: true,
    failure16: true,
  },
  {
    scenario: "Although you were happy, you remembered what you had to do quite quickly. You ran to warn Lord Dudding. He had to be aware of the conspiracy against him.",
    quit: true,
    ending12: true,
  },
  //Bar Bartender
  {
    scenario: "The bartender lead you to the cellar. It was full of food and drinks. You were almost ready to have a feast, but then remembered that this wasn't a nice way to thank the bartender. While hungry, you were safe for now atleast.",
  },
  {
    scenario: "Or at least that was what you thought. A few minutes later the door opened, and you saw 2 guards came in. Behind them was the bartender, playing with a bag of golden coins.",
    quit: true,
    failure17: true,
  },
];