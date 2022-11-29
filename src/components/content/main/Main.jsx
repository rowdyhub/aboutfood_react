import LastPost from "./LastPost";
import Post from "./Post";

import styles from "./Main.module.css"

let Main = (props) => {
    
    return (
        <div className={styles.mainCont}>
            <div className={styles.lastPosts}>

                { props.props.map((elem) => {
                    return <LastPost key={elem.id} props={elem} />
                }) }

            </div>
            <div className={styles.posts}>

                { props.props.map((elem) => {
                    return <Post key={elem.id} props={elem} />
                }) }

            </div>
        </div> 
    );
}
export default Main;