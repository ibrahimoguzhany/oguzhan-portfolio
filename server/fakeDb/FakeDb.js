const { portfolios } = require('./data')
const Portfolio = require('../database/models/portfolio')

class FakeDb {

    async clean() {
        await Portfolio.deleteMany({});
    }

    async addData() {
        try {
            
            await Portfolio.create(portfolios);
        }
        catch (err) {
            console.log(err)
        }
    }
    async populate() {
        try {
            await this.clean();
            await this.addData();
        }
        catch (err) {
            console.log(err)
        }

    }


}

module.exports = new FakeDb();