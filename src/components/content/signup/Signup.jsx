import styles from './Signup.module.css';

import Button from '../../../UI/Button';

let Signup = () => {
    return (
        <div className={styles.contain}>
            <div className={styles.box}>
                <div className={styles.nameBox}>
                    Sign Up
                </div>
                <div>
                    <input type="text" id='username' placeholder='Имя'/>
                </div>
                <div>
                    <input type="email" id='useremail' placeholder='Email'/>
                </div>
                <div>
                    <input type="password" id='userpassworda' placeholder='Пароль'/>
                </div>
                <div>
                    <input type="password" id='userpasswordb' placeholder='Повторите пароль'/>
                </div>
                <div>
                    <Button name='Регистрация'/>
                </div>
            </div>
            

        </div>
    );
}

export default Signup;