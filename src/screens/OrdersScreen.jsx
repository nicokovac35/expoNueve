import React, {useEffect} from "react";
import { StyleSheet,  FlatList } from "react-native";
import OrderItem  from "../components/OrderItem";


import { useSelector, useDispatch } from "react-redux";
import { deleteOrder, getOrders } from "../store/actions/order.action"


const OrdersScreen = () => {
    const dispatch = useDispatch()
    // en la consaten de orders luego de state.orders.list segun el video me arroja error que no encuentra tal estado... revise si era tipo pero aun nada.
    const orders = useSelector(state => state.orders)

    useEffect(() => {    
        dispatch(getOrders())
    }, [])

    const handleDeleteItem = (id) => {
        dispatch(deleteOrder(id))
    }
 

    const renderOrderItem = ({ item }) => (
        <OrderItem item={item} onDelete={() => handleDeleteItem(item.id) }/>
    )  
    return (
        <FlatList
            data={orders}
            keyExtractor={item => item.id}
            renderItem={renderOrderItem}
        />

        
        )

}
export default OrdersScreen

const styles = StyleSheet.create({
    
})

