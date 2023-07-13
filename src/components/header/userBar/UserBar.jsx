import { NavLink } from 'react-router-dom';

import Login from '../../content/login/Login';
import Signup from "../../content/signup/Signup";

import styles from './UserBar.module.css';

let UserBar = (props) => {
    if(!props.state.user.userAuth){
        props.state.user.userInfo.userPic = `./images/userPicDefault.png`;
    }
    return (
        <div className={styles.userBarCont}>
            <div className={styles.userBar}>
                <div className={styles.userPic} style={{backgroundImage: `url(${props.state.user.userInfo.userPic})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderRadius: '50%', backgroundPosition: '50%'}}></div>
                
                {
                    props.state.user.userAuth
                        ? <div className={styles.userName}>
                            <NavLink to={`/profile/${props.state.user.userInfo.userID}`} title='Профиль'> {props.state.user.userInfo.userName} </NavLink> 
                        </div>
                        : <div className={styles.userName}>
                            <div><span className={styles.loginSpan} onClick={()=>{props.modal(<Login login={props.state.login}/>)}}>Вход</span> или</div>
                            <div><span className={styles.signupSpan} onClick={()=>{props.modal(<Signup signup={props.state.signup}/>)}}>Регистрация</span></div>
                        </div>
                
                }
            </div>
            
            
        </div>
    )
}

export default UserBar;