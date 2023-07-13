import { Routes, Route } from 'react-router-dom';

// import Login from './login/Login';
// import Signup from './signup/Signup';
import Main from "./../../components/content/main/Main";
import Recipes from "./../../components/content/recipes/Recipes";
import Recipe from "./../../components/content/recipes/Recipe";
import GetMenu from "./../../components/content/getmenu/GetMenu";
import Profile from './profile/Profile';
import Notfoundpage from "./../../components/content/notfoundpage/Notfoundpage";

import styles from './Content.module.css';

let Content = (props) => {
    return (
        <div className={ styles.contentCont }>
            <div className={ styles.content }>
                <Routes>
                    <Route path="/" element={ <Main state={props.state} /> }/>
                    <Route path="/recipes" element={ <Recipes recipes={props.state.recipes} /> }/>
                    <Route path="/recipes/:id" element={ <Recipe  state={props.state.recipeResolve} /> }/>
                    <Route path="/profile/:id" element={ <Profile  state={props.state.recipeResolve} /> }/>
                    <Route path="/getmenu" element={ <GetMenu /> }/>
                    <Route path="*" element={ <Notfoundpage /> }/>
                </Routes>
            </div>
        </div>
    )
}

export default Content;