import { Routes, Route } from 'react-router-dom';

import Main from "./../../components/content/main/Main";
import Recipes from "./../../components/content/recipes/Recipes";
import Recipe from "./../../components/content/recipes/Recipe";
import GetMenu from "./../../components/content/getmenu/GetMenu";
import Notfoundpage from "./../../components/content/notfoundpage/Notfoundpage";

import styles from './Content.module.css';

let Content = (props) => {
    return (
        <div className={ styles.contentCont }>
            <div className={ styles.content }>
                <Routes>
                    <Route path="/" element={ <Main props={props.props} /> }/>
                    <Route path="/recipes" element={ <Recipes recipes={props.props.recipes} /> }/>
                    <Route path="/recipes/:id" element={ <Recipe  props={props.props.recipeResolve} /> }/>
                    <Route path="/getmenu" element={ <GetMenu /> }/>
                    <Route path="*" element={ <Notfoundpage /> }/>
                </Routes>
            </div>
        </div>
    )
}

export default Content;