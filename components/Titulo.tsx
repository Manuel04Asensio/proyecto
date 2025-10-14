import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tema } from '../themes/Temas';

interface Titulo {
    texto: string;
    tema: {
        COLOR_TITULO: string;
    };
}

interface TituloProps {
  texto: string;
  tema: Tema;
}

export default function Titulo({texto, tema}: TituloProps) {
  return (
    <View>
      <Text style={[styles.titulo, { color: tema.COLOR_TITULO }]}>
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