import React from "react"
import {
    View, StyleSheet, Text, Button
} from "react-native"

const MovieDetail = ({ navigation }): JSX.Element => {
    return (
        <View style={styles.container}>
            <Text>Movie Detail</Text>
            <Button
                title="Kembali"
                onPress={() => navigation.goBack()}
            />
        </View>
)}

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

export default MovieDetail