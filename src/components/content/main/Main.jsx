import LastPost from "./LastPost";
import Post from "./Post";

import styles from "./Main.module.css"

let Main = (props) => {
    
    return (
        <div className={styles.mainCont}>
            <h1>Последние посты:</h1> 
            <div className={styles.posts}>
                { props.props.posts.map((elem, ind) => {
                    if(ind < 2) {
                        return <LastPost key={elem.id} props={elem} />
                    }
                    else {
                        return <Post key={elem.id} props={elem} />
                    }
                }) }

            </div>

            
            <h1>Интересные рецепты:</h1> 
            <div>
                
            </div>
        </div> 
    );
}
export default Main;