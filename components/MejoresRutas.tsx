import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FotoRuta from './FotoRuta'
import { Tema } from '../themes/Temas';
import { Ruta } from '../models/Tipos';

interface MejoresRutasProps {
    tema: Tema;
    listaRutas: Array<Ruta>;
}

export default function MejoresRutas({tema, listaRutas}: MejoresRutasProps)  {
  return (
    <>
      {listaRutas.map((ruta, index) => (
        <FotoRuta 
          key={index}
          texto={ruta.nombre}
          imagen={ruta.imagen}
          tema={tema}
        />
      ))}
    </>
  )
}


const styles = StyleSheet.create({})