import utilities from "./tailwind.json";
import { TailwindProvider } from "tailwind-rn";
import CustomersScreen from "./screens/CustomersScreen";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigator/RootNavigator";

export default function App() {
	return (
		//@ts-ignore - TailwindProvider is missing a type definition
		<TailwindProvider utilities={utilities}>
			<NavigationContainer>
        <RootNavigator/>
			</NavigationContainer>
		</TailwindProvider>
	);
}
