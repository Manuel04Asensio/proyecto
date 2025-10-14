import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { Image, ImageBackground } from 'expo-image'

export default function Carrusel() {
  return (
    <View>
      <ScrollView horizontal={true}>
            <Image source={require('../assets/actividad1.jpg')} style={styles.fotoCarrusel} />
            <Image source={require('../assets/actividad2.jpg')} style={styles.fotoCarrusel} />
            <Image source={require('../assets/actividad3.jpg')} style={styles.fotoCarrusel} />
            <Image source={require('../assets/actividad4.jpg')} style={styles.fotoCarrusel} />
            <Image source={require('../assets/actividad5.jpg')} style={styles.fotoCarrusel} />
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    fotoCarrusel: {
    width: 250,
    height: 300,
    marginRight: 10,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 15,
  },
})