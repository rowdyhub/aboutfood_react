import styles from './Search.module.css';

let Search = () => {
    return (
        <div className={styles.searchCont}>
            <input className={styles.searchInput} type="text" />
            <button className={styles.searchBtton}>🔍︎</button>
        </div>
    )
}

export default Search;