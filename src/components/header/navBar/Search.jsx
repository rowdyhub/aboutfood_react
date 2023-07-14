import styles from './Search.module.css';

let Search = ({searchInput, setSearchInput}) => {
    return (
        <div className={styles.searchCont}>
            <input 
                className={styles.searchInput} 
                type="text" 
                placeholder="Поиск по сайту..." 
                value={ searchInput } 
                onChange={ (e)=>{setSearchInput(e.target.value)} }
            />
            <button className={styles.searchBtton}>🔍︎</button>
        </div>
    )
}

export default Search;