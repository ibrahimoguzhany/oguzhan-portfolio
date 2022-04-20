

const mongoose = require('mongoose');
const config = require('../config/dev');
const fakeDb = require('./FakeDb');

mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
},
    async () => {
        try {
            console.log('populating DB...');
            await fakeDb.populate();
            await mongoose.connection.close();
            console.log('DB has been populated');


        } catch (err) {
            throw new MongooseError(err);
        }

    });  