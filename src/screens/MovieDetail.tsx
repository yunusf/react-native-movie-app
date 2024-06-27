import React from "react"
import {
    View, StyleSheet, Text, Button
} from "react-native"
import { API_URL, API_ACCESS_TOKEN } from "@env"

const MovieDetail = ({ navigation }: any): any => {
  const fetchData = (): void => {

    if (API_ACCESS_TOKEN == null || API_URL == null) {
      throw new Error("ENV not found")
    }

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_ACCESS_TOKEN}`,
      },
    }

    fetch(API_URL, options)
      .then(async (res) => await res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  return (
    <View style={styles.container}>
      <Text>Movie Detail</Text>
      <Button
        title="Fetch Data"
        onPress={() => fetchData()}
        // onPress={() => navigation.goBack()}
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
  marginBottom20: {
    marginBottom: 20,
  },
})

export default MovieDetail