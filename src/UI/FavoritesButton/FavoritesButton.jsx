import styles from "./FavoritesButton.module.css"

let FavoriteButton = (props) => {
    return (
        <div className={props.action === true ? styles.inOutFavorite + ' ' + styles.action : styles.inOutFavorite}>

        </div>
    )
}

export default FavoriteButton;