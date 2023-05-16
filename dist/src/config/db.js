"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const typeorm_1 = require("typeorm");
const index_1 = require("../models/index");
function db(server) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const connectionOptions = yield (0, typeorm_1.getConnectionOptions)();
            Object.assign(connectionOptions, {
                options: { encrypt: true },
                host: process.env.TYPEORM_HOST || 'mysql-prodb.alwaysdata.net',
                username: process.env.TYPEORM_USERNAME || 'prodb',
                password: process.env.TYPEORM_PASSWORD || 'Motdep@sse2022',
                database: process.env.TYPEORM_DATABASE || 'prodb_minelibs',
                entities: [index_1.Users]
            });
            const connection = yield (0, typeorm_1.createConnection)(connectionOptions);
            console.log('database connected');
            server.decorate('db', {
                users: connection.getRepository(index_1.Users)
            });
        }
        catch (error) {
            console.log(error);
            console.log('make sure you have set .env variables - see .env.sample');
        }
    });
}
module.exports = db;
//# sourceMappingURL=db.js.map