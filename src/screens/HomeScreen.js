import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { db } from '../../firebaseConfig';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import FloatingActionButton from '../components/FloatingActionButton';

const HomeScreen = ({ navigation }) => {
  const [totalGasto, setTotalGasto] = useState(0);
  const [proximasAssinaturas, setProximasAssinaturas] = useState([]);
  
 
  useFocusEffect(
    React.useCallback(() => {
      const q = query(collection(db, 'assinaturas'), orderBy('dataRenovacao', 'asc'));

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const assinaturas = [];
        querySnapshot.forEach((doc) => {
          assinaturas.push({ id: doc.id, ...doc.data() });
        });

        // Calcula o gasto total
        const total = assinaturas.reduce((sum, item) => sum + item.valor, 0);
        setTotalGasto(total);

    
        // O slice pega os 3 primeiros itens do array já ordenado
        setProximasAssinaturas(assinaturas.slice(0, 3));
      });

      return () => unsubscribe();
    }, [])
  );

  const renderProximaAssinatura = ({ item }) => (
    <View style={styles.proximoItem}>
      <Text style={styles.proximoItemNome}>{item.nome}</Text>
      <Text style={styles.proximoItemDetalhes}>
        R$ {item.valor.toFixed(2)} - Vence em: {item.dataRenovacao.toDate().toLocaleDateString('pt-BR')}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Card de Resumo Financeiro */}
      <View style={styles.resumoCard}>
        <Text style={styles.resumoLabel}>Gasto Mensal Total</Text>
        <Text style={styles.resumoValor}>R$ {totalGasto.toFixed(2)}</Text>
      </View>

      {/* Seção de Próximas Renovações */}
      <View style={styles.proximosContainer}>
        <Text style={styles.proximosTitle}>Próximas Renovações</Text>
        <FlatList
          data={proximasAssinaturas}
          renderItem={renderProximaAssinatura}
          keyExtractor={item => item.id}
          ListEmptyComponent={<Text style={styles.emptyText}>Você não tem assinaturas próximas.</Text>}
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button
          title="Ver Todas as Assinaturas"
          onPress={() => navigation.navigate('SubscriptionList')}
        />
      </View>
      
        <FloatingActionButton onPress={() => navigation.navigate('AddSubscription')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
  },
  resumoCard: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 25,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  resumoLabel: {
    fontSize: 18,
    color: '#666',
  },
  resumoValor: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1a73e8',
    marginTop: 5,
  },
  proximosContainer: {
    marginHorizontal: 20,
    flex: 1, 
  },
  proximosTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  proximoItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  proximoItemNome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  proximoItemDetalhes: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#777',
  },
  buttonContainer: {
    margin: 20,
  },
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    backgroundColor: '#1a73e8',
    borderRadius: 30,
    elevation: 8,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
  },
  fabIcon: {
    fontSize: 30,
    color: 'white',
  },
});

export default HomeScreen;