import styles from './Login.module.css';
import Button from '../../../UI/Button/Button';
import { createRef } from 'react';
 
let useremailref = createRef();
let userpasswordref = createRef();

let Login = (props) => {
    return (
        <div className={styles.contain}>
            <div className={styles.box}>
                <div className={styles.nameBox}>
                    Login
                </div>
                <div>
                    <input type="email" ref={useremailref} placeholder='Email' value={props.login.useremailinput} onChange={() => { props.login.changevalue('useremail', useremailref.current.value) }}/>
                </div>
                <div>
                    <input type="password" ref={userpasswordref} placeholder='Пароль' value={props.login.userpasswordinput} onChange={() => { props.login.changevalue('userpassword', userpasswordref.current.value) }}/>
                </div>
                <div onClick={()=>{props.login.dologin()}}>
                    <Button name='Войти'/>
                </div>
            </div>
        </div>
    );
}

export default Login;