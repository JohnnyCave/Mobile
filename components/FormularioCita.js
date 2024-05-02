import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const FormularioCita = ({ 
  nombre, 
  setNombre, 
  sintomas, 
  setSintomas, 
  tipoSangre, 
  setTipoSangre, 
  fecha, 
  setFecha, 
  toggleDatePicker, 
  showDatePicker, 
  agregarCita, 
  editandoCita 
}) => {

  const handleDateChange = (event, selectedDate) => {
    toggleDatePicker(); // Cerrar el DatePicker
    if (selectedDate) {
      setFecha(selectedDate);
    }
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Nombre del paciente"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Síntomas"
        value={sintomas}
        onChangeText={setSintomas}
      />
      <TextInput
        style={styles.input}
        placeholder="Tipo de Sangre"
        value={tipoSangre}
        onChangeText={setTipoSangre}
      />
      <TouchableOpacity style={styles.botonFecha} onPress={toggleDatePicker}>
        <Text style={styles.botonTexto}>Seleccionar Fecha</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={fecha}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
      <TouchableOpacity style={styles.botonAgregar} onPress={agregarCita}>
        <Text style={styles.botonTexto}>{editandoCita ? 'Actualizar' : 'Agregar'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontFamily: 'sans-serif',
  },
  botonFecha: {
    backgroundColor: '#CCCCCC',
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  botonAgregar: {
    backgroundColor: '#87CEEB',
    padding: 10,
    borderRadius: 20,
  },
  botonTexto: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    textAlign: 'center',
  },
});

export default FormularioCita;
