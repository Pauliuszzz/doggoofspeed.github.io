scenarios = [
  {
		"scenario": "You woke up on the ground. It seems that you weren't the only one unlucky. People were sick due to malnutrition and they couldn't spare you a bed. The monastery was the only place they could go.",
		"reply1": "They give you free food and you ask for more? That is very rude. It is no surprize they kicked you out for being a spoiled brat. ",
		"answer1": "Ask for more food",
		"reply2": "You thanked the monks and headed out.",
		"answer2": "Thank the monks and head out",
  },
  {
		"scenario": "From the monastery you went to the main street. The air in Ìgil... It is full of life, unlike you. To feel happy you only need one thing - money.",
		"reply1": "The saint money tree was were people prayed to tree god. You managed to steal a coin from the pedestal.",
		"answer1": "Go to the money tree",
		"reply2": "They don't need any workers, but they have some one time work. Apparently somebody stole a coin from under the saint money tree. You found out that there were recent footprints leading to the bar. Too bad it is full of drunks. Eh... They gave you a coin for your effort.",
		"answer2": "Go back to the monastery and ask if they need any workers",
  },
  {
		"scenario": "You were walking through the street when you overheard two guards talking.<br>- Eh, did ya see those bastards fighting? They were outa their minds<br>- Ye, it was crazy. Don't you want to join those bastards at the bar? You are pretty good.<br>- Nah, man. My boss said there is a bandit camp nearby. Duty is duty",
  },
  {
		"scenario": "It was late at night when you overheard a  woman screaming:<br>A thieve! Give back my belongings or I'll have to notify the guards. Your face will be on the board. The whole town will try to catch ya!",
		"reply1": "It was dark and you were tired. You didn't manage to catch the thieve.",
		"answer1": "Try to catch the thief",
		"reply2": "After a minute you lost him. It was dark and you were tired. Tomorrow will be interesting.",
		"answer2": "Follow the thief to his hideout",
		"reply3": "Umm... you ignored it... Aaand that is it.",
		"answer3": "Ignore it",
  },
  {
		"scenario": "You had a night's sleep. In the morning you decided to find some work and get some money, to stop doing nothing and to do something, to stand up and move your hands to improve your society, or yourself, to stop singing around, to stop rolling on the ground, to stop yawning all day round.",
		"answer1": "Go to the bar",
		"answer2": "Read the announcement board",
		"skipto2": 15,
  },
  //Bar
  {
		"scenario": "The bar is fairly empty. There are maybe 5 people excluding you. They are all sitting at the same table. Whispering to each other.",
		"answer1": "Sneak up on them and try to overhear something.",
    "answer2": "Ask them if you could help.",
    "skipto2": 7,
		"answer3": "Ask the bartender if he has a job",
		"skipto3": 10,
  },
  //Brawl
  {
		"scenario": "You tried to hide as best as you could, but you were the only person other than them, so you were cought quite quickly. Their leader stood up and decided to have a fight with you. Little did he know, working the ground requires strong arms. Little did he know... Knocking him out was easier than you would have thought. His friends decided to run away, even though the could have easily outnumbered you. My guess is that they already were in deep trouble.",
  },
  {
    "scenario": "You took some coins from the knocked out bandit. I doubt they were his anyways.",
    "quit": true,
		"ending1": true
  },
  //Robberry
  {
		"scenario": "You approached the table while the thugs were talking. You interrupted them by asking if they need help. They were quite sceptical of you. For a good reason.",
  },	
  {
		"scenario": "They accepted you on one condition - telling somebody about their plans would cost your head. They were planning to rob lord Duding's mother's grave. They heard she was burried with a good amount of coin.",
		"reply1": "You can't. Remember about your head.",
		"answer1": "Run away, and tell the guards about their plan.",
		"reply2": "Very well. I see you value your head.",
		"answer2": "Go on with their plan.",
  },
	{
    "scenario": "It was dark. Very dark. You got the \"Pleasure\" of digging the hole. You had experience (in digging of course). Then you finally saw it. Nothing spectacular, a wooden coffin. But the interesting stuff is inside. You got your fair share.",
    "quit": true,
		"ending2": true
  },
  //Fight Club
  {
		"scenario": "You asked the bartender if he has a job. And well, he does. Apparently he runs a fight club. This may be a chance to get some money... Sadly you aren't a skilled fighter. Why not bet? You have a coin after all!",
  },
  {
		"scenario": "Lucky for you, the club is open every evening. You can bet on:<br>Rogan Starag - the richest brawler in the club.<br>Edgar Wiggins - the small and quick one.<br>Nilus Stone - his name doesn't decieve. He is as strong as a rock.",
		"answer1": "Rogan Starrag",
    "answer2": "Edgar Wiggins",
    "skipto2": 13,
		"answer3": "Nilus Stone",
		"skipto3": 14,
  },
  {
    "scenario": "You bid for Rogan. He won both matches. Could he be bring other competitors? Eh, it doesn't matter anyways. You got your winnigs.",
    "quit": true,
		"ending3": true
  },
  {
    "scenario": "You bid for Edgar. He lost against Rogan, but won against Nilus. You came out even. 1 coin is better than no coin.",
    "quit": true,
		"ending4": true
  },
  {
    "scenario": "You bid for Nilus. Sadly he lost both matches. Apparently he had a headache or something. The bartender feeling sorry for you, gave back your coin",
    "quit": true,
		"ending5": true
  },
  //Anouncement Board
  {
		"scenario": "The announcement board has 3 job offers:<br>1. An agressive mice infestation was reported in the lumberjack's house nearby. For more info and payment, contact the lumberjack.<br>2. Grave robbers have been seen last night in the Ìgil's graveyard. For more info, contact The bailiff.<br>3. Men are needed to help town's guards fight bandits. For more info, contact Lord Duding.",
		"answer1": "Mice infestation",
		"answer2": "Grave robbers",
		"skipto2": 19,
		"answer3": "Bandit hunt",
		"skipto3": 24,
  },
  //Mice Infestation
  {
		"scenario": "You know mice and mice know you. This is a job for a professional. You contacted the lumberjack and he explained the situation. Apparently the mice weren't there for no reason. The woodcutter suspects that the mice were brought as an act of vengeance, since he has a lot of enemies in this city.",
  },
  {
		"scenario": "You came to the house to investigate. There are a few cracks that mice can get through... The house is also quite dirty, but then again, apparently the mice were brought in.",
		"answer1": "Recommend putting mint all over the house",
		"answer2": "Recommend getting a cat",
		"answer3": "Recommend sealing all the gaps",
  },
  {
    "scenario": "You got some money. You know, that could be a very profitable buisness... But then again there are only so many mice that need to be removed...",
    "quit": true,
		"ending6": true
  },	
  //Grave Robbers
  {
		"scenario": "You contacted the bailiff and he informed you of what your job was. Apparently last night 5 men were seen digging up a grave and stealing all the valuables inside. What's worse is that the grave that they robbed was Lord Duding's recently deceases father's. The bailif has suspissions that the gang will try to dig up some other grave tonight. They won't stop, untill they see punisment.",
  },
  {
		"scenario": "Your goal was to find out what the men\'s names were. It was the middle of the night. 2, maybe 3 am. You were hinding behind a tombstone when you heard something. They were there!",
  },
  {
		"scenario": "It was your time to shine. You saw 6 people tonight. They must have recruited someone new. You could clearly see everyone, except the guy digging the hole.",
    "answer1": "Focus on remembering their faces",
    "answer2": "Focus on remembering their physical features",
    "skipto2": 23,
    "answer3": "Focus on remembering their clothing",
    "skipto3": 23   
  },
  {
    "scenario": "You went to the baillif later that morning and drew him all the faces you could see. He thanked you and rewarded handsomely.",
    "quit": true,
		"ending7": true
  },
  {
    "scenario": "The baillif wasn't satisfied with the information you gave. He wanted something more recognisible... Like their face! He still paid you. A job is a job.",
    "quit": true,
		"ending8": true
  },
  //Bandit Hunt
  {
		"scenario": "You went to Lord Dudding. He already had 4 villagers who were ready to fight the bandit scum. You were the 5th.",
  },	
  {
		"scenario": "You went east looking for the bandits. They were last seen in a small forest. You were a few kilometers from Ìgil when 2 of the villagers decided to attack the other 3 villagers, including me. While they attacked unexpectedly, we had the advantage in numbers. They managed to injure one of us, but after a while they realised, that if they continue fighting, they'll lose. Scared, they decided to run away.",
		"answer1": "Try to catch them",
    "answer2": "Make sure the injured villager survives.",
    "skipto2": 27
  },
  {
    "scenario": "You tried to catch them, but you weren't fast enough. When you came back to the injured villager, he was dead. Lord Dudding had mixed feelings. He was happy that the bandit's identities were revealed, but extremely heart broken by the villager's death. You got your payment.",
    "quit": true,
		"ending9": true
  },
  {
		"scenario": "You both made sure to keep the villager alive. You already know who the bandits were. You already had done your job. Lord Dudding was extremely happy of how the mission turned out. No one die after all. You got your payment.",
    "quit": true,
		"ending10": true
  },
]