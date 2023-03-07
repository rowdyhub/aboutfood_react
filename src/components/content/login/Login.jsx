import styles from './Login.module.css';
import Button from '../../../UI/Button';

let Login = () => {
    return (
        <div className={styles.contain}>
            <div className={styles.box}>
                <div className={styles.nameBox}>
                    Login
                </div>
                <div>
                    <input type="email" id='useremail' placeholder='Email'/>
                </div>
                <div>
                    <input type="password" id='userpassworda' placeholder='Пароль'/>
                </div>
                <div>
                    <Button name='Войти'/>
                </div>
            </div>
        </div>
    );
}

export default Login;