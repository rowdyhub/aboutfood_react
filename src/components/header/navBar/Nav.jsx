import { Link } from 'react-router-dom';

import styles from './Nav.module.css'

let Nav = () => {
    return (
        <div className={styles.navCont}>
            <Link to="/">Главная</Link>
            <Link to="/recipes">Рецепты</Link>
            <Link to="/getmenu">Подбор рецептов</Link>
        </div>
    )
}

export default Nav;