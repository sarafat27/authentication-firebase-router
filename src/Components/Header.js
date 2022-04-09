import React from 'react';
import { Link } from 'react-router-dom';
import useFireBase from '../Hooks/useFirebase';
import './Header.css'
const Header = () => {
    const { user, handleSignOut } = useFireBase();
    return (
        <div className='header'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/products'>products</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/register'>Register</Link>
                <span>{user?.displayName && user.displayName}</span>
                {user?.uid ?
                    <button onClick={handleSignOut}>
                        <Link to='/signOut'>sign out</Link>
                    </button> :
                    <Link to='/login'>Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;