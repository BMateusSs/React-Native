import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import api from './services/api';

export default function App() {
  const [cep, setCep] = useState('')

  async function buscar() {
    if (cep = ''){
      alert("Preencha corretamente")
    }

    const response = await api.get(`/${cep}`)

  }

  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center'}}>
        <Text>Digite o CEP desejado:</Text>
        <TextInput
          style={styles.input}
          placeholder='Ex: 12345678'
          value={cep}
          onChangeText={setCep}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    
  }
});
