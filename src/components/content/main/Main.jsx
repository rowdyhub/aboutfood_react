import LastPost from "./LastPost";
import Post from "./Post";

import styles from "./Main.module.css"

let Main = (props) => {
    
    return (
        <div className={styles.mainCont}>
            <h1>Последние посты:</h1> 
            <div className={styles.posts}>
                { props.props.map((elem, ind) => {
                    if(ind < 2) {
                        return <LastPost key={elem.id} props={elem} />
                    }
                    else {
                        return <Post key={elem.id} props={elem} />
                    }
                }) }

            </div>
        </div> 
    );
}
export default Main;