<p align="center">
  <img src="https://cdn.discordapp.com/attachments/857714045251878972/977153774206476318/revenge_hotlinenct_dream.gif">
</p>

<p align="center">
  <a href="https://www.python.org">
    <img src="https://img.shields.io/badge/License-MIT-important">
    <img src="https://img.shields.io/badge/Node.js-v14.17.5-brightgreen">
    <img src="https://img.shields.io/badge/Lenguaje-JavaScript-yellow"
  </a>
  <a href="https://github.com/23Savagee/SatoriClear-Selfbot/">
    <img src="https://visitor-badge.laobi.icu/badge?page_id=23Savagee.SatoriClear-Selfbot" /></a>
    
  </a> 

## 〢 :thought_balloon:  What is SatoriClear?

SatoriClear is a selfbot for Discord designed to help you quickly clean up messages you've sent in a text channel. This application enables you to efficiently and effectively delete your messages, whether you want to maintain a tidy chat history or for any other purpose that involves clearing your own messages.

## 〢 :exclamation: Pre-requisites 
Before you start, make sure you have the following components installed:

- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [Git](https://git-scm.com/) - Version control (optional, but recommended)

## 〢 :gear: How to install 
  * * *
```bash
1. git clone https://github.com/23Savagee/SatoriClear-Selfbot.git
2. npm install request discord.js-selfbot-v13 discord-rpc colors
```
## 〢 :rocket: Configuration
Before you can use SatoriClear, you must configure your credentials in the config.json file. Follow these steps:

1. Open the `config.json` file.
2. Replace `"YOUR-TOKEN-HERE"` with your Discord token.
3. Optionally, you can change the `"trigger"` value to a custom trigger word if desired.

Here's what your `config.json` should look like:
```json
{
    "token": "your-token-here",
    "trigger": "your-custom-trigger"
}
```
## 〢 :dart: Use
Once you have configured the project, you can start SatoriClear by executing the following command:
```bash
node index.js
node index-es.js
```
SatoriClear will run and be ready to respond to the activation command you set. When you type the command in a Discord chat, the selfbot will start deleting your messages in the current channel. The `index-es.js` is for people whose language is Spanish.

## 〢 :bat: Preview
![Image 1](https://i.imgur.com/McA9ryg.png)
![Image 2](https://i.imgur.com/HVUzgNz.png)

