import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FotoRuta from './FotoRuta'

interface MejoresRutasProps {
    tema: {
        COLOR_TEXTO_FOTO: string;
    }
}

export default function MejoresRutas({tema}: MejoresRutasProps)  {
  return (
    <>
      <FotoRuta 
        texto="Albaicín" 
        imagen={require("../assets/mejores1.jpg")} 
        tema={tema} 
      />
      <FotoRuta 
        texto="Sacromonte" 
        imagen={require("../assets/mejores2.jpg")} 
        tema={tema} 
      />
      <FotoRuta 
        texto="El centro" 
        imagen={require("../assets/mejores3.jpg")} 
        tema={tema} 
      />
    </>
  )
}

const styles = StyleSheet.create({})