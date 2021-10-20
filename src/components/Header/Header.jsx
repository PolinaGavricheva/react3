import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
            <header className={s.header}>
                <img className={s.header__img} src="https://e7.pngegg.com/pngimages/759/202/png-clipart-education-school-logo-learning-teaching-angle-class.png"/>
            </header>
    )
}

export default Header;