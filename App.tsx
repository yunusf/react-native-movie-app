import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './src/navigations/BottomTabNavigation'
import HomeStackNavigator from './src/navigations/HomeStackNavigation'

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
      {/* <HomeStackNavigator /> */}
    </NavigationContainer>
  )
}