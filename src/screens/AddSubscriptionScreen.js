import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { db } from '../../firebaseConfig'; 
import { collection, addDoc, doc, updateDoc, Timestamp } from 'firebase/firestore';


const AddSubscriptionScreen = ({ navigation, route }) => {
  // Estados para cada campo do formulário
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [dataRenovacao, setDataRenovacao] = useState('');
  const [categoria, setCategoria] = useState('');


  const isEditing = route.params?.subscription;
  const subscriptionId = route.params?.subscription?.id;

  
  useEffect(() => {
    if (isEditing) {
      const { nome, valor, dataRenovacao, categoria } = route.params.subscription;
      setNome(nome);
      setValor(valor.toString()); // Convertemos para string para o TextInput
      // Formatamos o Timestamp do Firebase para uma data legível (AAAA-MM-DD)
      const formattedDate = dataRenovacao.toDate().toISOString().split('T')[0];
      setDataRenovacao(formattedDate);
      setCategoria(categoria);
    }
  }, [isEditing, route.params]);


  const handleSaveSubscription = async () => {
    // Validação simples
    if (!nome || !valor || !dataRenovacao) {
      Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios.")
      return;
    }

    // Prepara o objeto com os dados para salvar
    const subscriptionData = {
      nome,
      valor: parseFloat(valor),
      dataRenovacao: Timestamp.fromDate(new Date(dataRenovacao)),
      categoria,
    };

    try {
      if (isEditing) {
        
        const subscriptionRef = doc(db, 'assinaturas', subscriptionId);
        await updateDoc(subscriptionRef, subscriptionData);
        Alert.alert("Sucesso", "Assinatura atualizada!");
      } else {
      
        await addDoc(collection(db, "assinaturas"), subscriptionData);
        Alert.alert("Sucesso", "Assinatura adicionada!");
      }
      // Após salvar, volta para a tela anterior
      navigation.goBack();
    } catch (error) {
      console.error("Erro ao salvar assinatura: ", error);
      Alert.alert("Erro", "Não foi possível salvar a assinatura.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome da Assinatura*</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Ex: Netflix"
      />

      <Text style={styles.label}>Valor Mensal (R$)*</Text>
      <TextInput
        style={styles.input}
        value={valor}
        onChangeText={setValor}
        placeholder="Ex: 39.90"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Data de Próxima Renovação*</Text>
      <TextInput
        style={styles.input}
        value={dataRenovacao}
        onChangeText={setDataRenovacao}
        placeholder="Formato: AAAA-MM-DD"
      />
      
      <Text style={styles.label}>Categoria</Text>
      <TextInput
        style={styles.input}
        value={categoria}
        onChangeText={setCategoria}
        placeholder="Ex: Streaming, Educação, etc."
      />

      <Button
        title={isEditing ? "Atualizar Assinatura" : "Adicionar Assinatura"}
        onPress={handleSaveSubscription}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 16,
    borderRadius: 6,
    marginBottom: 20,
  },
});

export default AddSubscriptionScreen;