import styles from './Signup.module.css';
import Button from '../../../UI/Button/Button';


/* signupInputs
setSignupInputs */

let Signup = (props) => {
    console.log(props);
    return (
        <div className={styles.contain}>
            <div className={styles.box}>
               <div className={styles.nameBox}>
                    Sign Up
                </div>
                <div>
                    <input type="text" placeholder='Имя' value={props.signupInputs.username} onChange={(e)=>{
                        props.setSignupInputs({...props.signupInputs, username: e.target.value})
                    }} />
                </div>
                <div>
                    <input type="email" placeholder='Email' value={props.signupInputs.email} onChange={(e)=>{
                        props.setSignupInputs({...props.signupInputs, email: e.target.value})
                    }} />
                </div>
                <div>
                    <input type="password" placeholder='Пароль' value={props.signupInputs.password1} onChange={(e)=>{
                        props.setSignupInputs({...props.signupInputs, password1: e.target.value})
                    }} />
                </div>
                <div>
                    <input type="password" placeholder='Повторите пароль' value={props.signupInputs.password2} onChange={(e)=>{
                        props.setSignupInputs({...props.signupInputs, password2: e.target.value})
                    }} />
                </div>
                <div onClick={() => {props.signup.dosignup()}}>
                    <Button name='Регистрация'/>
                </div>
            </div>
            

        </div>
    );
}

export default Signup;