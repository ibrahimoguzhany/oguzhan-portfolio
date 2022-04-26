import { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import withApollo from '@/hoc/withApollo';
import { useLazyGetUser } from '@/apollo/actions';

const AppLink = ({ href, className, children }) => {
    return <Link href={href}>
        <a className={"nav-link " + className} >
            {children}
        </a>
    </Link>;
};


const AppNavbar = () => {

    const [appState, setAppState] = useState({
        user: null,
        hasResponse: false
    });
    const [getUser, { data, error }] = useLazyGetUser();

    useEffect(() => {
        getUser();
    }, []);

    if (data && !appState.hasResponse) {
        if (data.user && !appState.user) {
            setAppState({ user: data.user, hasResponse: true });
        }

        if (!data.user && !appState.hasResponse) {
            setAppState({ hasResponse: true });
        }
    }

    return <div className="navbar-wrapper">
        <Navbar expand='lg' className="navbar-dark fj-mw9">
            <AppLink className="mr-3 font-weight-bold" href="/"><Navbar.Brand>OguzhanYilmaz</Navbar.Brand></AppLink>
            <Navbar.Toggle />
            <Navbar.Collapse >
                <Nav className='mr-auto'>
                    <AppLink href="/portfolios" className="mr-3">Portfolio</AppLink>
                    <AppLink href="/forum/categories" className="mr-3">Forum </AppLink>
                    <AppLink href="/cv" className="mr-3">CV</AppLink>
                </Nav>
                {appState.hasResponse &&
                    <Nav>
                        {appState.user &&
                            <>
                                <span className="nav-link mr-4">Welcome {appState.user.username}</span>
                                <AppLink href="/logout" className="nav-link btn btn-danger">Sign Out</AppLink>
                            </>
                        }
                        {(error || !appState.user) &&
                            <>
                                <AppLink href="/login" className="mr-3">Sign In</AppLink>
                                <AppLink href="/register" className="mr-3 btn btn-success bg-green-2 bright">Sign Up</AppLink>
                            </>
                        }
                    </Nav>
                }
            </Navbar.Collapse>
        </Navbar>
    </div >;
};

export default withApollo(AppNavbar);
