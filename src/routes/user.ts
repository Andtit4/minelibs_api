async function userRoutes (fastify) {
	fastify.get('/:_id', async (req, res) => {
		req.log.info('get one user from db');
		const product = await fastify.db.users.findOne(req.params._id);
		res.send(product);
	});

	fastify.get('/', async (req, res) => {
		req.log.info('list users from db');
		const users = await fastify.db.users.find();
		res.send(users);
	});

	fastify.post('/', async (req, res) => {
		req.log.info('Add user to db');
		const users = await fastify.db.users.save(req.body);
		res.status(201).send(users);
	});

	fastify.put('/:_id', async (req, res) => {
		req.log.info('Update user to db');
		const _id = req.params._id;
		const users = await fastify.db.users.save({ _id, ...req.body });
		res.status(200).send(users);
	});

	fastify.delete('/:_id', async (req, res) => {
		req.log.info(`delete user ${req.params._id} from db`);
		const product = await fastify.db.users.findOne(req.params._id);
		await fastify.db.users.remove(product);
		res.code(200).send({});
	});
}

module.exports = userRoutes;
