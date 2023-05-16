var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fastify = require('fastify')();
const db = require('../src/config/db');
const createServer = () => __awaiter(this, void 0, void 0, function* () {
    yield db(fastify);
    yield fastify.register(require('fastify-cors'));
    yield fastify.register(require('../src/routes/health'), { prefix: '/health' });
    yield fastify.register(require('../src/routes/user'), { prefix: '/user' });
    fastify.setErrorHandler((error, req, res) => {
        req.log.error(error.toString());
        res.send({ error });
    });
    return fastify;
});
module.exports = createServer;
//# sourceMappingURL=server.js.map