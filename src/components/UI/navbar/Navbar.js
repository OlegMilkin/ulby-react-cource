import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../../context';
import MyButton from '../button/MyButton';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        localStorage.removeItem('auth')
        setIsAuth(false)
    }
    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <Link to="/about" >About</Link>
                <Link to="/posts">Posts</Link>
                {
                    isAuth && (
                        <MyButton onClick={logout}>Выйти</MyButton>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;
