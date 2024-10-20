import { useState } from "react";

export default function orderServices() {
    //elemento de carregamento da pagina
    const [orderLoading, setOrderLoading] = useState(false);
    
    //fazer a requisição novamente das orders
    const [refetchOrders, setRefetchOrders] = useState(true);

    const [ordersData, setOdersData] = useState([]);

    const url = 'http://localhost:3000/orders';

    const getUserOrders = (userId) => {
        setOrderLoading(true);
        
        fetch(`${url}/userOrders/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        })
        .then((response) => response.json())
        .then((result) => {
            if(result.success) {
                setOdersData(result.body)
            } else {
                console.log(result)
            }
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            setOrderLoading(false)
            setRefetchOrders(false)
        })
    }

    const sendOrder = (orderData) => {
        setOrderLoading(true);
        
        fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(orderData)
        })
        .then((response) => response.json())
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            setOrderLoading(false)
            setRefetchOrders(false)
        })
    }

    return { getUserOrders, orderLoading, refetchOrders, ordersData, sendOrder }
}