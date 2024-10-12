import { useEffect } from "react";
import platesServices from "../../services/plates"
import Loading from "../loading/page";

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
        <h1>Plates</h1>
    )
}