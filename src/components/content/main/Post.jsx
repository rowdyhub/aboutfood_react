import styles from "./Main.module.css";

let Post = (props) => {
    
    return (
        <div className={styles.post}>
            <div className={styles.picture} style={{ backgroundImage: `url(/images/${props.props.image})`,  backgroundSize: 'cover'}}>

            </div>
            <div className={styles.description}>
                <div className={styles.name}>{ props.props.name }</div>
                <div className={styles.text}>{ props.props.discrition }</div>
                <div className={styles.links}>{ props.props.hashtags }</div>
            </div>
        </div>
    )
}


export default Post;