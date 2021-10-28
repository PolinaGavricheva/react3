import {NavLink} from 'react-router-dom';
import s from './Header.module.css';
import React from 'react';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img className={s.header__img} src="https://e7.pngegg.com/pngimages/759/202/png-clipart-education-school-logo-learning-teaching-angle-class.png"/>

            <div className={s.loginBlock}>
                { props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header;