import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const {user, LogOut} = useContext(AuthContext);

    const handleLogOut = () => {
        LogOut()
        .then(()=>{})
        .catch( error => (error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link className="btn btn-ghost normal-case text-3xl">Awesome Auth</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/product'>Product</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log in</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {user?.email && <span>Welcome {user.email}</span>}
                {
                    user?.email ?
                    <button onClick={handleLogOut} className="btn btn-ghost normal-case text-xl btn-sm">Log Out</button>
                    :
                    <Link to='/login'><button className="btn btn-ghost normal-case text-xl btn-sm">Log In</button></Link>
                }
            </div>
            
        </div>
    );
};

export default Header;