import { Link } from 'react-router-dom';
import '../App.css';
export default function Nav() {
    return (
        <nav className="navbar">
            <div className="nav-bar-container">
                <Link to="/" className='nav-bar-brank'>Shophub</Link>
            </div>
            <div className="nav-bar-links">
                <Link to="/">Home</Link>
                <Link to="/check">Cart</Link>
            </div>
            <div className='nav-bar-auth'>
                <div className='nav-bar-auth-links'>
                    <Link to="/auth">Login</Link>
                    <Link to="/auth">SignUp</Link>
                </div>
            </div>
        </nav>
    );
}