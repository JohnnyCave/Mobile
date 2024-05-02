import React from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import Cita from './Cita';
import NoCitas from './NoCitas';

const ListaCitas = ({ citas, handleDeleteCita, handleEditCita }) => (
  <View style={styles.citasContainer}>
    <Text style={styles.subtitulo}>Citas Agendadas</Text>
    {citas.length === 0 ? (
      <NoCitas />
    ) : (
      <FlatList
        data={citas}
        renderItem={({ item }) => (
          <Cita 
            item={item} 
            handleDeleteCita={handleDeleteCita} 
            handleEditCita={handleEditCita} 
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    )}
  </View>
);

const styles = StyleSheet.create({
  citasContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#CCCCCC',
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'sans-serif',
  },
});

export default ListaCitas;
