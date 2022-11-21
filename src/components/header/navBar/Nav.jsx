import styles from './Nav.module.css'

let Nav = () => {
    return (
        <div className={styles.navCont}>
            <a href="/">Главная</a>
            <a href="/recipes">Рецепты</a>
            <a href="/getMenu">Подбор рецептов</a>
        </div>
    )
}

export default Nav;