import {Link} from 'react-router-dom';
import { ROUTE_AUTH, ROUTE_USER } from '../../config/routeConfig';
import { Images } from './../../static/Images';

const Header = () => {
    return (
        <>
           <header>
                <Link  to={ROUTE_USER?.HOME} ><img src={Images?.Logo} alt="Logo" width={100} height={50} /></Link>
                <ul>
                    <li>
                        <Link to={ROUTE_AUTH?.LOGIN}>Login</Link>
                    </li>
                    <li>
                        <Link to={ROUTE_AUTH?.REGISTER}>Register</Link>
                    </li>
                    <li>
                        <Link to={ROUTE_USER?.HOME}>Home</Link>
                    </li>
                    <li>
                        <Link to={ROUTE_USER?.ABOUT}>About</Link>
                    </li>
                    <li>
                        <Link to={ROUTE_USER?.CONTACT}>Contact</Link>
                    </li>
                </ul>
           </header>
        </>
    )
}

export default Header;