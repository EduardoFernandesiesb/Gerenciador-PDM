// src/screens/SubscriptionListScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, Button } from 'react-native';
import { db } from '../../firebaseConfig';
import { collection, onSnapshot, doc, deleteDoc, query, orderBy } from 'firebase/firestore';

const SubscriptionListScreen = ({ navigation }) => {
  const [subscriptions, setSubscriptions] = useState([]);

  // useEffect para buscar os dados em tempo real
  useEffect(() => {
    // Cria uma consulta (query) para buscar os documentos da coleção 'assinaturas'
    // e ordena pela data de renovação
    const q = query(collection(db, 'assinaturas'), orderBy('dataRenovacao', 'asc'));

    // onSnapshot é o nosso listener em tempo real
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const subs = [];
      querySnapshot.forEach((doc) => {
        // Para cada documento, pegamos os dados e o ID
        subs.push({ id: doc.id, ...doc.data() });
      });
      // Atualiza o estado com a nova lista de assinaturas
      setSubscriptions(subs);
    });

    // Função de limpeza: é executada quando o componente é "desmontado" (sai da tela)
    // Isso evita vazamentos de memória e listeners rodando sem necessidade
    return () => unsubscribe();
  }, []); // O array vazio [] significa que este efeito roda apenas uma vez (ao montar)


  // Função para deletar uma assinatura
  const handleDelete = (id) => {
    Alert.alert(
      "Excluir Assinatura",
      "Você tem certeza que deseja excluir esta assinatura?",
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Excluir", 
          onPress: async () => {
            try {
              await deleteDoc(doc(db, 'assinaturas', id));
              Alert.alert("Sucesso", "Assinatura excluída!");
            } catch (error) {
              console.error("Erro ao excluir: ", error);
              Alert.alert("Erro", "Não foi possível excluir a assinatura.");
            }
          },
          style: "destructive" 
        },
      ]
    );
  };

  // Componente que renderiza cada item da lista
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity 
        style={styles.itemInfo}
        // Ao tocar no item, navega para a tela de edição, passando os dados do item
        onPress={() => navigation.navigate('AddSubscription', { subscription: item })}
      >
        <Text style={styles.itemName}>{item.nome}</Text>
        <Text style={styles.itemDetails}>
          R$ {item.valor.toFixed(2)} - Vence em: {item.dataRenovacao.toDate().toLocaleDateString('pt-BR')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.deleteButton} 
        onPress={() => handleDelete(item.id)}
      >
        <Text style={styles.deleteButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={subscriptions}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        // Mostra uma mensagem se a lista estiver vazia
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhuma assinatura cadastrada.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDetails: {
    fontSize: 14,
    color: '#666',
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 50,
    marginLeft: 10,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: '#888',
  }
});

export default SubscriptionListScreen;