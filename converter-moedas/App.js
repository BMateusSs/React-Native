import {useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';

import AreaMoeda from './components/AreaMoeda';
import { api } from './services/api';


export default function App() {
  const [moedas, setMoedas] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadMoedas() {
      const response = await api.get('all')

      let arrayMoedas = [];
      Object.keys(response.data).map((key) => {
        arrayMoedas.push({
          key: key,
          label: key,
          value: key
        }
        )
      })
      setMoedas(arrayMoedas)
      setLoading(false)

    }
    loadMoedas();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <AreaMoeda/>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101215',
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  subContainer: {
    flexDirection: 'row'
  }
});
