import styles from './RecipeHeader.module.css'
import FavoriteButton from "../../../UI/FavoritesButton/FavoritesButton";
import RecipeInfo from "./RecipeInfo";
import stylesRI from './RecipeInfo.module.css';

let RecipeHeader = (props) => {
    return (
        <div className={ styles.recipe_header }>
            <div className={ styles.recipe_header_photo } style={{backgroundImage: `url(${props.mainImageUrl})`, backgroundSize: 'cover', backgroundPosition: '50% 50%'}}></div>
            <div className={ styles.recipe_header_data }>
                <div className={ styles.recipe_white_block }>
                    <div className={ styles.recipe_author_block }>
                        <div className={ styles.recipe_author_avatar }></div>
                        <div className={ styles.recipe_author_name }>{ props.userName }</div>
                    </div>
                    <div className={ styles.recipe_control }>
                        <div className={ styles.recipe_likes }>{ props.likes }</div>
                        <div className={ styles.recipe_button }>
                            <FavoriteButton action={props.liked}/>
                        </div>
                    </div>
                </div>
                <div className={ styles.recipe_header_types }>{ props.cuisine } - { props.category }</div>
                <div className={ styles.recipe_header_name }>{ props.name }</div>
                <div className={ styles.recipe_informations}>
                    <div className={ styles.recipe_informations_buttons}>
                        <span className={ stylesRI.persones }></span>
                        { props.persones } порций
                    </div>
                    <div className={ styles.recipe_informations_buttons}>
                        <span className={ stylesRI.time }></span>
                        { props.time } минут
                    </div>
                    <div className={ styles.recipe_informations_buttons}>
                        <span className={ stylesRI.likes }></span>
                        { props.likes } отметок
                    </div>
                </div>
                {/* <RecipeInfo persones={props.persones} time={props.time} likes={props.likes}/> */}
            </div>
        </div>
    );
}

export default RecipeHeader;



