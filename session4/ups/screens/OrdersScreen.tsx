import { View, Text, SafeAreaView} from "react-native"
import React from "react"
import { useTailwind } from "tailwind-rn";

const OrdersScreen = () => {
    const tw = useTailwind();

    return(
        <SafeAreaView>
            <Text style={tw('text-orange-500')}>Orders Screen</Text>
        </SafeAreaView>
    )
}


export default OrdersScreen;