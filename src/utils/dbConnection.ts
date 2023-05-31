import { connect, ConnectionStates } from 'mongoose';

let connection: ConnectionStates = 0;

async function dbConnect() {
    if (connection) {
        return;
    };
    const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = process.env

    const db = await connect(`mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`);
    connection = db.connections[0].readyState;
};

export default dbConnect;