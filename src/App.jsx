import Header from "./components/header/Header";
import Content from './components/content/Content';
import Footer from "./components/footer/Footer";

import styles from "./App.module.css";

function App(props) {
    return (
        <div className={styles.App}>
            <Header/>
            <Content props={props.props}/>
            <Footer/>
        </div>
    );
}

export default App;