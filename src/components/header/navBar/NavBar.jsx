import Nav from "./Nav";
import Search from "./Search";

import styles from './NavBar.module.css';

let NavBar = ({searchInput, setSearchInput}) => {
    return (
        <div className={styles.navBarCont}>
            <Nav />
            <Search searchInput={searchInput} setSearchInput={setSearchInput}/>
        </div>
    )
}

export default NavBar;