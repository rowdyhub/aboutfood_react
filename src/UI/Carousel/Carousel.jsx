import styles from "./Carousel.module.css";

import { useState } from "react";
import CarouselElement from "./CarouselElement";


const carousel_data = [
    {
        name: '1.jpg',
        title: 'Мясные блюда на праздничный стол',
        description: 'Расскажем, как креативно и вкусно организовать мероприятия. Несколько простых, но эффектных рецептов. Расскажем, как креативно и вкусно организовать мероприятия. Несколько простых, но эффектных рецептов.',
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
    {
        name: '4.jpg',
        title: 'title4',
        description: 'discription4',
    },
    {
        name: '5.jpg',
        title: 'title5',
        description: 'discription5',
    },
]

const Carousel = () => {
    const CAROUSEL_ELEM_WIDTH = 1060;
    const [curentCarouselElement, setCurentCarouselElement] = useState(0);

    function nextCarouselElement () {
        curentCarouselElement >= carousel_data.length-1
            ? setCurentCarouselElement(0)
            : setCurentCarouselElement(curentCarouselElement + 1);
    }
    function prevCarouselElement () {
        curentCarouselElement <= 0
            ? setCurentCarouselElement(carousel_data.length-1)
            : setCurentCarouselElement(curentCarouselElement - 1);
    }
    // УТЕЧКА ПАМЯТИ
    // setInterval(() => {
    //      nextCarouselElement();
    // }, 4000);
    // Добавить смену слайдов по таймеру, переход по маркеру, перелистывание касанием.

    return (
        <div className={styles.carouselContainer}>
            <div 
                className={styles.content}
                style={{
                    transform: `translateX(-${CAROUSEL_ELEM_WIDTH*curentCarouselElement}px)`,
                    transition: '.7s'
                }}
            >

                { carousel_data.map((elem) => {
                    return <CarouselElement data={elem} key={elem.name}/>
                }) }
                
            </div>
            
            <div className={styles.markers}>
                { carousel_data.map((elem, key) => {
                    if(curentCarouselElement === key) {
                        return <div className={styles.markerElement + ' ' + styles.markerElementActive} key={elem.name}></div>
                    }
                    else {
                        return <div className={styles.markerElement} key={elem.name}></div>
                    }
                }) }
            </div>

            <div className={styles.prev + " " + styles.ctrlBtn} onClick={prevCarouselElement}>
                <div className={styles.ctrlArrow}>
                    <svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline /* fill="none" stroke="#000" */ strokeWidth="1.4" points="12.775,1 1.225,12 12.775,23 "></polyline></svg>    
                </div>
            </div>
            <div className={styles.next + " " + styles.ctrlBtn} onClick={nextCarouselElement}>
                <div className={styles.ctrlArrow}>
                    <svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline /* fill="none" stroke="#000" */ strokeWidth="1.4" points="1.225,23 12.775,12 1.225,1 "></polyline></svg>
                </div>
            </div>
        </div>
    )
}

export default Carousel;