import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import api from './services/api';

export default function App() {
  const [cep, setCep] = useState('')

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.text}>Digite o CEP desejado:</Text>
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
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    width: '90%',
    padding: 10,
    fontSize: 18
  },
  text: {
    marginTop: 35,
    marginBottom: 15,
    fontWeight: 'bold',
    fontSize: 25,
  }
});
