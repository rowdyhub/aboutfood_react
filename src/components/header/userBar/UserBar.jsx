import { NavLink } from 'react-router-dom';
import styles from './UserBar.module.css';

let UserBar = () => {
    return (
        <div className={styles.userBarCont}>
            <div className={styles.userBar}>
                <div className={styles.userPic}></div>
                <div className={styles.userName}>
                    <div><NavLink to='/login'>Вход</NavLink> или</div>
                    <div><NavLink to='/signup'>Регистрация</NavLink></div>
                </div>
            </div>
            
            
        </div>
    )
}

export default UserBar;