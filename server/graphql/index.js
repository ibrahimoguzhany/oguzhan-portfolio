const mongoose = require('mongoose');
const { ApolloServer, gql } = require('apollo-server-express');

//resolvers
const { portfolioQueries, portfolioMutations, userMutations, userQueries } = require('./resolvers');
const { portfolioTypes, userTypes } = require('./types');
const { buildAuthContext } = require('./context/index');
const Portfolio = require('./models/Portfolio');
const User = require('./models/User');
// graphql models

exports.createApolloServer = () => {
    // Construct a schema, using GraphQL schema language
    const typeDefs = gql`
        ${portfolioTypes}
        ${userTypes}
        type Query {
            portfolio(id: ID): Portfolio,
            portfolios: [Portfolio]

            user: User
    }
        type Mutation {
            createPortfolio(input: PortfolioInput): Portfolio
            updatePortfolio(id: ID, input: PortfolioInput) : Portfolio
            deletePortfolio(id: ID) : ID

            signUp(input: SignUpInput): String
            signIn(input: SignInInput): User
            signOut: Boolean

            }
`;

    // The root provides a resolver for each API endpoint
    const resolvers = {
        Query: { ...portfolioQueries, ...userQueries },
        Mutation: { ...portfolioMutations, ...userMutations },
    };

    const apolloServer = new ApolloServer({
        typeDefs, resolvers,
        context: (args) => ({
            ...buildAuthContext(args.req),
            models: {
                Portfolio: new Portfolio(mongoose.model('Portfolio')),
                User: new User(mongoose.model('User'))
            }
        })
    });
    return apolloServer;
};