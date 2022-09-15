import tmi from 'tmi.js'
import {BOT_NAME, CHANNEL_NAME} from './constants';
import {OAUTH_TOKEN} from './config.js.example'

const options = {
	options: { debug: true },
	identity: {
		username: BOT_NAME,
		password: OAUTH_TOKEN
	},
	channels: [ CHANNEL_NAME ]
}

function handleHello(channel, tags, message){
    if(message.toLowerCase() === '!hello') {
		client.say(channel, `@${tags.username}, Insomniac!`);
	}
}

function logsNeeded(channel, tags, message){
    if (message.includes("!logs")) {
        var emeralds = message.replace("!logs ", "");
        emeralds = parseInt(emeralds)
        if (emeralds > 34 || emeralds < 0) {
            client.say(channel, `@${tags.username}, Invalid amount of emeralds`);
            return;
            // not handling negative numbers yet
        }
        var l = 136 - 4 * emeralds
        var s = Math.floor(l / 64)
        var r = l % 64
        var logs = ''
        if (s == 0) {
            if (r == 0) {
                var message = 'Rolled all the emeralds!'
                client.say(channel, `@${tags.username}, ${message} `);
                return;
            }
            else logs = r
        }
        if (s == 1) {
            if (r == 0) { 
                logs = '64'
            }
            else logs = '64 + ' + r
        }

        if (s == 2) {
            if (r == 0) {
                logs = '64 + 64'
            }
            else logs = '64 + 64 ' + r
        }
        client.say(channel, `@${tags.username}, ${logs} logs`);
    }
}

const client = new tmi.Client(options);

client.connect().catch(console.error);
client.on('message', (channel, tags, message, self) => {
	if(self) return;
    handleHello(channel, tags, message)	
    logsNeeded(channel, tags, message)
});
