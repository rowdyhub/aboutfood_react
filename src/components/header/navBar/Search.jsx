import styles from './Search.module.css';

let Search = () => {
    return (
        <div className={styles.searchCont}>
            <input className={styles.searchInput} type="text" placeholder="Поиск по сайту..."/>
            <button className={styles.searchBtton}>🔍︎</button>
        </div>
    )
}

export default Search;