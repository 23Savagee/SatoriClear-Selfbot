const {
    token,
    trigger
} = require('./config.json')

const request = require("request");
const colors = require('colors')
const {
    Client
} = require('discord.js-selfbot-v13')
const rpc = require('discord-rpc')

const client = new Client(),
    rpcClient = new rpc.Client({
        transport: 'ipc',
        checkUpdate: false
    });

process.on('unhandledRejection', e => {})
process.on('uncaughtException', e => {})
process.on('uncaughtRejection', e => {})
process.warn = () => {};

client.on("error", () => {})

client.on("warn", () => {})

function printClear() {
    console.log(`

                                             github.com/23Savagee

      ██████  ▄▄▄     ▄▄▄█████▓ ▒█████   ██▀███    ██▓     ▄████▄   ██▓    ▓█████ ▄▄▄      ██▀███  
    ▒██    ▒ ▒████▄   ▓  ██▒ ▓▒▒██▒  ██▒▓██ ▒ ██▒▒▓██▒    ▒██▀ ▀█  ▓██▒    ▓█   ▀▒████▄   ▓██ ▒ ██▒
    ░ ▓██▄   ▒██  ▀█▄ ▒ ▓██░ ▒░▒██░  ██▒▓██ ░▄█ ▒▒▒██▒    ▒▓█    ▄ ▒██░    ▒███  ▒██  ▀█▄ ▓██ ░▄█ ▒
      ▒   ██▒░██▄▄▄▄██░ ▓██▓ ░ ▒██   ██░▒██▀▀█▄  ░░██░    ▒▓▓▄ ▄██ ▒██░    ▒▓█  ▄░██▄▄▄▄██▒██▀▀█▄  
    ▒██████▒▒▒▓█   ▓██  ▒██▒ ░ ░ ████▓▒░░██▓ ▒██▒░░██░    ▒ ▓███▀ ▒░██████▒░▒████▒▓█   ▓██░██▓ ▒██▒
    ▒ ▒▓▒ ▒ ░░▒▒   ▓▒█  ▒ ░░   ░ ▒░▒░▒░ ░ ▒▓ ░▒▓░ ░▓      ░ ░▒ ▒  ░░ ▒░▓  ░░░ ▒░ ░▒▒   ▓▒█░ ▒▓ ░▒▓░
    ░ ░▒  ░  ░ ░   ▒▒     ░      ░ ▒ ▒░   ░▒ ░ ▒ ░ ▒ ░      ░  ▒  ░░ ░ ▒  ░ ░ ░  ░ ░   ▒▒   ░▒ ░ ▒ 
    ░  ░  ░    ░   ▒    ░      ░ ░ ░ ▒    ░░   ░ ░ ▒ ░    ░          ░ ░      ░    ░   ▒    ░░   ░ 
          ░        ░               ░ ░     ░       ░      ░ ░     ░    ░  ░   ░        ░     ░     
    
                                     ● ${client.user.tag} | Type: '${trigger}' on any chat. ●
                                     `.brightMagenta)
}

console.clear()
process.title = `SatoriClear - Loading...`
console.log(`




                 ██▓    ▒█████   ▄▄▄     ▓█████▄   ██▓ ███▄    █  ▄████          
                ▓██▒   ▒██▒  ██▒▒████▄   ▒██▀ ██▌▒▓██▒ ██ ▀█   █  ██▒ ▀█         
                ▒██░   ▒██░  ██▒▒██  ▀█▄ ░██   █▌▒▒██▒▓██  ▀█ ██▒▒██░▄▄▄         
                ▒██░   ▒██   ██░░██▄▄▄▄██░▓█▄   ▌░░██░▓██▒  ▐▌██▒░▓█  ██         
                ░██████░ ████▓▒░▒▓█   ▓██░▒████▓ ░░██░▒██░   ▓██░▒▓███▀▒██ ██ ██ 
                ░ ▒░▓  ░ ▒░▒░▒░ ░▒▒   ▓▒█ ▒▒▓  ▒  ░▓  ░ ▒░   ▒ ▒ ░▒   ▒ ▒▒ ▒▒ ▒▒ 
                ░ ░ ▒    ░ ▒ ▒░ ░ ░   ▒▒  ░ ▒  ▒ ░ ▒ ░░ ░░   ░ ▒░ ░   ░ ░  ░  ░  
                ░ ░  ░ ░ ░ ▒    ░   ▒   ░ ░  ░ ░ ▒ ░   ░   ░ ░  ░   ░ ░  ░  ░  
                ░      ░ ░        ░     ░      ░           ░      ░  ░  ░  ░ 
                                                                                `.brightMagenta)

function clear(authToken, authorId, channelId) {
    const wait = async (ms) => new Promise(done => setTimeout(done, ms))

    const headers = {
        "Authorization": authToken
    };

    const recurse = (before) => {
        let params = before ? `before=${before}` : ``;

        request({
            url: `https://discord.com/api/v9/channels/${channelId}/messages?${params}`,
            headers: headers,
            json: true
        }, async (error, response, result) => {
            if (response === undefined) {
                return recurse(before);
            }

            if (response.statusCode === 202) {
                const w = response.headers['retry-after'];

                console.log(`Ops, channel non-indexed, wait ${w}ms to index the messages`);

                await wait(w);

                return recurse(before)
            }

            if (response.statusCode !== 200) {
                return console.log('Waiting for API!', result);
            }

            for (let i in result) {
                let message = result[i];

                if (message.author.id === authorId && message.type !== 3) {
                    await new Promise((resolve) => {

                        const deleteRecurse = () => {
                            request.delete({
                                url: `https://discord.com/api/v9/channels/${channelId}/messages/${message.id}`,
                                headers: headers,
                                json: true
                            }, async (error, response, result) => {
                                if (error) {
                                    return deleteRecurse();
                                }
                                if (result) {
                                    if (result.retry_after !== undefined) {
                                        console.log(`Rate-limited! Waiting ${result.retry_after}ms to continue the purge.`)
                                        await wait(result.retry_after * 1000);
                                        return deleteRecurse();
                                    }
                                }

                                resolve()
                            });
                        }

                        deleteRecurse();
                    });
                }
            }

            if (result.length === 0) {
                console.clear()
                printClear()
                console.log("Success! The channel has been successfully cleared.");
            } else {
                recurse(result[result.length - 1].id);
            }
        });
    }

    recurse();
}

client.on('ready', async () => {
    console.clear()
    process.title = `SatoriClear | Connected in: ${client.user.username}`
    printClear()
})

client.on('messageCreate', async (message) => {
    if (message.author.id != client.user.id) return
    if (message.content.toLowerCase() === trigger) {
        message.delete()
        clear(token, client.user.id, message.channel.id);
        console.log("Trigger detected - Initiating the clearing process....");
    }
})

client.on("error", () => {})
client.on("warn", () => {})

client.login(token)

rpcClient.on(`ready`, () => {
    rpcClient.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "-> SatoriClear | Messages Clear",
            state: 'github.com/23Savagee',
            assets: {
                large_image: "logo",
                small_image: 'biel',
                small_text: 'github.com/23Savagee'
            },
            buttons: [{
                label: "Download",
                url: "https://github.com/23Savagee"
            }]
        }
    })
})

rpcClient.login({
    clientId: '1051592920882487406'
}).catch(() => {})
