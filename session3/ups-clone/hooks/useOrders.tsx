import react, { useEffect, useState } from "react"
import {useQuery} from "@apollo/client"
import {GET_ORDERS} from "../graphql/queries"


const useOrders = () =>{
    const  { loading, error, data} = useQuery(GET_ORDERS);
    const [orders, setOrders] = useState<Order[]>([])
    
    useEffect(()=>{
        if(!data){
            return;
        }


        const orders : Order[]= data.getOrders.map(({value}: OrderResponse)=>({
            carrier: value.carrier,

        })
    },[data])

    return(
        <div></div>
    )
}


export default useOrders;