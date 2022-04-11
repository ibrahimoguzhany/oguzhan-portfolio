import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/index.scss'

import Navbar from '@/components/shared/Navbar'

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Component {...pageProps} />
            </div>
        </>

    )
}

export default MyApp
