import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";

import styles from "./App.module.css";

function App() {
    return (
        <div className={styles.App}>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;