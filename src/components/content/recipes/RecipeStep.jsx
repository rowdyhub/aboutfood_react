import styles from './RecipeStep.module.css';

let RecipeStep = (props) => {
    return (
        <div className={ styles.recipe_step }>
            <div className={ styles.recipe_step_photo }></div>
            <div className={ styles.recipe_step_text }>{props.text}</div>
        </div>
    );
}

export default RecipeStep;