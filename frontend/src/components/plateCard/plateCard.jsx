import { TextLimit } from '../textLimit/textLimit';
import styles from './plateCard.module.css';

export default function PlateCard({plateData}) {


    return(
        <>
            <div className={styles.cardContainer}>
                <img src={plateData.imgUrl} />
                <div className={styles.cardContent}>
                    <TextLimit text={plateData.name} limit={32} as='h4' />
                    <TextLimit text={plateData.ingredients} limit={46} />
                    
                    <h3 className={styles.price}> $ {plateData.price}</h3>
                </div>
            </div>
        </>
    )
}