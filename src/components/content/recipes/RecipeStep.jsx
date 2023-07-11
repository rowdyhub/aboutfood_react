import styles from './RecipeStep.module.css';

let RecipeStep = (props) => {
    return (
        <div className={ styles.recipe_step }>
            <div className={ styles.recipe_step_photo }  style={{backgroundImage: `url(${props.imageURL})`, backgroundSize: 'cover', backgroundPosition: '50% 50%'}}></div>
            <div className={ styles.recipe_step_text }>{props.text}</div>
        </div>
    );
}

export default RecipeStep;