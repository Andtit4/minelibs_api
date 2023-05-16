import 'reflect-metadata';
import 'dotenv/config';

import { createConnection, getConnectionOptions } from 'typeorm';
import { Users } from '../models/index';

async function db (server) {
	try {
		const connectionOptions = await getConnectionOptions();
		Object.assign(connectionOptions, {
			options: { encrypt: true },
			host: process.env.TYPEORM_HOST || 'mysql-prodb.alwaysdata.net',
			username: process.env.TYPEORM_USERNAME || 'prodb',
			password: process.env.TYPEORM_PASSWORD || 'Motdep@sse2022',
			database: process.env.TYPEORM_DATABASE || 'prodb_minelibs',
			entities: [Users]
		});

		const connection = await createConnection(connectionOptions);
		console.log('database connected');

		server.decorate('db', {
			users: connection.getRepository(Users)
		});
    
	} catch (error) {
		console.log(error);
		console.log('make sure you have set .env variables - see .env.sample');
	}
}

module.exports = db;
