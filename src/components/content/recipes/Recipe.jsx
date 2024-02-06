import { useParams } from "react-router-dom";
import styles from "./Recipe.module.css";
import RecipeStep from "./RecipeStep";
import RecipeIngridient from "./RecipeIngridient";
import RecipeHeader from "./RecipeHeader";


let Recipe = (props) => {
    const {id} = useParams();

    let recipe = {};
    props.state.map((elem)=>{
        if(parseInt(elem.id) === parseInt(id)) {
            recipe = elem;
        }
    });
    /* Тут будет запрос рецепта по id */
    return (
        <div className={ styles.content }>
            {id}
            <RecipeHeader 
                id={recipe.id} 
                userId={recipe.userId} 
                mainImageUrl={recipe.mainImageUrl} 
                userAvatar={recipe.userAvatar} 
                userName={recipe.userName} 
                liked={recipe.liked}
                likes={recipe.likes} 
                name={recipe.name} 
                cuisine={recipe.cuisine} 
                category={recipe.category} 
                persones={recipe.persones} 
                time={recipe.time} />

            <div className={ styles.recipe_description }>
                {recipe.description}
            </div>

            <div className={ styles.recipe_ingridients }>
                {recipe.ingridients.map((elem)=>{
                    return <RecipeIngridient key={elem.ingridientID} name={elem.name} value={elem.value} unit={elem.unit}/>
                })}
                
            </div>

            <div className={ styles.recipe_steps }>
                {recipe.steps.map((elem)=>{
                    return <RecipeStep key={elem.inID} inID={elem.inID} imageURL={elem.imageURL} text={elem.text}/>
                })}
            </div>


        </div>
    )
}

export default Recipe;