import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const NoCitas = () => (
  <View style={styles.noCitasContainer}>
    <ActivityIndicator size="large" color="#333333" />
    <Text style={styles.noCitasTexto}>No hay citas programadas.</Text>
    <Text style={styles.noCitasTexto}>¡Agrega una cita!</Text>
  </View>
);

const styles = StyleSheet.create({
  noCitasContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noCitasTexto: {
    fontSize: 16,
    fontFamily: 'sans-serif',
    color: '#333333',
  },
});

export default NoCitas;
