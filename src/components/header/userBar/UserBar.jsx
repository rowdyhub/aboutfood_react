import styles from './UserBar.module.css';

let UserBar = () => {
    return (
        <div className={styles.userBarCont}>
            <div className={styles.userBar}>
                <div className={styles.userPic}></div>
                <div className={styles.userName}>
                    <div>Войти или</div>
                    <div>Зарегистрироваться</div>
                </div>
            </div>
            
            
        </div>
    )
}

export default UserBar;