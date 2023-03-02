import styles from './RecipeInfo.module.css';

let RecipeInfo = (props) => {
    return (
        <div className={ styles.recipe_header_info }>
            <div className={ styles.persones }>{props.persones} порции</div>
            <div className={ styles.time }>{props.time} минут</div>
            <div className={ styles.likes }>{props.likes} отметок</div>
        </div>
    );
}

export default RecipeInfo;