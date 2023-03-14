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
                            <div><NavLink to='/login'>Вход</NavLink> или</div>
                            <div><NavLink to='/signup'>Регистрация</NavLink></div>
                        </div>
                
                }
            </div>
            
            
        </div>
    )
}

export default UserBar;