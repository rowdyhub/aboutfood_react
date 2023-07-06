import styles from './Carousel.module.css';

const CarouselElement = (props) => {
    return (
        <div className={styles.carouselElementContainer} style={{backgroundImage: `url("/images/carousel/${props.data.name}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: '50%'}}>
            <div className={styles.textPlate}>
                <div className={styles.title}>{props.data.title}</div>
                <div className={styles.description}>{props.data.description}</div>
            </div>
        </div>
    )
};

export default CarouselElement;