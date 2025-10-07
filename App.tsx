import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { Image } from 'expo-image'


export default function App() {
  const COLOR_FONDO="#121212"
  const COLOR_TITULO="#ffdd99"
  const COLOR_TEXTO_FOTO="#ffffff"
  return (
    <View style={[styles.contenedorPrincipal, {backgroundColor: COLOR_FONDO}]}>
      <ScrollView>
        <Image
          source={require("./assets/granada_light.jpg")}
          style={{
            width: '100%',
            height: 250,
            resizeMode: 'cover',
          }}
        />
      <View style={styles.contenedorSecundario}>
          <Text style={[styles.titulo, {color: COLOR_TITULO}]}>
            ¿Que hacer en Granada?</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Image source={require('./assets/actividad1.jpg')} style={styles.fotoCarrusel} />
          <Image source={require('./assets/actividad2.jpg')} style={styles.fotoCarrusel} />
          <Image source={require('./assets/actividad3.jpg')} style={styles.fotoCarrusel} />
          <Image source={require('./assets/actividad4.jpg')} style={styles.fotoCarrusel} />
          <Image source={require('./assets/actividad5.jpg')} style={styles.fotoCarrusel} />
        </ScrollView>
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
    flexDirection: 'column',
  },
  contenedorSecundario: {
    flex: 1,
    marginHorizontal: 10,
    padding: 5,
    marginVertical: 20
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  fotoCarrusel: {
    width: 250,
    height: 300,
    marginRight: 10,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 15,
  }
})
