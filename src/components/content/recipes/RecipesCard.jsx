import styles from './RecipesCard.module.css';
import FavoriteButton from "../../../UI/FavoritesButton/FavoritesButton";
import RecipeInfo from "./RecipeInfo";
import { NavLink } from 'react-router-dom';

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
                    <NavLink to={`/recipes/${props.elem.id}`}>{props.elem.name}</NavLink>
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