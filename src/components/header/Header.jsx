import Logo from "./logo/Logo";
import NavBar from "./navBar/NavBar";
import UserBar from "./userBar/UserBar";

import styles from "./Header.module.css"

let Header = (props) => {
    return (
        <div className={styles.headerCont}>
            <div className={styles.header}>
                <Logo />
                <NavBar searchInput={props.searchInput} setSearchInput={props.setSearchInput}/>
                <UserBar state={props.state} modal={props.modal}/>
            </div>
        </div>
    );
}

export default Header;