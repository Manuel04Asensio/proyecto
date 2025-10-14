import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image, ImageBackground } from 'expo-image'

interface Alojamiento {
    imagen: any;
}

export default function Alojamiento({imagen}: Alojamiento)  {
  return (
    <View style={styles.contenedorAlojamiento}>
      <Image source={imagen} style={styles.fotoAlojamiento} />
    </View>
  )
}

const styles = StyleSheet.create({
    contenedorAlojamiento: {
        width: "49%",
        aspectRatio: 1,
        marginBottom: 5,
    },
    fotoAlojamiento: {
        width: "100%",
        height: "100%",
    },
})