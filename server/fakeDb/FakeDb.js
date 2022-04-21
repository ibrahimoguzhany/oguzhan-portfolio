const { portfolios, users } = require('./data');
const Portfolio = require('../database/models/portfolio');
const User = require('../database/models/user');

class FakeDb {

    async clean() {
        await User.deleteMany({});
        await Portfolio.deleteMany({});
    }

    async addData() {
        try {
            await User.create(users);
            await Portfolio.create(portfolios);
        }
        catch (err) {
            console.log(err);
        }
    }
    async populate() {
        try {
            await this.clean();
            await this.addData();
        }
        catch (err) {
            console.log(err);
        }

    }


}

module.exports = new FakeDb();