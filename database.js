const { Client } = require('pg');
const client = new Client({
	user: 'postgres',
	password: 'postgres',
	host: 'localhost',
	database: 'postgres',
	port: 5432
});
client.connect();

module.exports = {
	addServer: async () => {
		client.query('SELECT NOW()', (err, res) => {
			console.log(err, res);
			client.end();
		});
	}
}
