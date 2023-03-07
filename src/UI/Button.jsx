import styles from './Button.module.css';

let Button = (props) => {
    return (
        <button className={styles.button}> { props.name } </button>
    );
}

export default Button;