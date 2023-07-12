import styles from './RecipesCard.module.css';
import FavoriteButton from "../../../UI/FavoritesButton/FavoritesButton";
import RecipeInfo from "./RecipeInfo";
import { Link } from 'react-router-dom';

let RecipesCard = (props) => {
    return (
        <div className={styles.recipesCard}>
            <div className={styles.cover} style={{
                backgroundImage: `url(${props.elem.mainImageUrl})`,
                backgroundSize: `cover`,
                backgroundPosition: `50%`
                }}>

            </div>
            <div className={styles.discription}>
                <div className={ styles.links }> {props.elem.cuisine} <span className={ styles.delim }>♦</span>{props.elem.category}</div>
                <div className={ styles.name }>
                    <Link to={`/recipes/${props.elem.id}`}>{props.elem.name}</Link>
                </div>
                <div className={ styles.text }>{props.elem.description}</div>
            </div>
            <div className={styles.stat}>
                <RecipeInfo  persones={props.elem.persones} time={props.elem.time} likes={props.elem.likes}/>
                <div className={ styles.control }>
                    <FavoriteButton action={props.elem.liked}/>
                </div>
            </div>
        </div>
    );
}

export default RecipesCard;