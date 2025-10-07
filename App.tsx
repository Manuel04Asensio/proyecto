import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'

export default function App() {
  const COLOR_FONDO="#121212"
  const COLOR_TITULO="#ffdd99"
  const COLOR_TEXTO_FOTO="#ffffff"
  return (
    <View style={[styles.contenedorPrincipal, {backgroundColor: COLOR_FONDO}]}>
      <ScrollView>
        source={require('./assets/granada_light.jpg')}
        style={{
        width: '100%',
        height: 250,
        resizeMode: 'cover', // Escala manteniendo relación de aspecto
      }}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
    flexDirection: 'column',
  }

})
