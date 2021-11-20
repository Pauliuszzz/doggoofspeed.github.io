var scenarios = [
  {
    scenario: "You entered the house of Lord Dudding. To your surprise, it was fairly simple and humble house - it had simple furniture and your eyes couldn't find any extravagant decorations. Anyway, you had little downtime. Dudding probably found the guard's synopsis of your story to be quite urgent and interesting, so you had his full attention.",
    reply1: "You wasted no time and in 10 minutes Dudding knew everything about the kidnappings and his brother's plot.",
    answer1: "Retell the story as it happened",
    reply2: "You wasted some time talking about your heroic feats and other nonsense, but Dudding enjoyed your rare jokes and in 20 minutes knew everything.",
    answer2: "Retell the story with a couple exaggerations",
    reply3: "You started telling your tale. Although at first Dudding was quite interested, by the time you mentioned dragons, he had had enough of your nonsense and you were instructed you to leave.",
    answer3: "Retell the story with a lot of exaggerations",
    skipto3: 26
  },
  {
    scenario: "After thinking about the problem for a minute, Dudding asked you: \"Who do you think we should stop first?\"",
    answer1: "Brother Theo",
    answer2: "Rogan Starrag",
    skipto2: 10,
    answer3: "Finn Dudding",
    skipto3: 19,
    
  },
  //Brother Theo
  {
    scenario: "Brother Theo was the first pillar that was holding up Finn's empire. He used his status as a monk to shield himself from criticism and he managed to gain a lot of trust and power over the locals. He used the sermons to share his thoughts on why Dudding is a bad lord and should be replaced. Not only that, by praising Finn and his tower, he prepared the citizens for the planned change of leadership. He also lured his critics into swamps where he killed them.",
  },
  {
    scenario: "Brother Theo was a highly influential man and thus he could end all accusations very easily. He had the monastery under his thumb, which itself was very secretive. Not only that, his regular preaching in the church means that most locals support him and see him in a positive light. First you need a way to turn the locals on Theo.",
    reply1: "You gave away around... 10 fliers. Not only that, I am pretty sure only all of them were used as kindling.",
    answer1: "Share flyers to inform people of Theo's wrongdoings",
    skipto1: 27,
    reply2: "A lot of people bought the newspaper and a lot of people read your article. The exposé was so popular that the latest issue became a best seller.",
    answer2: "Expose his wrongdoings in the newspaper",
    reply3: "The guards spoke but no one listened. Unsurprisingly, most people ignored the warnings and assumed that somebody was trying to frame Theo.",
    answer3: "Ask the guards to inform every one of the wrongdoings",
    skipto3: 27
  },
  {
    scenario: "You did a good job exposing Theo's evil and the townsfolk were on your side. You were ready to start the protest. You quickly visited Dudding and he was ready as well. All the guards were in place. You finally had the opportunity to end Theo.",
    answer1: "Start protest"
  },
  {
    scenario: "Brother Theo was something of a shadow - always present, but impossible to catch. The guards' job was to do exactly that. Although the citizens were on your side, you still had to catch the snake. You had to find him yourself. That part of the job, depending on how you look at it, was either given to you because the guards wanted to let you enact revenge, or because they just wanted to use you as an excuse to give away their duties.",
  },
  {
    scenario: "After making sure that the villagers agreed with your decision to catch Theo, you still had to, well, find him...",
    reply1: "When you entered the monastery, it was in pure chaos. Apparently, just a few minutes ago, the monks found their overseer bathing in blood with a dagger in his chest. You were on the right track. When you asked the monks to see if any of them were missing, they quickly gathered and two monks were missing. The overseer and Brother Theo.",
    answer1: "Look at the monastery",
    reply2: "You looked carefully and you interrogated all employees. Sadly, they were skittish due to the overwhelming number of guards. The only name you were able to obtain was Rogan. Sadly, last time you checked, Rogan wasn't Theo.",
    answer2: "Look at the bar",
    skipto2: 28,
    reply3: "Although you tried your best, the only suspicious person the merchants mentioned was a guy named Finn. Apparently, many of his customers have gone missing. Either way, he was not a monk and he was not Theo.",
    answer3: "Talk to the merchants who came here to sell flowers",
    skipto3: 28
  },
  {
    scenario: "Although the monks were known for their secrecy, the recent tragedy had made them surprisingly open. They quickly told you that Theo had a secret underground house in the adjacent forest.<br>After following the monks to the approximate location of the den, you were left alone. You had no time to lose. You had to figure out where he was hiding.",
    reply1: "You tried to dig, but after not hitting anything of substance for a good amount of time, you lost the will to go on. Of course - how could he have placed the leaves while being underground?",
    answer1: "Try to dig under the suspicious pile of leaves",
    skipto1: 28,
    reply2: "There was a lot of moss and you had to hurry. The pile of discarded moss quickly grew taller and taller. Luckily after a good 30 minutes you found something interesting. You found a trapdoor.",
    answer2: "Look for hidden entrances under the moss",
  },
  {
    scenario: "And there he was. Theo was quietly praying and did not resist arrest. After presenting him to the people you asked them for their opinion. They wanted to see him dead, but as you were the reason why he was caught, the crowd wanted you to decide his fate.",
    reply1: "The next day Theo's head was placed on a spike and showcased in the town square as a reminder to all criminals of their grim fate.",
    answer1: "Kill him",
    reply2: "That was the first night Theo spent in jail. It was certainly not the last.",
    answer2: "Incarcerate him",
    quit: true,
    ending1: true
  },
  //Rogan Starrag
  {
    scenario: "Even before starting the search for Rogan you knew where he was. He loved fighting in the secret boxing ring under the bar. This gave you a huge advantage. When you were thinking up a plan on how to defeat him, one of the soldiers suggested infiltrating the fight club and killing him in battle. The guard was afraid that otherwise the other members would defend Rogan and make a regular confrontation with the guards more difficult. And so it was decided - you would have to infiltrate the club and kill Rogan right then and there.",
  },
  {
    scenario: "Of course, you weren't going to play fairly. You had to guarantee the win. Your opponent will be a professional fighter after all.",
    reply1: "When you asked the local pharmacy for some performance-enchanting drugs the only thing they could give you was a cup of coffee. Well good luck :)",
    answer1: "Try using doping",
    reply2: "You took a cool little dagger and hid it inside your pocket. Good luck :)",
    answer2: "Bring a knife to a fist fight",
    skipto2: 14,
    reply3: "Not sure how much this can help, but ok. Good luck :)",
    answer3: "Grab a bottle of cyanide",
    skipto3: 16,
  },
  {
    scenario: "You entered the bar. Although the bartender suggested a drink, you still had the warm aftertaste of coffee in your mouth. You told him \"I wanna fight\". He understood you and after a few moments you were in the cellar. There were a lot of people. Apparently, the prize for winning was a bottle of champagne.<br>You got ready and 10 minutes later it was your time to shine.",
  },
  {
    scenario: "You entered the ring. You were confident and full of energy. After the count-down reached 1, your view instantly went black.<br>You woke up in the dumpster bin the next morning. Just as you were regaining your consciousness, an outburst of sound caught your attention. After coming to investigate you saw something shocking. Lord Dudding's house was on fire.",
    quit: true,
    failure: true
  },
  {
    scenario: "You entered the bar. Although the bartender suggested a drink, you declined. Handling a knife while drunk is practically suicide. You told him \"I wanna battle\". He understood you and after a few moments you were in the cellar. There were a lot of people. Apparently, the prize for winning was a bottle of champagne.<br>You got ready and 10 minutes later it was your time to shine.",
  },
  {
    scenario: "You entered the ring. You were confident and full of energy. After the count-down reached 1, you took out your knife and attacked. To your surprise Rogan's face was worryingly calm. He was a professional fighter and he knew how to counter knives. You were quickly disarmed and soon you lost consciousness.<br>You woke up in a dumpster bin early next morning. Just as you were waking up, a sudden outburst of sound caught your attention. After coming to investigate you saw something shocking. Lord Dudding's house was on fire.",
    quit: true,
    failure: true
  },
  {
    scenario: "You entered the bar. Although the bartender suggested a drink, you declined and told him \"I wanna battle\". He understood you and after a few moments you were in the cellar. There were a lot of people. Apparently, the prize for winning was a bottle of champagne. After hearing that you realised that cyanide was the correct choice. You quickly found the promised bottle of champagne, inserted the needle and squeezed in a good amount of poison.<br>You got ready and 10 minutes later it was your time to shine.",
  },
  {
    scenario: "You entered the ring. Unlike your opponent's, your goal was to lose. You didn't even put up a fight and were thrown out after the inevitable loss. But you were happy. You knew that Rogan would soon cease living.",
  },
  {
    scenario: "And you were right. An hour later you heard a loud noise coming from the bar. Rogan was dead.",
    quit: true,
    ending2: true
  },
  //Finn Dudding
  {
    scenario: "Finn Dudding was a man known for his wealth. He was aware of your escape and he knew that his days were about to end. Sadly, exposing his wrongdoings didn't do anything. That was all because Finn had a bunch of mercenaries that he hired to make sure that the captured people couldn't escape.",
  },
  {
    scenario: "As the day of your confrontation grew closer, the tension in the air grew. Although during the last few days Finn stayed inside his house, the number of black-wearing mercenaries grew and grew.",
  },
  {
    scenario: "The next day you wake up and got the long-awaited news - the reinforcements that were meant to aid the city's guard were finally here. An armed confrontation wasn't unlikely and you had to make sure you were successful.",
  },
  {
    scenario: "You and the mob of guards stood in front of Finn's house. Mercenaries that were waiting there made a huge wall. One of the guards read out all of Finn's crimes. Silence ensued.",
    answer1: "Threaten to attack",
    answer2: "Try to explain that any struggle is worthless",
    answer3: "Promise a smaller punishment if he cooperates",
    
  },
  {
    scenario: "As you were finishing the sentence, the doors of the mansion opened. Finn came out. He didn't struggle. He didn't resist. He came along with the guards.",
  },
  {
    scenario: "Strangely enough, the guards lead Finn not to jail, but to Lord Dudding's house. It is possible that Dudding wanted to have some brotherly talk, but nevertheless this was highly unorthodox.",
  },
  {
    scenario: "That was the last time anyone saw Finn Dudding.",
    quit: true,
    ending3: true
  },
  //Failures
  {
    scenario: "Sadly your creative endeavors were unwelcome and you lost your only chance to convince Lord Dudding",
    quit: true,
    failure: true
  },
  {
    scenario: "You failed to change peoples' opinion of Theo. Not only that, your actions warned him of upcoming danger and he was able to successfully flee.",
    quit: true,
    failure: true
  },
  {
    scenario: "You failed to find brother Theo. Not only that, thanks to your incompetence, he was able to successfully flee.",
    quit: true,
    failure: true
  },
];