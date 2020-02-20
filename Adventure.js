	var b;
	var ans = 1;
	int *hp = new int;
	float *x = new float;
	*x = 0;
	printf
		("Hello traveller.\nYour goal is to collect\n1000Xp.\nYou can exit at anytime\nby pressing {0} or {>10}.\nChoose a difficulty:\nEasy {1}\nChallenging {2}\nQuite Evil {>3}\n\n");
	cin >> ans;
	if (ans == 1)
	{
		*hp = 10;
	}
	if (ans == 2)
	{
		*hp = 5;
	}
	if (ans >= 3)
	{
		*hp = 3;
	}
	do
	{
		cout << "Your XP: " << *x << endl;
		cout << "Your HP: " << *hp << endl;
		
		
		srand(time(0));
		b = rand() % 15 + 1;

		// Freddie Mercury
		if (b == 1)
		{
			cout <<
				"\nWhile traveling you meet\nFreddie Mercury. What will you do? Insult him, {1} or ask him how he got AIDS {>1}.\n\n";
			cin >> ans;
			if (ans == 1)
			{
				cout <<
					"You tell him ‘‘Freddie Mercury? You should be Freddie Uranus!’’\n\n";
				*x = *x + 150;
			}
			if (ans >= 2)
			{
				cout << "He said that he played butt russian roulette and lost.\n\n";
			}
		}
		//Kitten Bob
		if (b == 2)
		{
			cout <<
				"\nAfter walking for 10 minutes you meet Bob the Kitten. You can give him some milk {1}, or kill him {>1}.\n\n";
			cin >> ans;
			if (ans == 1)
			{
				cout <<
					"Kitten was quite happy, since the last time he drank milk, was when his mom still fed him.\n\n";
				*x = *x + 150;
			}
			if (ans >= 2)
			{
				cout <<
					"You attacked, but he was ready. 20 other kittens jumped you and music started playing:\nEverybody was kung fu fighting, (ooogh, aaagh).\nThose CATS were fast as lightning (ooogh, aaagh).\nIt was very very frightening, (ooogh, aaagh).\nbut they fought with expert timing (ooogh, aaagh).\n\n";
				*hp = *hp - 1;
			}
		}
		// Banditas
		if (b == 3)
		{
			cout <<
				"\nYou were calmly walking, until a bandit jumped you. You woke up tied up. You can shout for help {1}, or try to flatter him {>1}.\n\n";
			cin >> ans;
			if (ans == 1)
			{
				cout <<
					"You started shouting for help. Lucky you, the bandit's name was Help. He got scared, thinking you are a magician, and let you go.\n\n";
				*x = *x + 150;
			}
			if (ans >= 2)
			{
				cout <<
					"You tried to flatter him, but the bandit was highly depressed, and misstook your compliments as irony. He was so angry that he didn't even see how you ran away.\n\n";
			}
		}
		// Žvaigždė
		if (b == 4)
		{
			cout <<
				"\nYou were travelling at night, when a shooting star appeared. You can think of a wish {1}, or continue walking {>1}.\n\n";
			cin >> ans;
			if (ans == 1)
			{
				cout <<
					"While you were thinking of a wish the star fell down... \n\n ...on your head, it started bleeding.\n\n";
				*hp = *hp - 1;
			}
			if (ans >= 2)
			{
				cout << "You continued walking and nothing happened.\n\n";
			}
		}
		// Varlė
		if (b == 5)
		{
			cout <<
				"\nIt was a rainy day when you saw an abandoned wagon and decided to hide there for a bit.\nYou found a frog there. You can kiss it {1}, or eat it {>1}.\n\n";
			cin >> ans;
			if (ans == 1)
			{
				cout << "You kissed it and nothing happened. Such a surprise!\n\n";
				*x = *x + 150;
			}
			if (ans >= 2)
			{
				cout <<
					"You eat it and become french. Why? Because the french eat frogs, and my sense of humour is trash.\n\n";
				*x = *x + 150;
			}
		}
		// Naktis
		if (b == 6)
		{
			cout <<
				"\nThe sun is setting and you want to sleep. You can try to sleep in a tree {1}, or on a beach{>1}\n\n";
			cin >> ans;
			if (ans == 1)
			{
				cout <<
					"You start sleeping on a tree, but end up sleeping on the ground. You now have a headache.\n\n";
				*hp = *hp - 1;
			}
			if (ans >= 2)
			{
				cout <<
					"You get woken up by the waves that tried to choke you. You are fairly well rested.\n\n";
				*x = *x + 150;
				*hp = *hp + 1;
			}
		}
		// Vilkų Namas
		if (b == 7)
		{
			cout <<
				"\nYou find a strange seemingly abandoned house. You can knock on the door {1}, or just go through {>1}. \n\n";
			cin >> ans;
			if (ans == 1)
			{
				cout <<
					"You knock on the door, unfortunately wolves hear the knock and attack you. You are injured and lucky to be alive.\n";
				*hp = *hp - 1;
			}
			if (ans >= 2)
			{
				cout << "You open the doors and find too many ‘‘Viagra’’ pills.\n";
				*x = *x + 150;
				*hp = *hp + 1;
			}
		}
		// Lėlė
		if (b == 8)
		{
			cout << "\nYou find a doll on the road. You can take it {1}, or leave it {>1}\n\n";
			cin >> ans;
			if (ans == 1)
			{
				cout <<
					"You take the doll. A cursed doll. Congratulations! Now you are unable to have a good rest!\n";
				*hp = *hp - 1;
			}
			if (ans >= 2)
			{
				cout <<
					"You left it. It seems like it was a voodoo doll because 2 hours later your whole body started aching. Most likely somebody ran over it.\n";
				*hp = *hp - 1;
			}
		}
		// Antaniukas
		if (b == 9)
		{
			cout <<
				"\nWhile walking you encounter Antaniukas - the car model hobbyist. You can talk to him {1}, or compliment him {>1}.\n\n";
			cin >> ans;
			if (ans == 1)
			{
				cout <<
					"You start talking, he tells you his deepest desires. He starts talking so enthusiastically, he starts crying over the fact that he doesn't have ‘“Ford Cactus”.\n";
			}
			if (ans >= 2)
			{
				cout << "He was so happy, because somebody was actually nice to him. \n";
				*x = *x + 150;
			}
		}
		// Tigriukas Paulius
		if (b == 10)
		{
			cout <<
				"\nYou were walking through a deep forest, when you met Paulius the Tiger. You can shout at him {1}, or feed him {>1}.\n\n";
			cin >> ans;
			if (ans == 1)
			{
				cout << "You start shouting and he starts crying, runs back home.\n";
				*x = *x + 150;
			}
			if (ans >= 2)
			{
				cout <<
					"You give him some meat, sadly he eats not only the meat, but your arm too!\n";
				*hp = *hp - 1;
			}
		}
		// Airplane
		if (b == 11)
		{
			cout <<
				"\nIt was a calm afternoon when you stumbled upon a crashed airplane. You can search the inside {1}, or try to power it up {>1}.\n\n";
			cin >> ans;
			if (ans == 1)
			{
				cout <<
					"You find a secret  compartment that contains white flour - cocaine. Seems like a win to me!\n";
				*x = *x + 150;
				*hp = *hp + 1;
			}
			if (ans >= 2)
			{
				cout << "You try to power it up, but the badly damaged engine blows up.\n";
				*hp = *hp - 1;
			}
		}


		// Circus
		if (b == 12)
		{
			cout <<
				"\nYou were sleeping,when you overheard festive music. After going to the source, you found a travelling circus. You can pet a zebra {1}, or talk to a clown sitting on a bench {>1}\n\n";
			cin >> ans;
			if (ans == 1)
			{
				cout <<
					"After petting the zebra, you notice that your hands are grey. You look at the animal and see palm prints, that show its real fur. After closer inspection you are now sure it is a horse.\n";
				*x = *x + 150;
			}
			if (ans >= 2)
			{
				cout <<
					"You go to the clown, but he doesn't respond. He just watches the sunset holding his 99 baloons.\n";
			}
		}

		// Stasiukas the Donkey
		if (b == 13)
		{
			cout <<
				"\nWhile walking through a quite densly populated area you hear a donkey. A donkey who is screeching in pain. You can help it {1}, or take it for yourself {>1}.\n\n";
			cin >> ans;
			if (ans == 1)
			{
				cout <<
					"After you help him, the donkey introduces himself. Apparently he is the Stasiukas - the town mayor's personal donkey. Such a weird town this is... \n";
				*x = *x + 150;
			}
			if (ans >= 2)
			{
				cout <<
					"You try to take him and the donkey starts singing. Congrats! You, a person who looks like Shrek, are wrestling with a crazy donkey. Sadly he didn't see the synergy between you both and ran off.\n";
			}
		}
		// Poppies
		if (b == 14)
		{
			cout <<
				"\nThe path stops next to a poppy field. The road can be seen continuing on the other side of this red sea of flowers. You can go straight through {1}, or walk around {>1}.\n\n";
			cin >> ans;
			if (ans == 1)
			{
				cout <<
					"After 1 hour you are safely on back on the road. Now you even have some sleeping pills -poppies.\n\n";
				*x = *x + 150;
				*hp = *hp + 1;
			}
			if (ans >= 2)
			{
				cout <<
					"When walking you hear something behind the bushes. Oh no. OH NO. OH FUCK!\n\n";
				*hp = *hp - 1;
			}
		}
		//Sugar house
		if (b == 15)
		{
			cout <<
				"\nWhile walking through a forest you find a rather sweet looking house. It may or may not be made out of candy. You can knock on the door {1}, or you can try to eat the house {2}.\n\n";
			cin >> ans;
			if (ans == 1)
			{
				cout <<
					"The door opens an you see a rather old black woman who can only say „Sweetie“ for some reason. She gives you some cookies, and wishes a lucky travel.\n\n";
				*x = *x + 150;
				*hp = *hp + 1;
			}
			if (ans >= 2)
			{
				cout <<
					"You try to eat it, but it's wood. Why would somebody paint a house like this? Anyways, your mouth hurts now.\n\n";
				*hp = *hp - 1;
				}
		}
		if (ans == 0 || ans > 10)
		{
			cout << "Exiting...";
			exit(1);
		}
		ans = 1;
		cout << endl << "– =͟͟͞͞ =͟͟͞͞ ﾍ( °–°)ﾉ" << endl;
		sleep(8);
	}
	while (*hp > 0 && *x < 1000 && ans != 0 && ans );
	
	if (ans == 0 || ans > 10)
	{
		cout << "Exiting";
		exit(1);
	}

	// Pabaiga
	if (*x <= 0)
	{
		cout << "\nOh no! You died. Try again.";
	}
	if (*x >= 1000)
	{
		cout <<
			"╔═╦╗╔══╗╔═╦╗\n╚╗║║║╔╗║╚╗║║\n╔╩╗║║╠╣║╔╩╗║\n╚══╝╚╝╚╝╚══╝";
		cout <<
			"\nCongratulations! You collected 1000xp and safely reached the city. You can try the Gangbang club {1}, or fulfill the goal of your trip {>1}.\n\n";
		cin >> ans;
		if (ans == 1)
		{
			cout <<
				"\nYou went to the Gangbang club, sadly you were kicked out for being too horny.\n\n";
		}
		if (ans >= 2)
		{
			cout <<
				"\nYou went to the supermarket and bought some milk. Welp mission completed. Time to go home.\n\n";
		}
		cout << "Made by Vytautas Butėnas";
	}
}