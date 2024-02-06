import { NavLink } from 'react-router-dom';

import styles from './Nav.module.css'
import './Nav.css'

let Nav = () => {
    return (
        <div className={styles.navCont}>
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/recipes">Рецепты</NavLink>
            <NavLink to="/admin">Админка</NavLink> {/* /getmenu */}
        </div>
    )
}

export default Nav;