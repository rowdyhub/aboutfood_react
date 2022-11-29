import styles from "./Main.module.css";

let LastPost = (props) => {
    
    return (
        <div className={styles.lastPost} style={{ backgroundImage: `url(/images/${props.props.image})`,  backgroundSize: 'cover'}}>
            <div className={styles.description}>
                <div className={styles.name}>{ props.props.name }</div>
                <div className={styles.text}>{ props.props.discrition }</div>
                <div className={styles.links}>{ props.props.hashtags }</div>
            </div>
        </div>
    )
}


export default LastPost;