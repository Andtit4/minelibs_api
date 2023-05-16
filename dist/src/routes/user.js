var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function userRoutes(fastify) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.get('/:_id', (req, res) => __awaiter(this, void 0, void 0, function* () {
            req.log.info('get one user from db');
            const product = yield fastify.db.users.findOne(req.params._id);
            res.send(product);
        }));
        fastify.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            req.log.info('list users from db');
            const users = yield fastify.db.users.find();
            res.send(users);
        }));
        fastify.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            req.log.info('Add user to db');
            const users = yield fastify.db.users.save(req.body);
            res.status(201).send(users);
        }));
        fastify.put('/:_id', (req, res) => __awaiter(this, void 0, void 0, function* () {
            req.log.info('Update user to db');
            const _id = req.params._id;
            const users = yield fastify.db.users.save(Object.assign({ _id }, req.body));
            res.status(200).send(users);
        }));
        fastify.delete('/:_id', (req, res) => __awaiter(this, void 0, void 0, function* () {
            req.log.info(`delete user ${req.params._id} from db`);
            const product = yield fastify.db.users.findOne(req.params._id);
            yield fastify.db.users.remove(product);
            res.code(200).send({});
        }));
    });
}
module.exports = userRoutes;
//# sourceMappingURL=user.js.map