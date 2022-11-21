import styles from './UserBar.module.css';

let UserBar = () => {
    return (
        <div className={styles.userBarCont}>
            <div className={styles.userBar}>
                <div className={styles.userPic}></div>
                <div className={styles.userName}>
                    <div><a href='/login'>Войти</a> или</div>
                    <div><a href='/signup'>Зарегистрироваться</a></div>
                </div>
            </div>
            
            
        </div>
    )
}

export default UserBar;