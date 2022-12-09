import { NavLink } from 'react-router-dom';

import styles from './Nav.module.css'
import './Nav.css'

let Nav = () => {
    return (
        <div className={styles.navCont}>
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/recipes">Рецепты</NavLink>
            <NavLink to="/getmenu">Подбор рецептов</NavLink>
        </div>
    )
}

export default Nav;