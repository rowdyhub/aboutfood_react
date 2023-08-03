import styles from './Modal.module.css';
import Login from '../../components/content/login/Login';
import Signup from '../../components/content/signup/Signup';



const Modal = ({visible, setVisible, content, ...props}) => {
    const rootClasses = [styles.modalMain];
    if(visible){
        rootClasses.push(styles.active)
    }

    let inModal;
    if (content === 'login') {
        inModal = <Login loginInputs={props.loginInputs} setLoginInputs={props.setLoginInputs}/>
    } else if(content === 'signup') {
        inModal = <Signup signupInputs={props.signupInputs} setSignupInputs={props.setSignupInputs}/>
    }


    return (
        <div className={rootClasses.join(" ")} onClick={() => {setVisible(false)}}>
            <div className={styles.modalContent} onClick={(e) => {e.stopPropagation()}}>
                {inModal}                
            </div>
        </div>
    )
}

export default Modal;