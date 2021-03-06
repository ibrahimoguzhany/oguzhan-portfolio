import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/index.scss';

import AppNavbar from '@/components/shared/Navbar';
import Hero from '../components/shared/Hero';


const MyApp = ({ Component, pageProps }) => {
    const isHomePage = () => Component.name === 'Home';

    return (
        <div className="portfolio-app">
            <AppNavbar />
            {isHomePage() &&
                <>
                    <Hero />
                    <footer id="sticky-footer" className="py-4 bg-black text-white-50 py-3">
                        <div className="container text-center">
                            <small>Copyright &copy; Your Website</small>
                        </div>
                    </footer>
                </>
            }
            <div className='container'>
                <Component {...pageProps} />
            </div>

        </div>
    );
};

export default MyApp;
