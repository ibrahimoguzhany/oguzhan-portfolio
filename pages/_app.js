import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import App from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/index.scss'

import AppNavbar from '@/components/shared/Navbar'
import Hero from '@/components/shared/Hero'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
});

const MyApp = ({ Component, pageProps }) => {

    return (
        <ApolloProvider client={client}>
        <div className="portfolio-app">
            <AppNavbar />

            {Component.name === 'Home' && <Hero />}
            <div className='container'>
                <Component {...pageProps} />
            </div>
        </div>
        </ApolloProvider>
    );
    //}
}

MyApp.getInitialProps = async (context) => {

    const initialProps = App.getInitialProps && await App.getInitialProps(context)

    return { pageProps: { appData: 'Hello _App Component', ...initialProps.pageProps } }
}

export default MyApp
