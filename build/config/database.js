import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";
dotenv.config();
class Database {
    sequelize;
    POSTGRES_DB = process.env.POSTGRES_DB;
    POSTGRES_HOST = process.env.POSTGRES_HOST;
    POSTGRES_PORT = process.env.POSTGRES_PORT;
    POSTGRES_USER = process.env.POSTGRES_USER;
    POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
    constructor() {
        this.connectToPostgreSQL();
    }
    ;
    async connectToPostgreSQL() {
        this.sequelize = new Sequelize({
            database: this.POSTGRES_DB,
            username: this.POSTGRES_USER,
            password: this.POSTGRES_PASSWORD,
            host: this.POSTGRES_HOST,
            port: this.POSTGRES_PORT,
            dialect: "postgres",
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false, // Use this only if you're working with self-signed certificates.
                },
            }
        });
        await this.sequelize.authenticate()
            .then(() => {
            console.log("PostgreSQL Connection Established Successfully...");
        })
            .catch((err) => {
            console.error("Unable To Connect To The PostgreSQL Database:", err);
        });
    }
    ;
}
;
export default Database;
