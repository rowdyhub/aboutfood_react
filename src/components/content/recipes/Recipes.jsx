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
                        <div className={ styles.links }>Японская кухня <span className={ styles.delim }>♦</span> Салаты</div>
                        <div className={ styles.name }>Японский салат с рисом</div>
                        <div className={ styles.text }>Совмещая в себе простоту в приготовлении и пользу, этот салат станет прекрасным началом дня. Питательный рис с кисло сладкой заправкой поднимут Ваше настроение в начале дня и дадут достатчно энергии.</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={ styles.data}>
                            <div className={ styles.persones }>4 порции</div>
                            <div className={ styles.time }>60 минут</div>
                            <div className={ styles.likes }>217 отметок</div>
                        </div>
                        <div className={ styles.control }>
                            <div className={ styles.inOutFavorite }></div>
                        </div>
                    </div>
                </div>


                

                <div className={styles.recipesCard}>
                    <div className={styles.cover}>

                    </div>
                    <div className={styles.discription}>
                        <div className={ styles.links }>Японская кухня <span className={ styles.delim }>♦</span> Салаты</div>
                        <div className={ styles.name }>Японский салат с рисом</div>
                        <div className={ styles.text }>Совмещая в себе простоту в приготовлении и пользу, этот салат станет прекрасным началом дня. Питательный рис с кисло сладкой заправкой поднимут Ваше настроение в начале дня и дадут достатчно энергии.</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={ styles.data}>
                            <div className={ styles.persones }>4 порции</div>
                            <div className={ styles.time }>60 минут</div>
                            <div className={ styles.likes }>217 отметок</div>
                        </div>
                        <div className={ styles.control }>
                            <div className={ styles.inOutFavorite + ' ' + styles.action }></div>
                        </div>
                    </div>
                </div>




                
            </div>
        </div> 
    );
}

export default Recipes;