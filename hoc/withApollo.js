// lib/withApollo.js
import withApollo from 'next-with-apollo';
import { InMemoryCache, ApolloProvider,ApolloClient } from '@apollo/client';
// import { ApolloProvider } from '@apollo/react-hooks';

export default withApollo(
    ({ initialState }) => {
        return new ApolloClient({
            uri: 'http://localhost:3000/graphql',
            cache: new InMemoryCache().restore(initialState || {})
        });
    },
    {
        render: ({ Page, props }) => {
            return (
                <ApolloProvider client={props.apollo}>
                    <Page {...props} />
                </ApolloProvider>
            );
        }
    }
);