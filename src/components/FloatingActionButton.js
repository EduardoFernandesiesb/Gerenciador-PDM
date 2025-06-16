import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Este componente recebe uma propriedade (prop) chamada 'onPress'
const FloatingActionButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.fab}
      onPress={onPress} // A função passada por prop é usada aqui
    >
      <Text style={styles.fabIcon}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 19,
    bottom: 70,
    backgroundColor: '#1a73e8',
    borderRadius: 30,
    elevation: 8,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
  },
  fabIcon: {
    fontSize: 30,
    color: 'white', 
  }
});

export default FloatingActionButton;