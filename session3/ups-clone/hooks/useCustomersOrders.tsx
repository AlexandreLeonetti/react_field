import react, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ORDERS } from "../graphql/queries";

function useCustomersOrders(userId: string) {
    const { loading, error, data } = useQuery(GET_ORDERS);
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        if (!data) {
            console.log("no data in useCustomersOrders")
            return;
        }

        const orders: Order[] = data.getOrders.map(
            ({ value }: OrderResponse) => ({
                carrier: value.carrier,
                createdAt: value.createdAt,
                shippingCost: value.shippingCost,
                trackingId: value.trackingItems,
                trackingItems: value.trackingItems,
                Address: value.Address,
                City: value.City,
                Lat: value.Lat,
                Lng: value.Lng,
            })
        );
        const customerOrders = orders.filter(order => order.trackingItems.customer_id === userId);
        setOrders(customerOrders);
    }, [data, userId, error]);

    return { loading, error, orders };
}

export default useCustomersOrders;
