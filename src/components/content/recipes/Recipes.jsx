import styles from "./Recipes.module.css"

let Recipes = () => {
    return (
        <div className={styles.recipesCont}>
            <div className={styles.filter}>

                <label htmlFor="filDate">По дате</label>
                <select name="filDate" id="filDate">
                    <option value="new">Сначала новые</option>
                    <option value="old">Сначала старые</option>
                </select>

                <label htmlFor="filRel">По популярности</label>
                <select name="filRel" id="filRel">
                    <option value="new">Сначала новые</option>
                    <option value="old">Сначала старые</option>
                </select>

            </div>
            <div className={styles.recipesCardCont}>
                <div className={styles.recipesCard}>
                    <div className={styles.cover}>

                    </div>
                    <div className={styles.discription}>
                        <div>Японская кухня     ♦    Салаты</div>
                        <div>Японский салат с рисом</div>
                        <div>Совмещая в себе простоту в приготовлении и пользу, этот салат станет прекрасным началом дня. Питательный рис с кисло сладкой заправкой поднимут Ваше настроение в начале дня и дадут достатчно энергии.</div>
                    </div>
                    <div className={styles.stat}>
                        <div>4 порции</div>
                        <div>60 минут</div>
                        <div>217 отметок</div>
                        <div>В избранное</div>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default Recipes;