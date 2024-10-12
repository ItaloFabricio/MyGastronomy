import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/auth";
import orderServices from "../../services/order";
import styles from './page.module.css';
import { LuAlertCircle, LuCheckCircle, LuLogOut, LuTimer } from "react-icons/lu";
import { Link } from "react-router-dom";
import Loading from "../loading/page";


export default function Profile () {
    const { logout } = authService(); 
    const { getUserOrders, orderLoading, refetchOrders, ordersData} = orderServices();
    const navigate = useNavigate();
    const authData = JSON.parse(localStorage.getItem('auth'));

    useEffect(() => {
        if(!authData) {
            return navigate('/auth')
        } else if (refetchOrders) {
            getUserOrders(authData?.user?._id)
        }
    }, [authData, refetchOrders])

    if(orderLoading) {
        return( <Loading/>)
    } 

    const handleLogout = () => {
        logout();
        return navigate('/');
    }

    console.log(ordersData);

    return (
        <div className={styles.pageContainer}>
            
            <div>
                <h1>{authData?.user?.fullname}</h1>
                <h3>{authData?.user?.email}</h3>
                <button onClick={handleLogout}>Logout <LuLogOut/></button>

            </div>
            {ordersData.length > 0 ? 
                <div className={styles.ordersContainer}>
                    {ordersData.map((order) => (
                        <div key={order._id} className={styles.orderContainer}>
                            {order.pickupStatus === 'Pending' ? <p className={`${styles.pickupStatus} ${styles.pending}`}> <LuTimer/> {order.pickupStatus}</p> : null}
                            {order.pickupStatus === 'Completed' ? <p className={`${styles.pickupStatus} ${styles.completed}`}> <LuCheckCircle/>{order.pickupStatus}</p> : null}
                            {order.pickupStatus === 'Canceled' ? <p className={`${styles.pickupStatus} ${styles.canceled}`}> <LuAlertCircle/> {order.pickupStatus}</p> : null}
                            
                            <h3>{order.pickupTime}</h3>
                            {order.orderItems.map((item) => (
                                <div key={item._id}>
                                    <h4>{item.itemDetails[0].name}</h4>
                                    <p>Quantity: {item.quantity}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            :
                <div>
                    <p>You do not have orders yet</p>
                    <Link to={'/plates'} className={styles.platesLink}>Click here and see our specialities!</Link>
                </div>
            }
        </div>
    )
}