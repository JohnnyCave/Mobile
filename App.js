import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import FormularioCita from './components/FormularioCita';
import ListaCitas from './components/ListaCitas';
import NoCitas from './components/NoCitas';

const App = () => {
  // Estados
  const [citas, setCitas] = useState([]);
  const [nombre, setNombre] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [tipoSangre, setTipoSangre] = useState('');
  const [fecha, setFecha] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [editandoCita, setEditandoCita] = useState(null);

  // Funciones
  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setFecha(selectedDate);
    }
  };

  const handleDeleteCita = (id) => {
    setCitas(citas.filter(cita => cita.id !== id));
  };

  const handleEditCita = (id) => {
    const citaAEditar = citas.find(cita => cita.id === id);
    if (citaAEditar) {
      setEditandoCita(citaAEditar);
      setNombre(citaAEditar.nombre);
      setSintomas(citaAEditar.sintomas);
      setTipoSangre(citaAEditar.tipoSangre);
      setFecha(new Date(citaAEditar.fecha));
    }
  };

  const agregarCita = () => {
    if (nombre.trim() && sintomas.trim() && tipoSangre.trim()) {
      if (editandoCita) {
        const citasActualizadas = citas.map(cita =>
          cita.id === editandoCita.id ? { ...editandoCita, nombre, sintomas, tipoSangre, fecha: fecha.toLocaleDateString() } : cita
        );
        setCitas(citasActualizadas);
        setEditandoCita(null);
      } else {
        setCitas([...citas, { id: Date.now(), nombre, sintomas, tipoSangre, fecha: fecha.toLocaleDateString() }]);
      }
      setNombre('');
      setSintomas('');
      setTipoSangre('');
      setFecha(new Date());
    }
  };

  const renderCita = ({ item }) => (
    <Cita 
      item={item} 
      handleDeleteCita={handleDeleteCita} 
      handleEditCita={handleEditCita} 
    />
  );

  return (
    <View style={styles.container}>
      <Header />
      <FormularioCita 
        nombre={nombre} 
        setNombre={setNombre} 
        sintomas={sintomas} 
        setSintomas={setSintomas} 
        tipoSangre={tipoSangre} 
        setTipoSangre={setTipoSangre} 
        fecha={fecha} 
        setFecha={setFecha} 
        toggleDatePicker={toggleDatePicker} 
        showDatePicker={showDatePicker} 
        agregarCita={agregarCita} 
        editandoCita={editandoCita} 
      />
      {citas.length === 0 ? (
        <NoCitas />
      ) : (
        <ListaCitas 
          citas={citas} 
          handleDeleteCita={handleDeleteCita} 
          handleEditCita={handleEditCita} 
          renderCita={renderCita} 
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});

export default App;
