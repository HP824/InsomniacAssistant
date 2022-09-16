import tmi from 'tmi.js'
import {BOT_NAME, CHANNEL_NAME} from './constants.js.example';
import {OAUTH_TOKEN} from './config.js.example'

const options = {
    options: {debug: true},
    identity: {
        username: BOT_NAME,
        password: OAUTH_TOKEN
    },
    channels: [CHANNEL_NAME]
}

function handleHello(channel, tags, message) {
    if (message.toLowerCase() === '!hello') {
        client.say(channel, `@${tags.username}, Insomniac!`);
    }
}

function logsNeeded(channel, tags, message) {
    if (message.includes("!logs")) {
        let emeralds = message.replace("!logs ", "");
        emeralds = parseInt(emeralds)
        if (emeralds > 34 || emeralds < 0) {
            client.say(channel, `@${tags.username}, Invalid amount of emeralds`);
            return;
            // not handling negative numbers yet
        }
        let l = 136 - 4 * emeralds;
        let s = Math.floor(l / 64)
        let r = l % 64
        let logs = ''
        if (s == 0) {
            if (r == 0) {
                var message = 'Rolled all the emeralds!'
                client.say(channel, `@${tags.username}, ${message} `);
                return;
            } else logs = r
        } else if (s == 1) {
            if (r == 0) {
                logs = '64'
            } else logs = '64 + ' + r
        } else if (s == 2) {
            if (r == 0) {
                logs = '64 + 64'
            } else logs = '64 + 64 ' + r
        }
        client.say(channel, `@${tags.username}, ${logs} logs`);
    }
}

function regularTradingSimulator(channel, tags, message) {
    if (message.includes("!trade")) {
        let emeralds = parseInt(message.replace("!trade ", ""));
        let pearls = Math.floor((emeralds + 14) / 4);
        let remainderEmeralds = ((emeralds + 14) % 4);
        client.say(channel, `@${tags.username}, ${pearls} pearls with ${remainderEmeralds} emeralds left!`);
    }
}

function contariaTradingSimulator(channel, tags, message) {
    if (message.includes("!contaria")) {
        let newMessage = message.replace("!contaria ", "")
        const array = newMessage.split(" ")
        if (array[1] >= 12) {
            let pearls = Math.floor((parseInt(array[0]) + 22) / 4)
            client.say(channel, `@${tags.username}, ${pearls} pearls with maximum gold traded!`);
        } else if (array[1] < 12) {
            let pearls = Math.floor((parseInt(array[0]) + 16 + Math.floor(parseInt(array[1]) / 2)) / 4)
            client.say(channel, `@${tags.username}, ${pearls} pearls`)
        }
    }
}

const client = new tmi.Client(options);

client.connect().catch(console.error);
client.on('message', (channel, tags, message, self) => {
    if (self) return;
    handleHello(channel, tags, message)
    logsNeeded(channel, tags, message)
    regularTradingSimulator(channel, tags, message)
    contariaTradingSimulator(channel, tags, message)
});
