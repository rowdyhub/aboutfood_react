import { useParams } from "react-router-dom";
import styles from "./Recipe.module.css";

import FavoriteButton from "./../../../UI/FavoritesButton";

let Recipe = () => {
    const {id} = useParams();
    let data = {};
    /* Тут будет запрос рецепта по id */

    return (
        <div class={ styles.content }>
            <div class={ styles.recipe_header }>
                <div class={ styles.recipe_header_photo }></div>
                <div class={ styles.recipe_header_data }>
                    <div class={ styles.recipe_white_block }>
                        <div class={ styles.recipe_author_block }>
                            <div className={ styles.recipe_author_avatar }></div>
                            <div className={ styles.recipe_author_name }>doshik</div>
                        </div>
                        <div class={ styles.recipe_control }>
                            <div className={ styles.recipe_likes }>13</div>
                            <div className={ styles.recipe_button }>
                                <FavoriteButton action='false'/>
                            </div>
                        </div>
                    </div>
                    <div class={ styles.recipe_header_types }>Русская кухня - Супы</div>
                    <div class={ styles.recipe_header_name }>name</div>
                    <div class={ styles.recipe_header_stats }>positions</div>
                </div>
            </div>
            <div>description</div>
            <div>steps</div>
        </div>
    )
}

export default Recipe;