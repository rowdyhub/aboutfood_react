import styles from './Modal.module.css';

const Modal = (props) => {
    return (
        <div className={styles.modalMain}>
            <div className={styles.modalContent}>
                <a href="https://youtu.be/GNrdg3PzpJQ?t=5218">Далее</a>
            </div>
        </div>
    )
}

export default Modal;