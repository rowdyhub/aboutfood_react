import { useParams } from "react-router-dom";
import styles from "./Recipe.module.css";
import RecipeStep from "./RecipeStep";
import RecipeIngridient from "./RecipeIngridient";
import RecipeHeader from "./RecipeHeader";


let Recipe = (props) => {
    const {id} = useParams();
    let data = {};
    /* Тут будет запрос рецепта по id */
    return (
        <div className={ styles.content }>
            {id}
            <RecipeHeader 
                id={props.state.id} 
                userId={props.state.userId} 
                mainImageUrl={props.state.mainImageUrl} 
                userAvatar={props.state.userAvatar} 
                userName={props.state.userName} 
                liked={props.state.liked}
                likes={props.state.likes} 
                name={props.state.name} 
                cuisine={props.state.cuisine} 
                category={props.state.category} 
                persones={props.state.persones} 
                time={props.state.time} />

            <div className={ styles.recipe_description }>
                {props.state.description}
            </div>

            <div className={ styles.recipe_ingridients }>
                {props.state.ingridients.map((elem)=>{
                    return <RecipeIngridient name={elem.name} value={elem.value} unit={elem.unit}/>
                })}
                
            </div>

            <div className={ styles.recipe_steps }>
                {props.state.steps.map((elem)=>{
                    return <RecipeStep imageURL={elem.imageURL} text={elem.text}/>
                })}
            </div>


        </div>
    )
}

export default Recipe;