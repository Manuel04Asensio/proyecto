import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { useFonts } from 'expo-font';
import { Image, ImageBackground } from 'expo-image'
import { TEMA_OSCURO, TEMA_CLARO } from './themes/Temas';
import Titulo from './components/Titulo';
import Carrusel from './components/Carrusel';
import FotoRuta from './components/FotoRuta';
import MejoresRutas from './components/MejoresRutas';
import Alojamiento from './components/Alojamiento';
import MejoresAlojamientos from './components/MejoresAlojamientos';

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
          source={tema.logo}
          style={{
            width: '100%',
            height: 250,
            resizeMode: 'cover',
          }}
        />
      <View style={styles.contenedorSecundario}>
          <Titulo texto='¿Que hacer en Granada?' tema={tema}></Titulo>
          <Carrusel></Carrusel>
        <Titulo texto='Las mejores rutas' tema={tema}></Titulo>
        <MejoresRutas tema={tema}></MejoresRutas>
        
        <Titulo texto='Los mejores alojamientos' tema={tema}></Titulo>
      </View>
      <View style={styles.contenedorFotosAlojamiento}>
            <MejoresAlojamientos></MejoresAlojamientos>
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
