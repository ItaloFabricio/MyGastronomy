import { useContext, useEffect, useState } from "react";
import platesServices from "../../services/plates"
import Loading from "../loading/page";
import PlateCard from "../../components/plateCard/plateCard";
import styles from './page.module.css';
import PlatePopup from "../../components/platePopup/platePopup";
import { useCartContext } from "../../contexts/useCartContext";


export default function Plates () {

    const { getAvailablesPlates, platesData, platesLoading, refetchPlates } = platesServices();
    const [plateSelected, setPlateSelected] = useState(null);
    const { addToCart } = useCartContext();

    useEffect(() => {
        if (refetchPlates) {
            getAvailablesPlates()
        }
    }, [])

    if(platesLoading) {
        return( <Loading/> )
    }

    const handlePlateSelected = (plate) => {
        setPlateSelected(plate);
    }


    const handleClosePopup = () => {
        setPlateSelected(null);
    }

    const handleAddToCart = (itemToAdd) => {
        addToCart(itemToAdd)
        handleClosePopup()
    }
    
    console.log(platesData);

    return (
        <>
            <div className={styles.container}>
                <h1>Our delicious menu 🍴</h1>
            <div className={styles.platesContainer}>
                {platesData.map((plate) => (
                    <div key={plate._id} className={styles.cardContainer} onClick={() => {handlePlateSelected(plate)}}>
                        <PlateCard plateData={plate} />
                    </div>
                ))}
            </div>
            </div>
            

            {plateSelected && (
             
                    <PlatePopup plateData={plateSelected} onClose={handleClosePopup} onAddToCart={handleAddToCart}/>
              
            )}
        </>
        
    )
}