import styles from './Signup.module.css';
import Button from '../../../UI/Button/Button';
import { createRef } from 'react';

let usernameref = createRef();
let useremailref = createRef();
let userpasswordaref = createRef();
let userpasswordbref = createRef();

let Signup = (props) => {
    return (
        <div className={styles.contain}>
            <div className={styles.box}>
                <div className={styles.nameBox}>
                    Sign Up
                </div>
                <div>
                    <input type="text" ref={usernameref} placeholder='Имя' value={props.signup.usernameinput} onChange={()=>{props.signup.changevalue('username', usernameref.current.value)}} />
                </div>
                <div>
                    <input type="email" ref={useremailref} placeholder='Email' value={props.signup.useremailinput} onChange={()=>{props.signup.changevalue('useremail', useremailref.current.value)}} />
                </div>
                <div>
                    <input type="password" ref={userpasswordaref} placeholder='Пароль' value={props.signup.userpasswordainput} onChange={()=>{props.signup.changevalue('userpassworda', userpasswordaref.current.value)}} />
                </div>
                <div>
                    <input type="password" ref={userpasswordbref} placeholder='Повторите пароль' value={props.signup.userpasswordbinput} onChange={()=>{props.signup.changevalue('userpasswordb', userpasswordbref.current.value)}} />
                </div>
                <div onClick={() => {props.signup.dosignup()}}>
                    <Button name='Регистрация'/>
                </div>
            </div>
            

        </div>
    );
}

export default Signup;