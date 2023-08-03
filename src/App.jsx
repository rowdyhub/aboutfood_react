import { useState } from "react";

import MyScrollRestoration from "./MyScrollRestoration";

import Header from "./components/header/Header";
import Content from './components/content/Content';
import Footer from "./components/footer/Footer";
import Modal from "./UI/Modal/Modal"

import styles from "./App.module.css";

function App(props) {


    const [searchInput, setSearchInput] = useState('');

    const [loginInputs, setLoginInputs] = useState({
        email: '',
        password: '',
    });

    const [signupInputs, setSignupInputs] = useState({
        username: '',
        email: '',
        password1: '',
        password2: '',
    });
    
    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const openModal = (component) => {
        setModal(true);
        setModalContent(component);
    }

    return (
        <div className={styles.App}>
            <div className={styles.App_plate}>
                <MyScrollRestoration />

                <Header 
                    state={props.state} 
                    modal={openModal} 
                    searchInput={searchInput} 
                    setSearchInput={setSearchInput}/>
                    
                <Content state={props.state}/>
                <Footer/>

                <Modal 
                    visible={modal} 
                    setVisible={setModal} 
                    content={modalContent} 
                    
                    signupInputs={signupInputs}
                    setSignupInputs={setSignupInputs}

                    loginInputs={loginInputs}
                    setLoginInputs={setLoginInputs}/>
            </div>
        </div>
    );
}

export default App;