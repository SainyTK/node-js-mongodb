import db from './db/db';

class DataStore {

    constructor() {

    }

    getPressureData(num = 1) {
        return new Promise((resolve, reject) => {
            try {
                if (num === 'all') {

                } else if (!isNaN(num)) {
                    db.sensorData.find().sort({date: -1}).limit(parseInt(num), (err, docs) => {
                        if (err) return reject(err);
                        resolve(docs);
                    });
                }
            } catch (err) {
                reject(err);
            }
        });
    }

    addPressureData(data) {
        return new Promise((resolve, reject) => {
            try {
                let pressureData = { 
                    ...data,
                    date: new Date()
                };
                db.sensorData.insert(pressureData, (err, docs) => {
                    if (err) return reject(err);
                    resolve(docs);
                });
            } catch (err) {
                reject(err);
            }
        });
    }

}

export default new DataStore();