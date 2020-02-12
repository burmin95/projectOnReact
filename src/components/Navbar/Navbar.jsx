import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div>
                <div className={classes.item}>
                    <NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/dialogs' activeClassName={classes.activeLink}>Messages</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/news' activeClassName={classes.activeLink}>News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/music' activeClassName={classes.activeLink}>Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/settings' activeClassName={classes.activeLink}>Settings</NavLink>
                </div>
            </div>
            <div className={classes.friends}>
                <h3>Friends</h3>
                <div className={classes.blockFriends}>
                    <div className={classes.friendsItem}>
                        <img src='https://vignette.wikia.nocookie.net/avatar/images/f/f4/3%D1%8521_%D0%90%D0%B0%D0%BD%D0%B3.jpg/revision/latest?cb=20110327121409&path-prefix=ru'/>
                        Andrew
                    </div>
                    <div className={classes.friendsItem}>
                        <img src='https://vignette.wikia.nocookie.net/avatar/images/1/10/%D0%9A1%D1%8509_%D0%92%D0%B7%D1%80%D0%BE%D1%81%D0%BB%D1%8B%D0%B9_%D0%90%D0%B0%D0%BD%D0%B3.jpg/revision/latest?cb=20150327073432&path-prefix=ru'/>
                        Sasha
                    </div>
                    <div className={classes.friendsItem}>
                        <img src='https://i2hard.ru/upload/iblock/199/199c0decac7c36f0e3ae3c6d87e7f21d.jpg'/>
                        Petya
                    </div>
                </div>
            </div>

        </nav>
    )
}
export default Navbar;