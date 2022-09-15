# Insomniac Assistant
Insomniac Assistant is a Twitch ChatBot created to facilitate calculations needed during Minecraft Java Edition version 1.15.2 Insomniac-Style Speedruns. 

In a standard 1.15.2 Insomniac Speedrun, the player is required to collect a minimum of **34 emeralds** alongside 72 gold ingots to acquire a minimum of 12 ender pearls in tandem with 
blaze rods from the Nether dimension to complete the game. Due to the sheer randomness and rarity of finding all 34 emeralds in chests scattered throughout a given world, the Insomniac 
strategy caters towards alternate forms of acquiring emeralds such as trading sticks or wheat. 

Specifically, this chatbot attempts to eliminate most calculations surrounding how many resources are required to acquire additional emeralds for 12 ender pearls in an Insomniac Speedrun. 

## Features
As of v1.0, this chatbot takes in the command `!logs` and a number representing the current amount of emeralds a player has acquired.
For example, if a player wishes to know how many logs they will need to supplement 17 emeralds, this is entered into the Twitch chat as
```
!logs 17
```
and produces an output of 
```
64 + 4 logs
```

## Notes
- v1.0 is **NOT** a stable release and is here for archival purposes until a working release is specified
- Future improvements will account for variations on the Insomniac-Style Speedrun
- Additional parameters like wheat and TNT will be accounted for to improve the functionality of this chatbot
- Will try to make functional for anyone to use in their Twitch chat
- OAuth token removed for privacy and security
- Not a legal tool for speedruns at the moment
- Anyone is welcome to leave suggestions to improve the bot functionality

## Contributions
- [DuncanRuns and Daferade for original chart](https://twitter.com/Daferade/status/1444045314839699459)
- [TechnoTim Twitch Bot Tutorial and the resources listed in this video](https://www.youtube.com/watch?v=7uSjKbAUHXg)
- Strat Developers and Speedrunners of Minecraft Java Edition 1.15.2 

## Final Words
This personal project of mine would not have been possible without building upon the work of the aforementioned and I will continue to work on this bot until I feel satisfied with its 
functionality
