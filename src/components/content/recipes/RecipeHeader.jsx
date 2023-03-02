import styles from './RecipeHeader.module.css'
import FavoriteButton from "./../../../UI/FavoritesButton";
import RecipeInfo from "./RecipeInfo";

let RecipeHeader = (props) => {
    return (
        <div className={ styles.recipe_header }>
            <div className={ styles.recipe_header_photo }></div>
            <div className={ styles.recipe_header_data }>
                <div className={ styles.recipe_white_block }>
                    <div className={ styles.recipe_author_block }>
                        <div className={ styles.recipe_author_avatar }></div>
                        <div className={ styles.recipe_author_name }>{ props.userName }</div>
                    </div>
                    <div className={ styles.recipe_control }>
                        <div className={ styles.recipe_likes }>{ props.likes }</div>
                        <div className={ styles.recipe_button }>
                            <FavoriteButton action='false'/>
                        </div>
                    </div>
                </div>
                <div className={ styles.recipe_header_types }>{ props.cuisine } - { props.category }</div>
                <div className={ styles.recipe_header_name }>{ props.name }</div>
                <RecipeInfo persones={props.persones} time={props.time} likes={props.likes}/>
            </div>
        </div>
    );
}

export default RecipeHeader;