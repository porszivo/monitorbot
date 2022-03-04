const {App} = require('@slack/bolt');
const settings = require('./config');
const database = require('./database');

const app = new App({
	token: settings.botToken,
	signingSecret: settings.signingSecret,
	appToken: settings.appToken,
	socketMode: true,
});

app.message(/^(monitor).*/, async({ message, say}) => {
	let args = message.text.split(' ');
	if(!args[1]) {
		// TODO return helpful message
		await say('Hi, there :wave:. What can I do for you? Here are some commands');
		return;
	}
	switch (args[1]) {
		case 'status':
			await say('Server status');
			break;
		case 'add':
			await say('Server added');
			break;
		case 'delete':
			await say('Server deleted');
			break;
		case 'help':
			// TODO helpful message
			await say('');
			break;
		default:
			await say(`${args[1]} is an unknown command`);
	}
});

(async () => {
	await app.start();
	console.log('running-');
})();

