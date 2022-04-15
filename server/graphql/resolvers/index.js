
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
    hello: () => {
        return 'Hello World!'
    },
    portfolio: (root,{id}) => {
        return data.portfolios.find(p => p._id === id)

    },
    portfolios: () => {
        return data.portfolios
    },
}

exports.portfolioMutations = {
    createPortfolio: (root,{ input }) => {
        const _id = require('crypto').randomBytes(10).toString('hex')
        const newPortfolio = { ...input }
        newPortfolio._id = _id
        data.portfolios.push(newPortfolio)
        return newPortfolio
    },
    updatePortfolio: (root, {id, input}) => {
        const index = data.portfolios.findIndex(p => p._id === id)
        const oldPortfolio = data.portfolios[index]
        
        const updatedPortfolio = {...oldPortfolio, ...input}
        data.portfolios[index] = updatedPortfolio
        return updatedPortfolio
    },
    deletePortfolio: (root, {id}) => {
        const index = data.portfolios.findIndex(p => p._id === id)
        data.portfolios.splice(index, 1)
        return id

    }
}