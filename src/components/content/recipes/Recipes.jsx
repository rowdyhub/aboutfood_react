import styles from "./Recipes.module.css"
import RecipesCard from "./RecipesCard";

let Recipes = (props) => {
    return (
        <div className={styles.recipesCont}>
            {/* Filter component */}
            <div className={styles.filter}>

                <div className={styles.section}>
                    <div className={styles.nameSection}>По дате</div>
                    <select name="filDate" id="filDate">
                        <option value="new">Сначала новые</option>
                        <option value="old">Сначала старые</option>
                    </select>
                </div>

                <div className={styles.section}>
                    <div className={styles.nameSection}>По популярности</div>
                    <select name="filRel" id="filRel">
                        <option value="new">Не важно</option>
                        <option value="old">Сначала популярные</option>
                        <option value="old">Сначала не популярные</option>
                    </select>
                </div>

                <div className={styles.section}>
                    <div className={styles.nameSection}>Кухня</div>
                    <select name="filRel" id="filRel">
                        <option value="new">Не важно</option>
                        <option value="old">Русская</option>
                        <option value="old">Японская</option>
                        <option value="old">Французская</option>
                    </select>
                </div>

                <div className={styles.section}>
                    <div className={styles.nameSection}>Категория</div>
                    <select name="filRel" id="filRel">
                        <option value="new">Не важно</option>
                        <option value="old">Первые блюда</option>
                        <option value="old">Вторые блюда</option>
                        <option value="old">Салаты</option>
                        <option value="old">Закуски</option>
                    </select>
                </div>

                <div className={styles.section}>
                    <div className={styles.nameSection}>Тип</div>
                    <select name="filRel" id="filRel">
                        <option value="new">Не важно</option>
                        <option value="old">Рецепт</option>
                        <option value="old">Статья</option>
                    </select>
                </div>

            </div>
            {/* Filter component END */}


            {/* Recipes component */}
            
            <div className={styles.recipesCardCont}>
                {
                    props.recipes.map((elem) => {
                        return <RecipesCard elem={elem}  key={elem.id}/>
                    })
                }
                


                {/* <div className={styles.recipesCard}>
                    <div className={styles.cover} style={{
                        backgroundImage: `url("images/rice.jpg")`,
                        backgroundSize: `cover`,
                        backgroundPosition: `50%`
                        }}>

                    </div>
                    <div className={styles.discription}>
                        <div className={ styles.links }>Японская кухня<span className={ styles.delim }>♦</span>Салаты</div>
                        <div className={ styles.name }>Японский салат с рисом</div>
                        <div className={ styles.text }>Совмещая в себе простоту в приготовлении и пользу, этот салат станет прекрасным началом дня. Питательный рис с кисло сладкой заправкой поднимут Ваше настроение в начале дня и дадут достатчно энергии.</div>
                    </div>
                    <div className={styles.stat}>
                        <RecipeInfo />
                        <div className={ styles.control }>
                            <FavoriteButton action='true'/>
                        </div>
                    </div>
                </div>
 */}



                
            </div>
            {/* Recipes component END*/}
        </div> 
    );
}

export default Recipes;