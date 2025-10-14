import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Alojamiento from './Alojamiento'

export default function MejoresAlojamientos()  {
  return (
    <View style={styles.contenedorFotosAlojamiento}>
      <Alojamiento imagen={require("../assets/alojamiento1.jpg")} />
      <Alojamiento imagen={require("../assets/alojamiento2.jpg")} />
      <Alojamiento imagen={require("../assets/alojamiento3.jpg")} />
      <Alojamiento imagen={require("../assets/alojamiento4.jpg")} />
    </View>
  )
}

const styles = StyleSheet.create({
  contenedorFotosAlojamiento: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 15,
  },
})