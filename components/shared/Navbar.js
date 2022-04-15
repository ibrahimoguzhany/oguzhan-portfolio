import { Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'

const AppLink = ({ href, className, children }) => {
    return <Link href={href}>
        <a className={"nav-link " + className} >
            {children}
        </a>

    </Link>
}


const AppNavbar = () => {
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
                <Nav>
                    <AppLink href="/login" className="mr-3">Sign In</AppLink>
                    <AppLink href="/register" className="mr-3 btn btn-success bg-green-2 bright">Sign Up</AppLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div >
}

export default AppNavbar
