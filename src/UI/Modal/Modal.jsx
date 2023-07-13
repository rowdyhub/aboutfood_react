import styles from './Modal.module.css';



const Modal = ({visible, setVisible, content}) => {
    const rootClasses = [styles.modalMain];
    if(visible){
        rootClasses.push(styles.active)
    }

    return (
        <div className={rootClasses.join(" ")} onClick={() => {setVisible(false)}}>
            <div className={styles.modalContent} onClick={(e) => {e.stopPropagation()}}>
                {content}
            </div>
        </div>
    )
}

export default Modal;