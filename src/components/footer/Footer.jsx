import { Link } from 'react-router-dom';

import styles from "./Footer.module.css"

let Footer = () => {
    return (
        <div className={ styles.footerCont }>
            <footer className={ styles.footer }>
                <div className={ styles.column }>
                    <div className={ styles.row }>© ABOUT FOOD, 2021-2022</div>
                    <div className={ styles.row }>Перепечатка материалов данного сайта возможна только с письменного разрешения редакции. При цитировании ссылка на <a href="www.aboutfood.ru">www.aboutfood.ru</a> обязательна.</div>
                    <div className={ styles.row }>Email: <a>info@aboutfood.ru</a></div>
                    <div className={ styles.row }>Дизайн: <a>Sergey Nasibulin</a></div>
                </div>
                <div className={ styles.column }>
                    <Link className={ styles.link } to='/'>Главная</Link>
                    <Link className={ styles.link } to='/recipes'>Рецепты</Link>
                    <Link className={ styles.link } to='/getmenu'>Подбор рецептов</Link>
                    <Link className={ styles.link } to='/about'>О нас</Link>
                </div>
                <div className={ styles.column }>Счетчики</div>
            </footer>
        </div>
    )
}

export default Footer;