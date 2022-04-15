
const Portfolio = require('../../database/models/portfolio')


const data = {
    portfolios: [
        {
            _id: "dasdasdas31231",
            title: 'Job in Netcentric',
            company: 'Netcentric',
            companyWebsite: 'www.google.com',
            location: 'Spain, Barcelona',
            jobTitle: 'Engineer',
            description: 'Doing something, programing....',
            startDate: '01/01/2014',
            endDate: '01/01/2016'
        },
        {
            _id: "da789ad1",
            title: 'Job in Siemens',
            company: 'Siemens',
            companyWebsite: 'www.google.com',
            location: 'Slovakia, Kosice',
            jobTitle: 'Software Engineer',
            description: 'Responsoble for parsing framework for JSON medical data.',
            startDate: '01/01/2011',
            endDate: '01/01/2013'
        },
        {
            _id: "fdsfa432423",
            title: 'Job in Netcentric',
            company: 'Netcentric',
            companyWebsite: 'www.google.com',
            location: 'Spain, Barcelona',
            jobTitle: 'Engineer',
            description: 'Doing something, programing....',
            startDate: '01/01/2014',
            endDate: '01/01/2016'
        }
    ]
}


exports.portfolioQueries = {
    portfolio: (root,{id}) => {
        return Portfolio.findById(id)

    },
    portfolios: async () => {
        return await Portfolio.find({})
    
    },
}

exports.portfolioMutations = {
    createPortfolio: async (root,{ input }) => {
        const createdPortfolio = await Portfolio.create(input);
        return createdPortfolio
    },
    updatePortfolio: async (root, {id, input}) => {
       const updatedPortfolio = await Portfolio.findOneAndUpdate({_id: id}, input, {new: true})
       return updatedPortfolio
    },
    deletePortfolio: async (root, {id}) => {
        const returnVal = await Portfolio.findOneAndRemove({_id:id})
        
        return returnVal._id

    }
}