import Nav from "./Nav";
import Search from "./Search";

import styles from './NavBar.module.css';

let NavBar = () => {
    return (
        <div className={styles.navBarCont}>
            <Nav />
            <Search />
        </div>
    )
}

export default NavBar;