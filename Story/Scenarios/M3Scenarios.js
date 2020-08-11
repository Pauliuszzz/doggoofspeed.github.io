var scenarios = [
    {
		"scenario": "You now had some money... You were already in alot better position than the others living here. You bought a little shed in the outskirts of Ìgil. The future was looking bright.",
    },
    {
      "scenario": "It was a lovely day, when people began building something in the main street. They were building flower stands. What could they be celebrating was the only question in your head.",
      "reply1": "\"It's the great flower festival tommorow. Don't you know?\" An old lady said. She must know what she is talking about. She is old after all",
      "answer1": "Ask why they are building flower stands",
      "skipto1": 6,
      "answer2": "Buy some flowers",
    },
    //Flowers
    {
      "scenario": "You were about to buy some daisies, but then you noticed how overpriced they are and had to rethink the decision. It was a total ripoff.",
      "answer1": "Still buy the flowers",
      "answer2": "Ask for a discount",
      "skipto2": 3,
      "answer3": "Don't buy the flowers",
      "skipto3": 6,
    },
    {
      "scenario": "You looked at your wallet, and it was empty. You had no choise but to go back home and get some money. When you came back, the price was even higher. That slimy merchant!",
      "answer1": "Pay the premium",
      "skipto1": 4,
      "answer2": "Don't buy the flowers",
      "skipto2": 6,
    },
    {
      "scenario": "You asked for a discount. And expected one too, but oh boy how wrong you were. The seller decided to increase the already absurd price. You were furiuos, but intrigued.",
      "answer1": "Pay the premium",
      "answer2": "Don't buy the flowers",
      "skipto2": 6,
    },
    {
      "scenario": "You got the flowers... But at what cost?",
    },
    {
      "scenario": "At a very high cost infact! Paying so much in public was a bad idea. Some thugs saw you and your money. They came over, hit you in your head and your vision went dark...",
      "quit": true,
      "ending1": true
    },
    //Continues The Main Story
    {
      "scenario": "You went to the main street. It was full of life - tons of people, lots of goods (most of them were flowers). It was all crazy and colorful, but one interesting sign cought your eyes. It was Finn's stand.",
      "reply1": "That was a weird thought, but you still did it. You saw around 7 stands. They were all different in the same way.",
      "answer1": "Count how many stands there are",
      "reply2": "The prices were... Oh god! The prices were absurd. The flowers had to be beautiful, and some were.",
      "answer2": "Check the prices",
      "reply3": "You were about to steal a flower when you started thinking about what went so wrong in you life that you resorted to stealing things that can literally be taken from the fields for free anyway.",
      "answer3": "Try to shoplift",
    },
    {
      "scenario": "You took a closer look at the extraordinary Finn's stand...",
    },
    {
      "scenario": "Nothing was really out of place, except the high amount of flowers, although I guess it is the Flower fest after all. Also, the person behind the counter - \"Finn\" was kind of suspicious",
      "answer1": "Keep an eye on the suspicious trader",
      "answer2": "Go around and search for flowers to sell",
      "skipto2": 14,
    },
    //Suspicious Merchant
    {
      "scenario": "You were going around and around the main street for the fifth time when suddenly the merchant left his kiosk. Your curiosity was aroused.",
      "answer1": "Take a closer look at his kiosk",
      "answer2": "Try to tail him",
      "skipto2": 11,
    },
    {
      "scenario": "You took a look at his work place and you found nothing extraordinary... Except some papers. They were about some \"Tower of Igil\". Wierd... No such tower existed. Suddenly your head started aching and your vision went dark... Perhaps you saw something you shouldn't have.",
      "quit": true,
      "ending2": true
    },
    {
      "scenario": "He went to a construction site. The people working there wore fairly nice clothes, and looked overall wealthy. It was weird to see them work such a dirty job.",
      "answer1": "Ask what they are building",
      "answer2": "Continue tailing the merchant",
      "skipto2": 13,
    },
    {
      "scenario": "Apparently they were building a tower... They also warned you not to tresspass, apparently things could get ugly. And they definately got ugly. Soon somebody hit you in the head. You lost your consciounsess",
      "quit": true,
      "ending3": true
    },
    {
      "scenario": "You tried tailing the merchant as long as you could, but somebody saw and decided to stop you. Your vision went dark...",
      "quit": true,
      "ending4": true
    },
    //Picking flowers
    {
      "scenario": "You went into the fields and unsurprisingly they were empty. Not a single flower. Those foolish people destroying nature...",
      "answer1": "Continue the search in the forest.",
      "answer2": "Continue and search the hills.",
      "skipto2": 18,
    },
    //Forest
    {
      "scenario": "While going through the forest you saw a recently abandoned camp. It was left in a horrible condition. There were some flowers in the camp. Maybe the people who stopped here were flower merchants...",
      "answer1": "Just take the flowers and get out",
      "answer2": "Search around the camp",
      "skipto2": 17,
    },
    {
      "scenario": "You had hopes, that you could sell the flowers at a high margin, but you weren't the only one with the eyes on the prize. Somebody from behind saw your flowers and attacked you. Your eyes went dark.",
      "quit": true,
      "ending5": true
    },
    {
      "scenario": "In one tent you saw a letter. It was about a construction of some tower. The handwriting was awful, so you didn't understand much of it. Sadly, the camp only looked empty. There was one person still sleeping in another tent. Your walking woke him up. He said something and then proceded to kick your ass so hard your vision went dark.",
      "quit": true,
      "ending6": true
    },
    //Hills
    {
      "scenario": "There were quite a lot of flowers in the hills. You managed to take quite a bunch. You went to the town, put the flowers down, set a price and stood there. It could have been the sun, the competing merchants, or something else entirely, but your vision went dark.",
      "quit": true,
      "ending7": true
    },
];