import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import MyScrollRestoration from "./MyScrollRestoration";

import Header from "./components/header/Header";
import Content from './components/content/Content';
import Footer from "./components/footer/Footer";
import Modal from "./UI/Modal/Modal"

import AdminApp from "./adminApp/AdminApp";

import styles from "./App.module.css";





function App(props) {

    // APP TYPE
    const [appType, setAppType] = useState('USER-APP'); // USER-APP, ADMIN-APP
    let location = useLocation();
    useEffect(() => { 
        if(location.pathname === '/admin') {
            setAppType('ADMIN-APP');
        }
        else {
            setAppType('USER-APP')
        }
    }, [location.pathname]);
    // -----------
    

    const [user, setUser] = useState({
        userAuth: false,
        curentUser: null,
        userInfo: {
            userID: 2523,
            userName: 'Admin',
            userPic: './images/userPics/Bcmp3qvswRr9ojjou7VNjk9E9SOInZ25GUyKabeIcvNpRDsuAAZ0Q2bEZEtXJkdaAQvY7NEm.jpg',
            userToken: '4f2gh3f4h2g3f4h2g3f4h2g3'
        },
    });

    const [searchInput, setSearchInput] = useState('');

    const [loginInputs, setLoginInputs] = useState({
        email: '',
        password: '',
    });

    const doLogin = () => {
        setUser({...user, userAuth: true, curentUser: 2523})
        setLoginInputs({email: '', password: '',});
        setModal(false);
    }

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



    
    // ОБРАЩЕНИЕ К API
    


    if(appType === 'USER-APP'){
        return (
            <div className={styles.App}>
                <div className={styles.App_plate}>
                    {/* Open a new page from the beginning */}
                    <MyScrollRestoration /> 
    
                    <Header 
                        state={props.state} 
                        modal={openModal} 
                        searchInput={searchInput} 
                        setSearchInput={setSearchInput}
                        user={user}
                        setUser={setUser}/>
                        
                    <Content 
                        state={props.state} 
                        appType = {appType}
                        setAppType = {setAppType}
                    />
                    
                    <Footer/>
    
                    <Modal 
                        visible={modal} 
                        setVisible={setModal} 
                        content={modalContent} 
                        
                        signupInputs={signupInputs}
                        setSignupInputs={setSignupInputs}
    
                        loginInputs={loginInputs}
                        setLoginInputs={setLoginInputs}
                        doLogin={doLogin}/>
                </div>
            </div>
        );
    }
    else if (appType === 'ADMIN-APP') {
        return (
            <AdminApp />
        )
    }
    else {
        setAppType('USER-APP');
    }
    
};

export default App;