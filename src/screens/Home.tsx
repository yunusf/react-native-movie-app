import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function Home({ navigation }): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 30 }}>
        Movie Page
      </Text>
      
      <Button
        title='Go to Movie Detail'
        onPress={() => navigation.navigate('MovieDetail')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  marginVertical20: {
    marginVertical: 20,
  },
})