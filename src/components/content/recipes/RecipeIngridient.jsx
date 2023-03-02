import styles from './RecipeIngridient.module.css';

let RecipeIngridient = (props) => {
    return (
        <div className={ styles.recipe_ingridient }>
            <span>{props.name}</span>
            <span>{props.value} {props.unit}</span>
        </div>
    );
}

export default RecipeIngridient;