import { useParams } from "react-router-dom";
import styles from "./Recipe.module.css";

import FavoriteButton from "./../../../UI/FavoritesButton";

let Recipe = () => {
    const {id} = useParams();
    let data = {};
    /* Тут будет запрос рецепта по id */

    return (
        <div className={ styles.content }>
            <div className={ styles.recipe_header }>
                <div className={ styles.recipe_header_photo }></div>
                <div className={ styles.recipe_header_data }>
                    <div className={ styles.recipe_white_block }>
                        <div className={ styles.recipe_author_block }>
                            <div className={ styles.recipe_author_avatar }></div>
                            <div className={ styles.recipe_author_name }>doshik</div>
                        </div>
                        <div className={ styles.recipe_control }>
                            <div className={ styles.recipe_likes }>13</div>
                            <div className={ styles.recipe_button }>
                                <FavoriteButton action='false'/>
                            </div>
                        </div>
                    </div>
                    <div className={ styles.recipe_header_types }>Русская кухня - Супы</div>
                    <div className={ styles.recipe_header_name }>Сырный суп по-французски с курицей (место для второй строки при длинном названии)</div>
                    <div className={ styles.recipe_header_stats }>
                        <div className={ styles.persones }>4 порции</div>
                        <div className={ styles.time }>60 минут</div>
                        <div className={ styles.likes }>217 отметок</div>
                    </div>
                </div>
            </div>

            <div className={ styles.recipe_description }>
                Нежный суп с приятным сливочным вкусом перенесет Вас прямиком на улицы Парижа. Превосходное сочетание сырного супа и хрустящихсухариков никого не оставит равнодушным.
            </div>

            <div className={ styles.recipe_ingridients }>
                <div className={ styles.recipe_ingridient }>Вода - 1 л.</div>
                <div className={ styles.recipe_ingridient }>Кортофель - 0,5 кг.</div>
                <div className={ styles.recipe_ingridient }>Лук - 100 гр.</div>
            </div>

            <div className={ styles.recipe_steps }>

                <div className={ styles.recipe_step }>
                    <div className={ styles.recipe_step_photo }></div>
                    <div className={ styles.recipe_step_text }> Описание шаг 1 </div>
                </div>

                <div className={ styles.recipe_step }>
                    <div className={ styles.recipe_step_photo }></div>
                    <div className={ styles.recipe_step_text }> Описание шаг 2 </div>
                </div>

                <div className={ styles.recipe_step }>
                    <div className={ styles.recipe_step_photo }></div>
                    <div className={ styles.recipe_step_text }> Описание шаг 3 </div>
                </div>

                <div className={ styles.recipe_step }>
                    <div className={ styles.recipe_step_photo }></div>
                    <div className={ styles.recipe_step_text }> Описание шаг 4 </div>
                </div>

            </div>


        </div>
    )
}

export default Recipe;