import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MovieDetail from "../screens/MovieDetail"
import Home from "../screens/Home"

const Stack = createNativeStackNavigator()

const HomeStackNavigator = (): JSX.Element => (
    <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='MovieDetail' component={MovieDetail} />
    </Stack.Navigator>
)

export default HomeStackNavigator