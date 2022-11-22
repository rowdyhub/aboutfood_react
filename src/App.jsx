import { Routes, Route } from 'react-router-dom';

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";

import styles from "./App.module.css";

function App() {
    return (
        <div className={styles.App}>
            <Header/>

            <Routes>
                <Route path="/" element={ <Content/> }/>
                <Route path="/recipes" element={ <Header/> }/>
                <Route path="/getMenu" element={ <Header/> }/>
                <Route path="*" element={ <Footer/> }/>
            </Routes>

            <Footer/>
        </div>
    );
}

export default App;