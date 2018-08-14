const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Karmen1') {
    	message.reply('Paul, nahhui sa nii sitt ja debiilne urod oled!');
  	}
});

client.on('message', message => {
    if (message.content === 'Karmen2') {
    	message.reply('Sven, miks su munn niiiiii väike on!?');
  	}
});

client.on('message', message => {
    if (message.content === 'Karmen3') {
    	message.reply('Paul, ma armastan sind!');
  	}
});

client.on('message', message => {
    if (message.content === 'Karmen4') {
    	message.reply('Paul, ma vihkan sind!');
  	}
});

client.on('message', message => {
    if (message.content === 'Karmen5') {
    	message.reply('Paul, mine perse!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
