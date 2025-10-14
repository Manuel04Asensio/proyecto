import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Titulo {
    texto: string;
    tema: {
        COLOR_TITULO: string;
    };
}

export default function Titulo({texto, tema}: Titulo) {
  return (
    <View>
      <Text style={[styles.titulo, {color: tema.COLOR_TITULO}]}>
        {texto}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    titulo: {
        fontWeight: "bold",
        fontSize: 24,
        marginVertical: 20,
    },
})