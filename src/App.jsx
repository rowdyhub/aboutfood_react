import Header from "./components/header/Header";
import Content from './components/content/Content';
import Footer from "./components/footer/Footer";

import styles from "./App.module.css";

function App(props) {
    return (
        <div className={styles.App}>
            <div className={styles.App_plate}>
                <Header state={props.state}/>
                <Content state={props.state}/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;