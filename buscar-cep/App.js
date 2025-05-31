import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import api from './services/api'

export default function App() {
  const [cep, setCep] = useState('')
  const inputRef = useRef(null)
  const [cepUser, setCepUser] = useState(null)

  async function buscar(){
    if (cep === ''){
      alert("CEP inválido")
      setCep
      return
    }
    const response = await api.get(`/${cep}/json`)
    console.log(response)
    setCepUser(response.data)
  }

  function limpar(){
    setCep('')
    inputRef.current.focus();
    setCepUser(null)
  }

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', width: '100%'}}>
        <Text style={styles.text}>Digite o CEP desejado:</Text>
        <TextInput
          style={styles.input}
          placeholder='Ex: 12345678'
          value={cep}
          onChangeText={setCep}
          ref={inputRef}
        />
      </View>

      <View style={styles.areabtn}>
        <TouchableOpacity style={[styles.botao, {backgroundColor: 'green'}]}
        onPress={buscar}
        >
          <Text style={styles.textbtn}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, {backgroundColor: 'red'}]}
        onPress={limpar}
        >
          <Text style={styles.textbtn}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {cepUser && 
        <View style={styles.resultado}>
          <Text style={styles.itemText}>Cep: {cepUser.cep}</Text>
          <Text style={styles.itemText}>Logradouro: {cepUser.logradouro} </Text>
          <Text style={styles.itemText}>Bairro: {cepUser.bairro}</Text>
          <Text style={styles.itemText}>Cidade: {cepUser.localidade}</Text>
          <Text style={styles.itemText}>Estado: {cepUser.estado}</Text>
        </View>
      }
      
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
  },
  areabtn: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    width: '100%'
  },
  botao:{
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 15
  },
  textbtn: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  resultado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemText: {
    fontSize: 22
  }
});
