import LastPost from "./LastPost";
import Post from "./Post";

import styles from "./Main.module.css"
import Carousel from "../../../UI/Carousel/Carousel";

let Main = (props) => {
    
    return (
        <div className={styles.mainCont}>
            <div className={styles.carousel}>
                <Carousel />
            </div>


            <h1>Последние посты:</h1> 
            <div className={styles.posts}>
                { props.state.posts.map((elem, ind) => {
                    if(ind < 0) {
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