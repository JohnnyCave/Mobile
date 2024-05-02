import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.titulo}>Citas Médicas</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#333333',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'sans-serif',
    marginTop: '4%',
    textAlign: 'center',
  },
});

export default Header;
