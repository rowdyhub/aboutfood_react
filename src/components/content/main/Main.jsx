import MorePost from "./MorePost";
import Post from "./Post";
import { Link } from "react-router-dom";
import RecipesCard from "../recipes/RecipesCard";

import styles from "./Main.module.css"
import Carousel from "../../../UI/Carousel/Carousel";

let Main = (props) => {
    


    return (
        <div className={styles.mainCont}>
            <div className={styles.carousel}>
                <Carousel />
            </div>

            
            <h2>Интересные рецепты:</h2> 
            <div>
                    { props.state.recipes.map((elem) => {
                        return <RecipesCard elem={elem} key={elem.id}/>
                    }) }
                    <Link className={styles.moreButton} to="/recipes">Бльше рецептов</Link>
            </div>
            

            <h2>Публикации:</h2> 
            <div className={styles.posts}>
                { props.state.posts.map((elem, ind) => {
                    return <Post key={elem.id} props={elem} />
                }) }
                <MorePost />
            </div>
        </div> 
    );
}
export default Main;