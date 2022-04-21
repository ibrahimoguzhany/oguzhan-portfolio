// lib/withApollo.js
import withApolloV2 from 'next-with-apollo';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks';

export default withApolloV2(
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