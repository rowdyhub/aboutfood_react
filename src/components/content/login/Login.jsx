import styles from './Login.module.css';
import Button from '../../../UI/Button/Button';

let Login = (props) => {
    console.log(props);
    return (
        <div className={styles.contain}>
            <div className={styles.box}>
                <div className={styles.nameBox}>
                    Login
                </div>
                <div>
                    <input 
                        type="email" 
                        placeholder='Email' 
                        value={props.loginInputs.email} 
                        onChange={(e) => { props.setLoginInputs({...props.loginInputs, email: e.target.value}) }}/>
                </div>
                <div>
                    <input 
                        type="password" 
                        placeholder='Пароль' 
                        value={props.loginInputs.password} 
                        onChange={(e) => { props.setLoginInputs({...props.loginInputs, password: e.target.value}) }}/>
                </div>
                <div onClick={()=>{props.login.dologin()}}>
                    <Button name='Войти'/>
                </div>
            </div>
        </div>
    );
}

export default Login;