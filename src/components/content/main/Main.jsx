import styles from "./Main.module.css"

let Main = (props) => {
    return (
        <div className={styles.mainCont}>
            <div className={styles.lastPosts}>

                <div className={styles.lastPost}>
                    <div className={styles.description}>
                        <div className={styles.name}>Название поста</div>
                        <div className={styles.text}>Описание поста, а точнее текст из начала статьи...</div>
                        <div className={styles.links}>#хештеги</div>
                    </div>
                </div>

                <div className={styles.lastPost}>
                    <div className={styles.description}>
                        <div className={styles.name}>Название поста</div>
                        <div className={styles.text}>Описание поста, а точнее текст из начала статьи...</div>
                        <div className={styles.links}>#хештеги</div>
                    </div>
                </div>

            </div>


            <div className={styles.posts}>

                <div className={styles.post}>
                    <div className={styles.description}>
                        <div className={styles.name}>Название поста</div>
                        <div className={styles.text}>Описание поста, а точнее текст из начала статьи...</div>
                        <div className={styles.links}>#хештеги</div>
                    </div>
                </div>

                <div className={styles.post}>
                    <div className={styles.description}>
                        <div className={styles.name}>Название поста</div>
                        <div className={styles.text}>Описание поста, а точнее текст из начала статьи...</div>
                        <div className={styles.links}>#хештеги</div>
                    </div>
                </div>

                <div className={styles.post}>
                    <div className={styles.description}>
                        <div className={styles.name}>Название поста</div>
                        <div className={styles.text}>Описание поста, а точнее текст из начала статьи...</div>
                        <div className={styles.links}>#хештеги</div>
                    </div>
                </div>

            </div>
           
        </div> 
    );
}
export default Main;