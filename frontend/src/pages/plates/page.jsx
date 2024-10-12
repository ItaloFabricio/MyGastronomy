import { useEffect } from "react";
import platesServices from "../../services/plates"
import Loading from "../loading/page";
import PlateCard from "../../components/plateCard/plateCard";

export default function Plates () {

    const { getAvailablesPlates, platesData, platesLoading, refetchPlates } = platesServices();

    useEffect(() => {
        if (refetchPlates) {
            getAvailablesPlates()
        }
    }, [])

    if(platesLoading) {
        return( <Loading/> )
    }
    
    console.log(platesData);

    return (
        <>
            <div>
                {platesData.map((plate) => (
                    <PlateCard plateData={plate} key={plate._id}/>
                ))}
            </div>
        </>
        
    )
}