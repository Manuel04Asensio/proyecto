import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image, ImageBackground } from 'expo-image'

interface Alojamiento {
    imagen: any;
}

interface AlojamientoProps {
  alojamiento: Alojamiento;
}

export default function FotoAlojamiento({ alojamiento }: AlojamientoProps) {
  return (
    <View style={styles.contenedorAlojamiento}>
      <Image source={alojamiento.imagen} style={styles.fotoAlojamiento} />
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