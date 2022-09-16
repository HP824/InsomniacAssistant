# Insomniac Assistant
Insomniac Assistant is a Twitch ChatBot created to facilitate calculations needed during Minecraft Java Edition version 1.15.2 Insomniac-Style Speedruns. 

In a standard 1.15.2 Insomniac Speedrun, the player is required to collect a minimum of **34 emeralds** alongside 72 gold ingots to acquire a minimum of 12 ender pearls in tandem with 
blaze rods from the Nether dimension to complete the game. Due to the sheer randomness and rarity of finding all 34 emeralds in chests scattered throughout a given world, the Insomniac 
strategy caters towards alternate forms of acquiring emeralds such as trading sticks or wheat. 

Specifically, this chatbot attempts to eliminate most calculations surrounding how many resources are required to acquire additional emeralds for 12 ender pearls in an Insomniac Speedrun. 

## Features
As of v1.0, this chatbot takes in the command `!logs` and a number representing the current amount of emeralds a player has acquired.
For example, if a user wishes to know how many logs they will need to supplement 17 emeralds, this is entered into the Twitch chat as:
```
!logs 17
```
and Insomniac Assistant responds with: 
```
@username, 64 + 4 logs
```

With the changes brought by v2.0, users will now be able to calculate the amount of pearls they can acquire through the Regular and Contaria Insomniac Variation by using the commands `!trade` and `!contaria` respectively. 

The command `!trade` is easy to use. To find out how many pearls one will acquire with 24 emeralds, the user will enter
```
!trade 24
``` 
and the bot responds with 
```
@username, 9 pearls with 2 emeralds left!
```
The command `!contaria` followed by two numbers such as:
```
!contaria 26 12
```
Where the first number is the amount of emeralds and the second number is the amount of extra gold ingots apart from a set 72 ingots needed to perform Insomniac. The bot's output would read as such:
```
@username, 12 pearls with maximum gold traded!
```

For a little bit of chat interactivity, why not say hello to Insomniac Assistant! Enter the command:
```
!hello
```
To be greeted by Insomniac Assistant:
```
@username, Insomniac!
```

## Notes
- v2.0 is a functional release but has not been thoroughly checked for bugs or discrepancies
- Additional parameters like wheat and TNT may be accounted for in the future
- Will try to make functional for anyone to use in their Twitch chat
- This bot has not been legalized for 1.15.2 Minecraft Java Speedruns
- Suggestions and feedback are encouraged to improve the bot's functionality

## Contributions
- [DuncanRuns and Daferade for original chart](https://twitter.com/Daferade/status/1444045314839699459)
- [TechnoTim Twitch Bot Tutorial and the resources listed in this video](https://www.youtube.com/watch?v=7uSjKbAUHXg)
- Strat Developers and Speedrunners of Minecraft Java Edition 1.15.2 

## Final Words
This personal project of mine would not have been possible without building upon the work of the aforementioned and I will continue to work on this bot until I feel satisfied with its 
functionality
