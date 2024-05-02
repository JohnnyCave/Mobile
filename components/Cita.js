import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Cita = ({ item, handleDeleteCita, handleEditCita }) => (
  <View style={styles.cita}>
    <Text style={styles.citaNombre}>Nombre: {item.nombre}</Text>
    <Text style={styles.citaDetalle}>Síntomas: {item.sintomas}</Text>
    <Text style={styles.citaDetalle}>Tipo de Sangre: {item.tipoSangre}</Text>
    <Text style={styles.citaFecha}>Fecha: {item.fecha}</Text>
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#222222', }]}
        onPress={() => handleDeleteCita(item.id)}
      >
        <Text style={styles.buttonText}>Eliminar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#87CEEB' }]}
        onPress={() => handleEditCita(item.id)}
      >
        <Text style={styles.buttonText}>Editar</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  cita: {
    backgroundColor: '#CCCCCC',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  citaNombre: {
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
  citaDetalle: {
    fontFamily: 'sans-serif',
  },
  citaFecha: {
    fontFamily: 'sans-serif',
    fontStyle: 'italic',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#333333',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'sans-serif',
  },
});

export default Cita;
