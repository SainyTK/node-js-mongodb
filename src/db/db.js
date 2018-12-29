import mongojs from 'mongojs';

const databaseUrl = 'topgunDB';
const collections = ['sensorData'];

const connect = mongojs(databaseUrl, collections);

export default connect;