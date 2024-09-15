import styles from './Modal.module.css';
import Login from '../../components/content/login/Login';
import Signup from '../../components/content/signup/Signup';



const Modal = ({visible, setVisible, content, ...props}) => {
    const rootClasses = [styles.modalMain];
    if(visible){
        rootClasses.push(styles.active)
        document.body.style.overflowY = 'hidden';
    }

    let modalWindowContent;
    if (content === 'login') {
        modalWindowContent = <Login loginInputs={props.loginInputs} setLoginInputs={props.setLoginInputs} doLogin={props.doLogin}/>
    } else if(content === 'signup') {
        modalWindowContent = <Signup signupInputs={props.signupInputs} setSignupInputs={props.setSignupInputs}/>
    }


    return (
        <div className={rootClasses.join(" ")} onClick={() => {setVisible(false); document.body.style.overflowY = 'scroll';}}> {/* FIXME */}
            <div className={styles.modalContent} onClick={(e) => {e.stopPropagation()}}>
                {modalWindowContent}
            </div>
        </div>
    )
}

export default Modal;