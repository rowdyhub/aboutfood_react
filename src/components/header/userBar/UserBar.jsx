import { NavLink } from 'react-router-dom';

import styles from './UserBar.module.css';

let UserBar = (props) => {
    if(!props.user.userAuth){
        props.user.userInfo.userPic = `./images/userPicDefault.png`;
    }
    return (
        <div className={styles.userBarCont}>
            <div className={styles.userBar}>
                <div className={styles.userPic} style={{backgroundImage: `url(${props.user.userInfo.userPic})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderRadius: '50%', backgroundPosition: '50%'}}></div>
                
                {
                    props.user.userAuth
                        ? <div className={styles.userName}>
                            <NavLink to={`/profile/${props.user.userInfo.userID}`} title='Профиль'> {props.user.userInfo.userName} </NavLink> 
                        </div>
                        : <div className={styles.userName}>
                            <div><span className={styles.loginSpan} onClick={()=>{props.modal('login')}}>Вход</span> или</div>
                            <div><span className={styles.signupSpan} onClick={()=>{props.modal('signup')}}>Регистрация</span></div>
                        </div>
                
                }
            </div>
            
            
        </div>
    )
}

export default UserBar;