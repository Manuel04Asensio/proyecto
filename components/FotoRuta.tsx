import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image, ImageBackground } from 'expo-image'

interface FotoRuta {
    texto: string;
    imagen: any;
    tema: {
        COLOR_TEXTO_FOTO: string;
    }

}

export default function FotoRuta({texto, imagen, tema}: FotoRuta)  {
  return (
    <View>
        <ImageBackground source={imagen} style={styles.fotoRuta}>
            <Text style={[styles.textoFoto, {color: tema.COLOR_TEXTO_FOTO}]}>{texto}</Text> 
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
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
})