import styles from './Carousel.module.css';

const CarouselElement = (props) => {
    return (
        <div className={styles.carouselElementContainer} style={{backgroundImage: `url("/images/carousel/${props.data.name}")`, backgroundSize: 'cover', backgroundPosition: '50%'}}>
            <div className={styles.title}>{props.data.title}</div>
            <div className={styles.description}>{props.data.description}</div>
        </div>
    )
};

export default CarouselElement;