import styles from "./Carousel.module.css";

import CarouselElement from "./CarouselElement";



const carousel_data = [
    {
        name: '1.jpg',
        title: 'title1',
        description: 'discription1',
    },
    {
        name: '2.jpg',
        title: 'title2',
        description: 'discription2',
    },
    {
        name: '3.jpg',
        title: 'title3',
        description: 'discription3',
    },
]

const Carousel = () => {
    return (
        <div className={styles.carouselContainer}>
            <div className={styles.content}>
                <CarouselElement data={carousel_data[0]}/>
                <CarouselElement data={carousel_data[1]}/>
                <CarouselElement data={carousel_data[2]}/>
            </div>

            <div className={styles.prev + " " + styles.ctrlBtn}>
                <div className={styles.ctrlArrow}>
                <svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline /* fill="none" stroke="#000" */ stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "></polyline></svg>    
                </div>
            </div>
            <div className={styles.next + " " + styles.ctrlBtn}>
                <div className={styles.ctrlArrow}>
                    <svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline /* fill="none" stroke="#000" */ stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "></polyline></svg>
                </div>
            </div>
        </div>
    )
}

export default Carousel;