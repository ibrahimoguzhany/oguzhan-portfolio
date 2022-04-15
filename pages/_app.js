import { useState, useEffect } from 'react'
import App from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/index.scss'

import AppNavbar from '@/components/shared/Navbar'
import Hero from '@/components/shared/Hero'


const MyApp = ({ Component, pageProps }) => {
    const [showChild, setShowChild] = useState(false);
    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    }

    if (typeof window === 'undefined') {
        return <></>;
    } else {
        return (
            <div className="portfolio-app">
                <AppNavbar />

                {Component.name === 'Home' && <Hero />}
                <div className='container'>
                    <Component {...pageProps} />
                </div>
            </div>
        );
    }
}

MyApp.getInitialProps = async (context) => {
    console.log('GET INITIAL PROPS OF APP')
    const initialProps = App.getInitialProps && await App.getInitialProps(context)

    return { pageProps: { appData: 'Hello _App Component', ...initialProps.pageProps } }
}

export default MyApp
