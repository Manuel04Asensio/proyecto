import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { useFonts } from 'expo-font';
import { Image, ImageBackground } from 'expo-image'
import { TEMA_OSCURO, TEMA_CLARO } from './themes/Temas';

export default function App() {
  const temaActivo = useColorScheme();
   const tema = temaActivo === 'dark' ? TEMA_OSCURO : TEMA_CLARO;
  
  const fuenteTexto = useFonts({
    'Bebas': require('./assets/BebasNeue-Regular.ttf')
  })
  return (
    <View style={[styles.contenedorPrincipal, {backgroundColor: tema.COLOR_FONDO}]}>
      <ScrollView>
        <Image
          source={require(tema.logo)}
          style={{
            width: '100%',
            height: 250,
            resizeMode: 'cover',
          }}
        />
      <View style={styles.contenedorSecundario}>
          <Text style={[styles.titulo, {color: tema.COLOR_TITULO}]}>
            ¿Que hacer en Granada?</Text>
          <ScrollView horizontal={true}>
          <Image source={require('./assets/actividad1.jpg')} style={styles.fotoCarrusel} />
          <Image source={require('./assets/actividad2.jpg')} style={styles.fotoCarrusel} />
          <Image source={require('./assets/actividad3.jpg')} style={styles.fotoCarrusel} />
          <Image source={require('./assets/actividad4.jpg')} style={styles.fotoCarrusel} />
          <Image source={require('./assets/actividad5.jpg')} style={styles.fotoCarrusel} />
        </ScrollView>
        <Text style ={[styles.titulo, {color: tema.COLOR_TITULO}]}>
          Las mejores rutas</Text>
        <ImageBackground source={require('./assets/mejores1.jpg')} style={styles.fotoRuta}>
        <Text style = {[styles.textoFoto, {color: tema.COLOR_TEXTO_FOTO}]}>Albaicín</Text> </ImageBackground>
        <ImageBackground source={require('./assets/mejores2.jpg')} style={styles.fotoRuta}>
        <Text style = {[styles.textoFoto, {color: tema.COLOR_TEXTO_FOTO}]}>Sacromonte</Text> </ImageBackground>
        <ImageBackground source={require('./assets/mejores3.jpg')} style={styles.fotoRuta}>
        <Text style = {[styles.textoFoto, {color: tema.COLOR_TEXTO_FOTO}]}>El centro</Text> </ImageBackground>
        
        <Text style={[styles.titulo, {color: tema.COLOR_TITULO}]}>
            Los mejores alojamientos</Text>
      </View>
      <View style={styles.contenedorFotosAlojamiento}>
            <View style={styles.contenedorAlojamiento}>
              <Image source={require('./assets/alojamiento1.jpg')} style={styles.fotoAlojamiento} />
            </View>
            <View style={styles.contenedorAlojamiento}>
              <Image source={require('./assets/alojamiento2.jpg')} style={styles.fotoAlojamiento} />
            </View>
            <View style={styles.contenedorAlojamiento}>
              <Image source={require('./assets/alojamiento3.jpg')} style={styles.fotoAlojamiento} />
            </View>
            <View style={styles.contenedorAlojamiento}>
              <Image source={require('./assets/alojamiento4.jpg')} style={styles.fotoAlojamiento} />
            </View>
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
  },
  fotoRuta: {
    width: '100%',
    height: 200,
    margin: 5,
    justifyContent: "center"
  },
  textoFoto: {
    textAlign: 'center',
    fontFamily: 'Bebas',
    fontSize: 48,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contenedorFotosAlojamiento: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 15,
  },
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
