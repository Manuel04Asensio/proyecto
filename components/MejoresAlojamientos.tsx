import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Alojamiento } from '../models/Tipos';
import FotoAlojamiento from './Alojamiento';

interface MejoresAlojamientosProps {
  listaAlojamientos: Array<Alojamiento>;
}

export default function MejoresAlojamientos({ listaAlojamientos }: MejoresAlojamientosProps) {
  return (
    <View style={styles.contenedorFotosAlojamiento}>
      {listaAlojamientos.map((alojamiento, index) => (
        <FotoAlojamiento 
          key={index}
          alojamiento={alojamiento} 
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  contenedorFotosAlojamiento: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 15,
  },
})