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
                id={props.props.id} 
                userId={props.props.userId} 
                mainImageUrl={props.props.mainImageUrl} 
                userAvatar={props.props.userAvatar} 
                userName={props.props.userName} 
                liked={props.props.liked}
                likes={props.props.likes} 
                name={props.props.name} 
                cuisine={props.props.cuisine} 
                category={props.props.category} 
                persones={props.props.persones} 
                time={props.props.time} />

            <div className={ styles.recipe_description }>
                {props.props.description}
            </div>

            <div className={ styles.recipe_ingridients }>
                {props.props.ingridients.map((elem)=>{
                    return <RecipeIngridient name={elem.name} value={elem.value} unit={elem.unit}/>
                })}
                
            </div>

            <div className={ styles.recipe_steps }>
                {props.props.steps.map((elem)=>{
                    return <RecipeStep imageURL={elem.imageURL} text={elem.text}/>
                })}
            </div>


        </div>
    )
}

export default Recipe;