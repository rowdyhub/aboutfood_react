import MyScrollRestoration from "./MyScrollRestoration";

import Header from "./components/header/Header";
import Content from './components/content/Content';
import Footer from "./components/footer/Footer";
import Modal from "./UI/Modal/Modal"

import styles from "./App.module.css";

function App(props) {
    return (
        <div className={styles.App}>
            <div className={styles.App_plate}>
                <MyScrollRestoration />

                <Header state={props.state}/>
                <Content state={props.state}/>
                <Footer/>

                <Modal  isActive={true}/>
            </div>
        </div>
    );
}

export default App;